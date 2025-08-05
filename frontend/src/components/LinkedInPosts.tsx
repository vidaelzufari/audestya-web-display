import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LinkedInService, LinkedInPost } from '@/lib/linkedin-service';
import LinkedInPostCard from '@/components/LinkedInPostCard';
import { Linkedin, RefreshCw, Loader2, AlertCircle, LogOut } from 'lucide-react';

export const LinkedInPosts: React.FC = () => {
  const [posts, setPosts] = useState<LinkedInPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [expandedPosts, setExpandedPosts] = useState<Set<string>>(new Set());
  const linkedInService = LinkedInService.getInstance();

  useEffect(() => {
    if (linkedInService.isAuthenticated()) {
      fetchPosts();
    }
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);

    try {
      const userPosts = await linkedInService.fetchLatestPosts(10);
      setPosts(userPosts);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch posts');
      if (err instanceof Error && err.message === 'Authentication expired') {
        // Handle token expiration
        linkedInService.clearToken();
        window.location.reload();
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    linkedInService.logout();
    window.location.reload();
  };

  const togglePostExpansion = (postId: string) => {
    const newExpandedPosts = new Set(expandedPosts);
    if (newExpandedPosts.has(postId)) {
      newExpandedPosts.delete(postId);
    } else {
      newExpandedPosts.add(postId);
    }
    setExpandedPosts(newExpandedPosts);
  };

  if (loading && posts.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">
            Chargement des publications LinkedIn...
          </p>
        </div>
      </div>
    );
  }

  if (error && posts.length === 0) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="p-8 text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Erreur de chargement
          </h3>
          <p className="text-muted-foreground mb-4">{error}</p>
          <div className="space-y-2">
            <Button onClick={fetchPosts} className="w-full">
              <RefreshCw className="w-4 h-4 mr-2" />
              Réessayer
            </Button>
            <Button variant="outline" onClick={handleLogout} className="w-full">
              <LogOut className="w-4 h-4 mr-2" />
              Se déconnecter
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header with controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Connecté à LinkedIn
          </Badge>
          <span className="text-sm text-muted-foreground">
            {posts.length} publication{posts.length > 1 ? 's' : ''} chargée{posts.length > 1 ? 's' : ''}
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={fetchPosts}
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="w-4 h-4 mr-1 animate-spin" />
            ) : (
              <RefreshCw className="w-4 h-4 mr-1" />
            )}
            Actualiser
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 mr-1" />
            Déconnecter
          </Button>
        </div>
      </div>

      {/* Error banner */}
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center text-red-700">
            <AlertCircle className="w-4 h-4 mr-2" />
            <span className="text-sm">{error}</span>
          </div>
        </div>
      )}

      {/* Posts list */}
      {posts.length > 0 ? (
        <div className="space-y-6">
          {posts.map((post) => (
            <LinkedInPostCard
              key={post.id}
              post={post}
              isExpanded={expandedPosts.has(post.id)}
              onToggleExpand={() => togglePostExpansion(post.id)}
            />
          ))}
        </div>
      ) : (
        !loading && (
          <Card>
            <CardContent className="p-8 text-center">
              <Linkedin className="w-12 h-12 text-blue-600 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Aucune publication trouvée
              </h3>
              <p className="text-muted-foreground mb-4">
                Aucune publication LinkedIn n'a été trouvée pour ce compte.
              </p>
              <Button onClick={fetchPosts}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Réessayer
              </Button>
            </CardContent>
          </Card>
        )
      )}
    </div>
  );
};
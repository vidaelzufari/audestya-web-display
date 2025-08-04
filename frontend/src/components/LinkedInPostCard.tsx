import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  ThumbsUp, 
  MessageCircle, 
  Share2, 
  ExternalLink,
  Calendar,
  User,
  Eye
} from 'lucide-react';
import { LinkedInPost, LinkedInService } from '@/lib/linkedin-service';

interface LinkedInPostCardProps {
  post: LinkedInPost;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

const LinkedInPostCard: React.FC<LinkedInPostCardProps> = ({ 
  post, 
  isExpanded = false, 
  onToggleExpand 
}) => {
  const linkedInService = LinkedInService.getInstance();

  const handleViewOnLinkedIn = () => {
    window.open(post.author.profileUrl, '_blank');
  };

  const formatContent = (content: string) => {
    const maxLength = 280;
    if (content.length <= maxLength || isExpanded) {
      return content;
    }
    return content.substring(0, maxLength) + '...';
  };

  const shouldShowReadMore = post.content.length > 280 && !isExpanded;

  return (
    <Card className="w-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/30">
      <CardContent className="p-6">
        {/* Header with author info */}
        <div className="flex items-start space-x-4 mb-4">
          <div className="relative">
            <img
              src={post.author.profileImage}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-foreground hover:text-primary cursor-pointer">
                  {post.author.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">
                  {post.author.title}
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3 mr-1" />
                  {linkedInService.formatDate(post.publishedDate)}
                </div>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleViewOnLinkedIn}
                className="shrink-0 text-xs"
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>

        {/* Post content */}
        <div className="mb-4">
          <div className="text-foreground leading-relaxed whitespace-pre-line">
            {formatContent(post.content)}
          </div>
          
          {shouldShowReadMore && (
            <Button
              variant="link"
              className="p-0 h-auto text-primary hover:text-primary/80"
              onClick={onToggleExpand}
            >
              Lire la suite
            </Button>
          )}
          
          {isExpanded && post.content.length > 280 && (
            <Button
              variant="link"
              className="p-0 h-auto text-primary hover:text-primary/80 block mt-2"
              onClick={onToggleExpand}
            >
              Voir moins
            </Button>
          )}
        </div>

        {/* Media content (if any) */}
        {post.media && (
          <div className="mb-4 rounded-lg overflow-hidden bg-muted/30">
            {post.media.type === 'image' && (
              <img
                src={post.media.url}
                alt="Post media"
                className="w-full h-64 object-cover"
              />
            )}
            {post.media.type === 'video' && (
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <div className="w-0 h-0 border-l-8 border-r-0 border-t-4 border-b-4 border-l-white border-t-transparent border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-sm text-muted-foreground">Vidéo LinkedIn</p>
                </div>
              </div>
            )}
          </div>
        )}

        <Separator className="my-4" />

        {/* Engagement stats */}
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <ThumbsUp className="w-4 h-4 mr-1 text-blue-600" />
              <span>{linkedInService.formatEngagement(post.likes)}</span>
            </div>
            <div className="flex items-center">
              <MessageCircle className="w-4 h-4 mr-1" />
              <span>{post.comments} commentaires</span>
            </div>
            <div className="flex items-center">
              <Share2 className="w-4 h-4 mr-1" />
              <span>{post.shares} partages</span>
            </div>
          </div>
          
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            <Eye className="w-3 h-3 mr-1" />
            Actuel
          </Badge>
        </div>

        {/* Comments preview */}
        {isExpanded && post.engagement.commentsList.length > 0 && (
          <div className="mt-4 pt-4 border-t">
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Commentaires récents
            </h4>
            <div className="space-y-3">
              {post.engagement.commentsList.slice(0, 2).map((comment, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">
                      {comment.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {comment.content}
                    </p>
                  </div>
                </div>
              ))}
              {post.engagement.commentsList.length > 2 && (
                <Button variant="link" className="p-0 h-auto text-xs text-primary">
                  Voir tous les commentaires sur LinkedIn
                </Button>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LinkedInPostCard;
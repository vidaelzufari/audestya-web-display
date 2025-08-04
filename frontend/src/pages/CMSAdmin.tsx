import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Settings, 
  FileText, 
  Plus, 
  Edit, 
  Save, 
  Eye, 
  Trash2,
  Loader2,
  Globe,
  Palette,
  Mail,
  Phone,
  Linkedin
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import CMSService, { ContentPage, CMSSettings } from '@/lib/cms-service';

const CMSAdmin = () => {
  const [pages, setPages] = useState<ContentPage[]>([]);
  const [settings, setSettings] = useState<CMSSettings | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('pages');
  
  // Form states
  const [editingPage, setEditingPage] = useState<ContentPage | null>(null);
  const [settingsForm, setSettingsForm] = useState({
    site_title: '',
    site_description: '',
    contact_email: '',
    contact_phone: '',
    linkedin_url: '',
    primary_color: '',
    secondary_color: ''
  });

  const { toast } = useToast();
  const cmsService = CMSService.getInstance();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    try {
      // Charger les pages
      const pagesResult = await cmsService.getAllPages();
      if (pagesResult.data) {
        setPages(pagesResult.data);
      }

      // Charger les paramètres
      const settingsResult = await cmsService.getSettings();
      if (settingsResult.data) {
        setSettings(settingsResult.data);
        setSettingsForm({
          site_title: settingsResult.data.site_title,
          site_description: settingsResult.data.site_description,
          contact_email: settingsResult.data.contact_email,
          contact_phone: settingsResult.data.contact_phone,
          linkedin_url: settingsResult.data.linkedin_url,
          primary_color: settingsResult.data.primary_color,
          secondary_color: settingsResult.data.secondary_color
        });
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de charger les données CMS",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const saveSettings = async () => {
    setIsEditing(true);
    try {
      const result = await cmsService.updateSettings(settingsForm);
      if (result.error) {
        throw new Error(result.error);
      }
      
      setSettings(result.data);
      toast({
        title: "Succès",
        description: "Paramètres sauvegardés avec succès",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de sauvegarder les paramètres",
        variant: "destructive",
      });
    } finally {
      setIsEditing(false);
    }
  };

  const createNewPage = () => {
    const newPage: Partial<ContentPage> = {
      slug: '',
      title: '',
      meta_description: '',
      hero_title: '',
      hero_description: '',
      sections: [],
      status: 'draft'
    };
    setEditingPage(newPage as ContentPage);
    setActiveTab('editor');
  };

  const editPage = (page: ContentPage) => {
    setEditingPage(page);
    setActiveTab('editor');
  };

  const savePage = async () => {
    if (!editingPage) return;
    
    setIsEditing(true);
    try {
      let result;
      if (editingPage.id) {
        // Update existing page
        result = await cmsService.updatePage(editingPage.slug, editingPage);
      } else {
        // Create new page
        result = await cmsService.createPage(editingPage);
      }

      if (result.error) {
        throw new Error(result.error);
      }

      toast({
        title: "Succès",
        description: `Page ${editingPage.id ? 'mise à jour' : 'créée'} avec succès`,
      });
      
      setEditingPage(null);
      setActiveTab('pages');
      loadData(); // Recharger la liste
      
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de sauvegarder la page",
        variant: "destructive",
      });
    } finally {
      setIsEditing(false);
    }
  };

  const deletePage = async (slug: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette page ?')) return;
    
    try {
      const result = await cmsService.deletePage(slug);
      if (result.error) {
        throw new Error(result.error);
      }
      
      toast({
        title: "Succès",
        description: "Page supprimée avec succès",
      });
      
      loadData(); // Recharger la liste
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de supprimer la page",
        variant: "destructive",
      });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('fr-FR');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">Chargement du CMS...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <section className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[
            { label: 'Accueil', path: '/' },
            { label: 'Administration', path: '/admin' }
          ]} />
        </div>
      </section>

      {/* CMS Header */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Administration CMS
            </h1>
            <p className="text-lg text-muted-foreground">
              Gérez le contenu et les paramètres de votre site
            </p>
          </div>
        </div>
      </section>

      {/* CMS Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="pages" className="flex items-center space-x-2">
                  <FileText className="w-4 h-4" />
                  <span>Pages ({pages.length})</span>
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex items-center space-x-2">
                  <Settings className="w-4 h-4" />
                  <span>Paramètres</span>
                </TabsTrigger>
                <TabsTrigger value="editor" className="flex items-center space-x-2">
                  <Edit className="w-4 h-4" />
                  <span>Éditeur</span>
                </TabsTrigger>
              </TabsList>

              {/* Pages Tab */}
              <TabsContent value="pages" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-foreground">
                    Gestion des Pages
                  </h2>
                  <Button onClick={createNewPage} className="bg-primary hover:bg-primary/90">
                    <Plus className="w-4 h-4 mr-2" />
                    Nouvelle Page
                  </Button>
                </div>

                <div className="grid gap-4">
                  {pages.map((page) => (
                    <Card key={page.id} className="border-l-4 border-l-primary">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <CardTitle className="text-lg">{page.title}</CardTitle>
                            <CardDescription>
                              Slug: /{page.slug} • Créée le {formatDate(page.created_at)}
                            </CardDescription>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant={page.status === 'published' ? 'default' : 'secondary'}>
                              {page.status === 'published' ? 'Publiée' : 'Brouillon'}
                            </Badge>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => editPage(page)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(`/${page.slug}`, '_blank')}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => deletePage(page.slug)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground line-clamp-2">
                          {page.meta_description}
                        </p>
                        <div className="mt-3 text-sm text-muted-foreground">
                          {page.sections.length} section{page.sections.length !== 1 ? 's' : ''}
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {pages.length === 0 && (
                    <div className="text-center py-12">
                      <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Aucune page créée</p>
                    </div>
                  )}
                </div>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-foreground">
                    Paramètres du Site
                  </h2>
                  <Button 
                    onClick={saveSettings} 
                    disabled={isEditing}
                    className="bg-primary hover:bg-primary/90"
                  >
                    {isEditing ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Save className="w-4 h-4 mr-2" />
                    )}
                    Sauvegarder
                  </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Informations générales */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Globe className="w-5 h-5" />
                        <span>Informations Générales</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Titre du site</label>
                        <Input
                          value={settingsForm.site_title}
                          onChange={(e) => setSettingsForm(prev => ({
                            ...prev,
                            site_title: e.target.value
                          }))}
                          placeholder="Audestya Avocat"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Description du site</label>
                        <Textarea
                          value={settingsForm.site_description}
                          onChange={(e) => setSettingsForm(prev => ({
                            ...prev,
                            site_description: e.target.value
                          }))}
                          placeholder="Cabinet d'avocat spécialisé..."
                          rows={3}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Contact */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Phone className="w-5 h-5" />
                        <span>Informations de Contact</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium flex items-center space-x-2">
                          <Mail className="w-4 h-4" />
                          <span>Email</span>
                        </label>
                        <Input
                          type="email"
                          value={settingsForm.contact_email}
                          onChange={(e) => setSettingsForm(prev => ({
                            ...prev,
                            contact_email: e.target.value
                          }))}
                          placeholder="contact@audestya-avocat.com"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium flex items-center space-x-2">
                          <Phone className="w-4 h-4" />
                          <span>Téléphone</span>
                        </label>
                        <Input
                          value={settingsForm.contact_phone}
                          onChange={(e) => setSettingsForm(prev => ({
                            ...prev,
                            contact_phone: e.target.value
                          }))}
                          placeholder="+33685353781"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium flex items-center space-x-2">
                          <Linkedin className="w-4 h-4" />
                          <span>LinkedIn</span>
                        </label>
                        <Input
                          value={settingsForm.linkedin_url}
                          onChange={(e) => setSettingsForm(prev => ({
                            ...prev,
                            linkedin_url: e.target.value
                          }))}
                          placeholder="https://linkedin.com/in/..."
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Design */}
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Palette className="w-5 h-5" />
                        <span>Personnalisation Design</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <label className="text-sm font-medium">Couleur Principale</label>
                          <div className="flex items-center space-x-2">
                            <Input
                              type="color"
                              value={settingsForm.primary_color}
                              onChange={(e) => setSettingsForm(prev => ({
                                ...prev,
                                primary_color: e.target.value
                              }))}
                              className="w-16 h-10 p-1 rounded"
                            />
                            <Input
                              value={settingsForm.primary_color}
                              onChange={(e) => setSettingsForm(prev => ({
                                ...prev,
                                primary_color: e.target.value
                              }))}
                              placeholder="#1e40af"
                              className="flex-1"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Couleur Secondaire</label>
                          <div className="flex items-center space-x-2">
                            <Input
                              type="color"
                              value={settingsForm.secondary_color}
                              onChange={(e) => setSettingsForm(prev => ({
                                ...prev,
                                secondary_color: e.target.value
                              }))}
                              className="w-16 h-10 p-1 rounded"
                            />
                            <Input
                              value={settingsForm.secondary_color}
                              onChange={(e) => setSettingsForm(prev => ({
                                ...prev,
                                secondary_color: e.target.value
                              }))}
                              placeholder="#3b82f6"
                              className="flex-1"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Editor Tab */}
              <TabsContent value="editor" className="space-y-6">
                {editingPage ? (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-semibold text-foreground">
                        {editingPage.id ? 'Modifier la Page' : 'Nouvelle Page'}
                      </h2>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          onClick={() => {
                            setEditingPage(null);
                            setActiveTab('pages');
                          }}
                        >
                          Annuler
                        </Button>
                        <Button 
                          onClick={savePage}
                          disabled={isEditing}
                          className="bg-primary hover:bg-primary/90"
                        >
                          {isEditing ? (
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          ) : (
                            <Save className="w-4 h-4 mr-2" />
                          )}
                          Sauvegarder
                        </Button>
                      </div>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Informations de Base</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <label className="text-sm font-medium">Titre de la page</label>
                            <Input
                              value={editingPage.title}
                              onChange={(e) => setEditingPage(prev => prev ? ({
                                ...prev,
                                title: e.target.value
                              }) : null)}
                              placeholder="Titre de la page"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Slug (URL)</label>
                            <Input
                              value={editingPage.slug}
                              onChange={(e) => setEditingPage(prev => prev ? ({
                                ...prev,
                                slug: e.target.value
                              }) : null)}
                              placeholder="ma-page"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Description Meta</label>
                          <Textarea
                            value={editingPage.meta_description}
                            onChange={(e) => setEditingPage(prev => prev ? ({
                              ...prev,
                              meta_description: e.target.value
                            }) : null)}
                            placeholder="Description pour les moteurs de recherche"
                            rows={2}
                          />
                        </div>
                        <Separator />
                        <div>
                          <label className="text-sm font-medium">Titre Hero</label>
                          <Input
                            value={editingPage.hero_title}
                            onChange={(e) => setEditingPage(prev => prev ? ({
                              ...prev,
                              hero_title: e.target.value
                            }) : null)}
                            placeholder="Titre principal affiché"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Description Hero</label>
                          <Textarea
                            value={editingPage.hero_description}
                            onChange={(e) => setEditingPage(prev => prev ? ({
                              ...prev,
                              hero_description: e.target.value
                            }) : null)}
                            placeholder="Description affichée sous le titre"
                            rows={3}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Statut</label>
                          <select
                            value={editingPage.status}
                            onChange={(e) => setEditingPage(prev => prev ? ({
                              ...prev,
                              status: e.target.value as 'draft' | 'published'
                            }) : null)}
                            className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                          >
                            <option value="draft">Brouillon</option>
                            <option value="published">Publié</option>
                          </select>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Sections de Contenu</CardTitle>
                        <CardDescription>
                          Fonctionnalité avancée à venir - Éditeur de sections modulaires
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center py-8 text-muted-foreground">
                          <Edit className="w-12 h-12 mx-auto mb-4 opacity-50" />
                          <p>L'éditeur de sections sera disponible prochainement</p>
                          <p className="text-sm">Pour le moment, utilisez les APIs directement</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Sélectionnez une page à modifier ou créez une nouvelle page
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CMSAdmin;
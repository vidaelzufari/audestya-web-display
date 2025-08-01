import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, Shield, Users } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    objet: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation des champs obligatoires
    if (!formData.nom || !formData.prenom || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Création du lien mailto avec les données du formulaire
      const subject = encodeURIComponent(formData.objet || 'Demande de contact');
      const body = encodeURIComponent(
        `Nom: ${formData.nom}\n` +
        `Prénom: ${formData.prenom}\n` +
        `Email: ${formData.email}\n` +
        `Téléphone: ${formData.telephone}\n\n` +
        `Message:\n${formData.message}`
      );
      
      const mailtoLink = `mailto:contact@audestya-avocat.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      
      // Reset du formulaire après succès
      setTimeout(() => {
        setFormData({
          nom: '',
          prenom: '',
          email: '',
          telephone: '',
          objet: '',
          message: ''
        });
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              Contactez-moi
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Prenez rendez-vous pour une consultation personnalisée. Je vous accompagne dans tous vos projets juridiques.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div className="space-y-8">
              {/* Coordonnées */}
              <Card className="bg-background shadow-soft border-0">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                    Mes coordonnées
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-primary">Téléphone</p>
                        <a href="tel:+33123456789" className="text-muted-foreground hover:text-secondary transition-colors">
                          01 23 45 67 89
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-primary">Email</p>
                        <a href="mailto:contact@audestya-avocat.com" className="text-muted-foreground hover:text-secondary transition-colors">
                          contact@audestya-avocat.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-primary">Localisation</p>
                        <p className="text-muted-foreground">
                          Paris et région parisienne<br />
                          Consultations sur rendez-vous
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pourquoi me choisir */}
              <Card className="bg-background shadow-soft border-0">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                    Pourquoi me choisir ?
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-primary">Réactivité</p>
                        <p className="text-muted-foreground">
                          Réponse rapide à vos demandes et suivi personnalisé de vos dossiers
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Shield className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-primary">Expertise</p>
                        <p className="text-muted-foreground">
                          Spécialisation en droit des affaires et accompagnement juridique complet
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Users className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-primary">Proximité</p>
                        <p className="text-muted-foreground">
                          Relation de confiance et conseil personnalisé adapté à vos besoins
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Formulaire de contact */}
            <Card className="bg-background shadow-soft border-0">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                  Envoyez-moi un message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nom" className="text-primary font-medium">
                        Nom *
                      </Label>
                      <Input
                        id="nom"
                        name="nom"
                        type="text"
                        value={formData.nom}
                        onChange={handleInputChange}
                        required
                        className="border-muted focus:border-secondary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="prenom" className="text-primary font-medium">
                        Prénom *
                      </Label>
                      <Input
                        id="prenom"
                        name="prenom"
                        type="text"
                        value={formData.prenom}
                        onChange={handleInputChange}
                        required
                        className="border-muted focus:border-secondary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-primary font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-muted focus:border-secondary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telephone" className="text-primary font-medium">
                        Téléphone
                      </Label>
                      <Input
                        id="telephone"
                        name="telephone"
                        type="tel"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        className="border-muted focus:border-secondary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="objet" className="text-primary font-medium">
                      Objet
                    </Label>
                    <Input
                      id="objet"
                      name="objet"
                      type="text"
                      value={formData.objet}
                      onChange={handleInputChange}
                      className="border-muted focus:border-secondary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-primary font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="border-muted focus:border-secondary resize-none"
                      placeholder="Décrivez votre demande..."
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-700 text-sm">
                        Veuillez remplir tous les champs obligatoires (*)
                      </p>
                    </div>
                  )}

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-700 text-sm">
                        Votre client email va s'ouvrir avec votre message pré-rempli.
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </Button>
                </form>

                <div className="mt-8 pt-6 border-t border-muted">
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Ou contactez-moi directement :
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="outline"
                      className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-white"
                      onClick={() => window.location.href = 'tel:+33123456789'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Appeler
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-white"
                      onClick={() => window.location.href = 'mailto:contact@audestya-avocat.com'}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
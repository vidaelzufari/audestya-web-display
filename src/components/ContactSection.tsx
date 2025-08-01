import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
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
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Créer le corps de l'email
      const emailBody = `
Nouveau message depuis le site Audestya Avocat

Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone || 'Non renseigné'}
Entreprise: ${formData.company || 'Non renseignée'}

Message:
${formData.message}
      `.trim();

      // Créer le lien mailto
      const mailtoLink = `mailto:haia.elzufari@audestya-avocat.com?subject=Nouveau message depuis le site web&body=${encodeURIComponent(emailBody)}`;
      
      // Ouvrir le client email
      window.location.href = mailtoLink;
      
      // Marquer comme succès après un délai
      setTimeout(() => {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
      }, 1000);

    } catch (error) {
      console.error('Erreur:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              Prenons Contact
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Échangeons sur vos enjeux juridiques. Je vous accompagne avec pragmatisme et expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-background shadow-soft border-0 p-8">
                <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                  Informations de Contact
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Téléphone</h4>
                      <a href="tel:+33685353781" className="text-muted-foreground hover:text-primary transition-colors">
                        +33 6 85 35 37 81
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Email</h4>
                      <a href="mailto:haia.elzufari@audestya-avocat.com" className="text-muted-foreground hover:text-primary transition-colors">
                        haia.elzufari@audestya-avocat.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Localisation</h4>
                      <p className="text-muted-foreground">Paris, France</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-primary text-primary-foreground shadow-elegant border-0 p-8">
                <h3 className="font-serif text-2xl font-bold mb-4">
                  Pourquoi me choisir ?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <p className="text-primary-foreground/90">Expertise confirmée en droit de la distribution</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <p className="text-primary-foreground/90">Approche pragmatique et business-oriented</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <p className="text-primary-foreground/90">Accompagnement personnalisé et réactif</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-background shadow-soft border-0 p-8">
              <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                Envoyez-moi un Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-primary font-medium">
                      Nom complet *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-muted focus:border-primary"
                      placeholder="Votre nom"
                    />
                  </div>
                  
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
                      className="border-muted focus:border-primary"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-primary font-medium">
                      Téléphone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-muted focus:border-primary"
                      placeholder="+33 6 00 00 00 00"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-primary font-medium">
                      Entreprise
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="border-muted focus:border-primary"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-primary font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="border-muted focus:border-primary resize-none"
                    placeholder="Décrivez brièvement votre besoin juridique..."
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-green-800">
                      Votre client email s'est ouvert avec votre message pré-rempli. Envoyez-le pour me contacter !
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-800 font-medium">Veuillez remplir tous les champs obligatoires</p>
                      <p className="text-red-700 text-sm mt-1">
                        Nom, email et message sont requis.
                      </p>
                    </div>
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground py-6 text-lg font-medium"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                      Ouverture de votre client email...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Envoyer le Message
                    </>
                  )}
                </Button>
              </form>

              {/* Alternative contact methods */}
              <div className="mt-8 pt-6 border-t border-muted">
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Ou contactez-moi directement :
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="outline" size="sm" asChild>
                    <a href="tel:+33685353781">
                      <Phone className="w-4 h-4 mr-2" />
                      Appeler
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="mailto:haia.elzufari@audestya-avocat.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Email direct
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
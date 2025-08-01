import React, { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });
  const form = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Remplacez ces valeurs par vos vraies clés EmailJS
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID',    // Votre Service ID
        'YOUR_TEMPLATE_ID',   // Votre Template ID
        form.current!,
        'YOUR_PUBLIC_KEY'     // Votre Public Key
      );

      console.log('Email envoyé avec succès:', result.text);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        prenom: '',
        nom: '',
        email: '',
        telephone: '',
        sujet: '',
        message: ''
      });
      
      // Initialize EmailJS with your public key
      emailjs.init('YOUR_PUBLIC_KEY');
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-background via-background/95 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6">
              Contact
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Échangeons sur vos enjeux juridiques. Je vous accompagne avec méthode, clarté et pragmatisme.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-background to-background/90 shadow-soft border-0 overflow-hidden group hover:shadow-elegant transition-all duration-500">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-8 text-center">
                    Coordonnées
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-accent hover:bg-accent/20 transition-colors duration-300">
                      <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="font-medium text-primary">Téléphone</p>
                        <a href="tel:+33685353781" className="text-muted-foreground hover:text-primary transition-colors">
                          +33 6 85 35 37 81
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-accent hover:bg-accent/20 transition-colors duration-300">
                      <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="font-medium text-primary">Email</p>
                        <a href="mailto:haia.elzufari@audestya-avocat.com" className="text-muted-foreground hover:text-primary transition-colors">
                          haia.elzufari@audestya-avocat.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-accent hover:bg-accent/20 transition-colors duration-300">
                      <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="font-medium text-primary">Localisation</p>
                        <p className="text-muted-foreground">Paris, France</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <Card className="bg-gradient-primary text-primary-foreground shadow-elegant border-0">
                <CardContent className="p-8 text-center">
                  <h4 className="font-serif text-xl font-bold mb-4">
                    Première consultation
                  </h4>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Un premier échange pour cerner vos besoins et définir les modalités d'intervention les plus adaptées.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-gradient-to-br from-background to-background/90 shadow-soft border-0 overflow-hidden">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-primary mb-8 text-center">
                  Formulaire de contact
                </h3>

                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="prenom" className="text-sm font-medium text-primary">
                        Prénom *
                      </Label>
                      <Input
                        id="prenom"
                        name="prenom"
                        type="text"
                        required
                        value={formData.prenom}
                        onChange={handleInputChange}
                        className="border-border/50 focus:border-primary transition-colors"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nom" className="text-sm font-medium text-primary">
                        Nom *
                      </Label>
                      <Input
                        id="nom"
                        name="nom"
                        type="text"
                        required
                        value={formData.nom}
                        onChange={handleInputChange}
                        className="border-border/50 focus:border-primary transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-primary">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-border/50 focus:border-primary transition-colors"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telephone" className="text-sm font-medium text-primary">
                      Téléphone
                    </Label>
                    <Input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      className="border-border/50 focus:border-primary transition-colors"
                      placeholder="Votre numéro de téléphone"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sujet" className="text-sm font-medium text-primary">
                      Sujet *
                    </Label>
                    <Input
                      id="sujet"
                      name="sujet"
                      type="text"
                      required
                      value={formData.sujet}
                      onChange={handleInputChange}
                      className="border-border/50 focus:border-primary transition-colors"
                      placeholder="Objet de votre demande"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-primary">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-border/50 focus:border-primary transition-colors min-h-[120px] resize-none"
                      placeholder="Décrivez votre demande ou vos besoins juridiques..."
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                      <CheckCircle className="w-5 h-5" />
                      <span>Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                      <AlertCircle className="w-5 h-5" />
                      <span>Une erreur s'est produite. Veuillez réessayer ou me contacter directement.</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground border-0 py-6 text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Envoi en cours...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Envoyer le message
                      </div>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Champs obligatoires. Vos données sont traitées conformément à notre{' '}
                    <a href="/politique-confidentialite" className="text-primary hover:text-secondary underline">
                      politique de confidentialité
                    </a>.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
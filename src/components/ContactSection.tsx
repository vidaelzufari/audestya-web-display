import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { toast } from './ui/sonner';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    try {
      // Configuration EmailJS
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: 'haia.elzufari@audestya-avocat.com',
        reply_to: formData.email,
      };

      // Envoi de l'email principal à vous
      await emailjs.send(
        'service_audestya', // Service ID - à remplacer
        'template_contact', // Template ID - à remplacer  
        templateParams,
        'YOUR_PUBLIC_KEY' // Public Key - à remplacer
      );

      // Envoi de l'email de confirmation à l'utilisateur
      const confirmationParams = {
        to_name: `${formData.firstName} ${formData.lastName}`,
        to_email: formData.email,
        subject: formData.subject,
        from_name: 'Haia El Zufari - Audestya Avocat',
      };

      await emailjs.send(
        'service_audestya', // Service ID - à remplacer
        'template_confirmation', // Template ID pour confirmation - à remplacer
        confirmationParams,
        'YOUR_PUBLIC_KEY' // Public Key - à remplacer
      );

      toast.success("Message envoyé avec succès !", {
        description: "Nous vous répondrons dans les plus brefs délais. Un email de confirmation vous a été envoyé."
      });

      // Réinitialiser le formulaire
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      toast.error("Erreur lors de l'envoi", {
        description: "Veuillez réessayer ou nous contacter directement par email."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-background/95 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Un premier échange pour poser un cadre clair et utile
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <Card className="bg-background shadow-soft border-0">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-bold text-primary mb-2 text-center">
                Informations de Contact
              </h3>
              <div className="w-12 h-0.5 bg-primary mx-auto mb-8"></div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Téléphone</p>
                    <a href="tel:+33685353781" className="text-muted-foreground hover:text-primary transition-colors">
                      +33 6 85 35 37 81
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:haia.elzufari@audestya-avocat.com" className="text-muted-foreground hover:text-primary transition-colors">
                      haia.elzufari@audestya-avocat.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Localisation</p>
                    <p className="text-muted-foreground">Paris - France</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-background shadow-soft border-0">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-bold text-primary mb-2 text-center">
                Formulaire de contact
              </h3>
              <div className="w-12 h-0.5 bg-primary mx-auto mb-8"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      Prénom *
                    </label>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Nom *
                    </label>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Téléphone
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Sujet *
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Objet de votre demande"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full"
                    placeholder="Décrivez votre demande et vos besoins..."
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3">
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  * Champs obligatoires. Vos données à caractère personnel seront traitées conformément à la{' '}
                  <a href="/politique-confidentialite" className="text-primary hover:text-secondary underline">
                    politique de confidentialité
                  </a>.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
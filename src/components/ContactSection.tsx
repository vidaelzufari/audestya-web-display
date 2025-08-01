import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      await emailjs.send(
        'service_ii0sc3a',
        'template_4i4y0sf',
        {
          prenom: formData.prenom,
          nom: formData.nom,
          email: formData.email,
          telephone: formData.telephone,
          sujet: formData.sujet,
          message: formData.message,
          to_email: 'haia.elzufari@audestya-avocat.com'
        },
        'uMF-U7H_pbj1HSmdG'
      );

      toast({
        title: "Message envoyé !",
        description: "Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.",
      });

      // Reset form
      setFormData({
        prenom: '',
        nom: '',
        email: '',
        telephone: '',
        sujet: '',
        message: ''
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.",
        variant: "destructive",
      });
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
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              Un premier échange pour poser un cadre clair et utile
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-8">
                  Informations de Contact
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mb-8"></div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Téléphone</h4>
                    <p className="text-muted-foreground">+33 6 85 35 37 81</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Email</h4>
                    <p className="text-muted-foreground">haia.elzufari@audestya-avocat.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Localisation</h4>
                    <p className="text-muted-foreground">Paris-France</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-background shadow-soft border-0">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                    Formulaire de contact
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary"></div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="prenom" className="text-primary font-medium">
                        Prénom *
                      </Label>
                      <Input
                        id="prenom"
                        name="prenom"
                        type="text"
                        placeholder="Votre prénom"
                        value={formData.prenom}
                        onChange={handleChange}
                        required
                        className="border-muted focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nom" className="text-primary font-medium">
                        Nom *
                      </Label>
                      <Input
                        id="nom"
                        name="nom"
                        type="text"
                        placeholder="Votre nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        className="border-muted focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-primary font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-muted focus:border-primary"
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
                      placeholder="Votre numéro de téléphone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="border-muted focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sujet" className="text-primary font-medium">
                      Sujet *
                    </Label>
                    <Input
                      id="sujet"
                      name="sujet"
                      type="text"
                      placeholder="Objet de votre demande"
                      value={formData.sujet}
                      onChange={handleChange}
                      required
                      className="border-muted focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-primary font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Décrivez votre demande et vos besoins..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="border-muted focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground py-3 text-base font-medium"
                  >
                    {isSubmitting ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        Envoyer le message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Champs obligatoires. Vos données à caractère personnel seront traitées conformément à la{' '}
                    <Link to="/politique-confidentialite" className="text-primary hover:text-secondary underline">
                      politique de confidentialité
                    </Link>.
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

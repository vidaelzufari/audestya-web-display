import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [state, handleSubmit] = useForm("xpwagdko"); // Remplacez par votre ID Formspree

  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-background shadow-soft border-0">
              <CardContent className="p-12">
                <div className="flex items-center justify-center mb-6">
                  <CheckCircle className="w-16 h-16 text-green-600" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-primary mb-4">
                  Message envoyé avec succès !
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                </p>
                <Button 
                  onClick={() => window.location.reload()} 
                  className="bg-primary hover:bg-primary/90"
                >
                  Envoyer un autre message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              Un premier échange pour poser un cadre clair et utile
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div className="space-y-8">
              <Card className="bg-background shadow-soft border-0">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                    Informations de Contact
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-primary">Téléphone</p>
                        <span className="text-muted-foreground">
                          +33 6 85 35 37 81
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-primary">Email</p>
                        <span className="text-muted-foreground">
                          haia.elzufari@audestya-avocat.com
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-primary">Localisation</p>
                        <p className="text-muted-foreground">
                          Paris, France
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
                  Formulaire de contact
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="prenom">Prénom *</Label>
                      <Input
                        id="prenom"
                        name="prenom"
                        required
                        placeholder="Votre prénom"
                        className="border-gray-300 focus:border-secondary"
                        disabled={state.submitting}
                      />
                      <ValidationError 
                        prefix="Prénom" 
                        field="prenom"
                        errors={state.errors}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nom">Nom *</Label>
                      <Input
                        id="nom"
                        name="nom"
                        required
                        placeholder="Votre nom"
                        className="border-gray-300 focus:border-secondary"
                        disabled={state.submitting}
                      />
                      <ValidationError 
                        prefix="Nom" 
                        field="nom"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="votre@email.com"
                      className="border-gray-300 focus:border-secondary"
                      disabled={state.submitting}
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="telephone">Téléphone</Label>
                    <Input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      placeholder="Votre numéro de téléphone"
                      className="border-gray-300 focus:border-secondary"
                      disabled={state.submitting}
                    />
                    <ValidationError 
                      prefix="Téléphone" 
                      field="telephone"
                      errors={state.errors}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="sujet">Sujet *</Label>
                    <Input
                      id="sujet"
                      name="sujet"
                      required
                      placeholder="Objet de votre demande"
                      className="border-gray-300 focus:border-secondary"
                      disabled={state.submitting}
                    />
                    <ValidationError 
                      prefix="Sujet" 
                      field="sujet"
                      errors={state.errors}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="border-gray-300 focus:border-secondary resize-none"
                      placeholder="Décrivez votre demande et vos besoins..."
                      disabled={state.submitting}
                    />
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12"
                    disabled={state.submitting}
                  >
                    {state.submitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
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
      </div>
    </section>
  );
};

export default ContactSection;
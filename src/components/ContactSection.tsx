import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  sujet: string;
  message: string;
}

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_ii0sc3a',
        'template_4i4y0sf',
        {
          prenom: data.prenom,
          nom: data.nom,
          email: data.email,
          telephone: data.telephone,
          sujet: data.sujet,
          message: data.message,
          to_email: 'haia.elzufari@audestya-avocat.com'
        },
        'uMF-U7H_pbj1HSmdG'
      );

      toast({
        title: "Message envoyé !",
        description: "Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.",
      });
      
      reset();
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      toast({
        variant: "destructive",
        title: "Erreur d'envoi",
        description: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.",
      });
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
              Prenons Contact
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Échangeons sur vos enjeux juridiques. Je vous accompagne avec pragmatisme et expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-background to-background/90 shadow-elegant border-0 overflow-hidden group hover:shadow-glow transition-all duration-500">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-8">
                    Informations de Contact
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group/item">
                      <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary transition-colors duration-300">
                        <Phone className="w-6 h-6 text-foreground group-hover/item:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Téléphone</h4>
                        <a href="tel:+33685353781" className="text-muted-foreground hover:text-primary transition-colors">
                          +33 6 85 35 37 81
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group/item">
                      <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary transition-colors duration-300">
                        <Mail className="w-6 h-6 text-foreground group-hover/item:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Email</h4>
                        <a href="mailto:haia.elzufari@audestya-avocat.com" className="text-muted-foreground hover:text-primary transition-colors">
                          haia.elzufari@audestya-avocat.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group/item">
                      <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary transition-colors duration-300">
                        <MapPin className="w-6 h-6 text-foreground group-hover/item:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Localisation</h4>
                        <p className="text-muted-foreground">Paris, France</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <Card className="bg-gradient-primary text-primary-foreground shadow-elegant border-0">
                <CardContent className="p-8">
                  <h3 className="font-serif text-xl font-bold mb-4">
                    Première consultation
                  </h3>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Un premier échange pour cerner vos besoins et vous proposer un accompagnement adapté à vos enjeux.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-gradient-to-br from-background to-background/90 shadow-elegant border-0 overflow-hidden">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-primary mb-8">
                  Envoyez-moi un message
                </h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="prenom">Prénom *</Label>
                      <Input
                        id="prenom"
                        {...register('prenom', { required: 'Le prénom est requis' })}
                        className="border-border/50 focus:border-primary"
                        disabled={isSubmitting}
                      />
                      {errors.prenom && (
                        <p className="text-sm text-destructive flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.prenom.message}
                        </p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="nom">Nom *</Label>
                      <Input
                        id="nom"
                        {...register('nom', { required: 'Le nom est requis' })}
                        className="border-border/50 focus:border-primary"
                        disabled={isSubmitting}
                      />
                      {errors.nom && (
                        <p className="text-sm text-destructive flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.nom.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email', { 
                        required: 'L\'email est requis',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email invalide'
                        }
                      })}
                      className="border-border/50 focus:border-primary"
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telephone">Téléphone</Label>
                    <Input
                      id="telephone"
                      type="tel"
                      {...register('telephone')}
                      className="border-border/50 focus:border-primary"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sujet">Sujet *</Label>
                    <Input
                      id="sujet"
                      {...register('sujet', { required: 'Le sujet est requis' })}
                      className="border-border/50 focus:border-primary"
                      disabled={isSubmitting}
                    />
                    {errors.sujet && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.sujet.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      {...register('message', { required: 'Le message est requis' })}
                      className="border-border/50 focus:border-primary resize-none"
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground py-6 text-lg font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
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
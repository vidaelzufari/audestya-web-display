import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.prenom || !formData.nom || !formData.email || !formData.sujet || !formData.message) {
      setStatus('error');
      return;
    }

    // Créer le lien mailto
    const subject = formData.sujet;
    const body = `Prénom: ${formData.prenom}\nNom: ${formData.nom}\nEmail: ${formData.email}\nTéléphone: ${formData.telephone}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:haia.elzufari@audestya-avocat.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Ouvrir le client email
    window.location.href = mailtoLink;
    
    setStatus('success');
    
    // Reset form après 3 secondes
    setTimeout(() => {
      setFormData({
        prenom: '',
        nom: '',
        email: '',
        telephone: '',
        sujet: '',
        message: ''
      });
      setStatus('idle');
    }, 3000);
  };

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
                        <a href="tel:+33685353781" className="text-muted-foreground hover:text-secondary transition-colors">
                          +33 6 85 35 37 81
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-primary">Email</p>
                        <a href="mailto:haia.elzufari@audestya-avocat.com" className="text-muted-foreground hover:text-secondary transition-colors">
                          haia.elzufari@audestya-avocat.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-primary">Localisation</p>
                        <p className="text-muted-foreground">
                          Paris-France
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
                
                {status === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-green-800">Votre client email va s'ouvrir avec le message pré-rempli.</p>
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <p className="text-red-800">Veuillez remplir tous les champs obligatoires.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="prenom">Prénom *</Label>
                      <Input
                        id="prenom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleInputChange}
                        required
                        placeholder="Votre prénom"
                        className="border-gray-300 focus:border-secondary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nom">Nom *</Label>
                      <Input
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        required
                        placeholder="Votre nom"
                        className="border-gray-300 focus:border-secondary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="votre@email.com"
                      className="border-gray-300 focus:border-secondary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="telephone">Téléphone</Label>
                    <Input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      placeholder="Votre numéro de téléphone"
                      className="border-gray-300 focus:border-secondary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="sujet">Sujet *</Label>
                    <Input
                      id="sujet"
                      name="sujet"
                      value={formData.sujet}
                      onChange={handleInputChange}
                      required
                      placeholder="Objet de votre demande"
                      className="border-gray-300 focus:border-secondary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="border-gray-300 focus:border-secondary resize-none"
                      placeholder="Décrivez votre demande et vos besoins..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12"
                  >
                    Envoyer le message
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
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSectionEn = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            An initial conversation to set a clear and practical framework
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-background shadow-soft border-0">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                  Contact Information
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-secondary rounded-full">
                      <Phone className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Phone</h4>
                      <a
                        href="tel:+33685353781"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +33 6 85 35 37 81
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-secondary rounded-full">
                      <Mail className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Email</h4>
                      <a
                        href="mailto:haia.elzufari@audestya-avocat.com"
                        className="text-muted-foreground hover:text-primary transition-colors break-all"
                      >
                        haia.elzufari@audestya-avocat.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-secondary rounded-full">
                      <MapPin className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Location</h4>
                      <p className="text-muted-foreground">Paris - France</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-background shadow-soft border-0">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                Contact form
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-primary font-medium">
                      First name *
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-primary font-medium">
                      Last name *
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
                      className="border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-primary font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-primary font-medium">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-primary font-medium">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Subject of your request"
                    className="border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-primary font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Describe your request and needs..."
                    rows={5}
                    className="border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300"
                >
                  Send message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Required fields. Your personal data will be processed in accordance with the{' '}
                  <a
                    href="/en/privacy-policy"
                    className="text-primary hover:text-secondary underline"
                  >
                    privacy policy
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

export default ContactSectionEn;

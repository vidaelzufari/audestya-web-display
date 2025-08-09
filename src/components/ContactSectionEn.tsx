import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const ContactSectionEn = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              Contact
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              I respond quickly. Share your needs and I’ll get back to you with a clear next step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <Card className="bg-background border-0 shadow-soft">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+33 6 00 00 00 00" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Briefly describe your request" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell me more about your context" rows={5} />
                  </div>
                  <Button className="w-full">Send</Button>
                  <p className="text-xs text-muted-foreground text-justify">
                    By submitting this form, you consent to the processing of your personal data to respond to your request. For more information, see the Privacy Policy.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-elegant">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-2">Direct contact</h3>
                    <p className="opacity-90">+33 6 85 35 37 81</p>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-2">Email</h3>
                    <p className="opacity-90">haia.elzufari@audestya-avocat.com</p>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-2">Location</h3>
                    <p className="opacity-90">Paris - France</p>
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

export default ContactSectionEn;

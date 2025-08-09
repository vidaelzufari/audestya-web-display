import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Seo from '@/components/Seo';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-accent">
      <Seo title="Privacy Policy | Audestya Avocat" description="Understand how your personal data is collected, used and protected." canonical={`${window.location.origin}/en/privacy-policy`} />
      <Navigation />

      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>
                    This Privacy Policy aims to give you full transparency regarding the processing of your personal data (the “Data”). In accordance with applicable regulations, Data means any information relating to an identified or identifiable individual.
                  </p>
                  <p>
                    <strong className="text-primary">This Policy applies to:</strong>
                  </p>
                  <ul className="space-y-1 ml-4">
                    <li>• Clients, prospects and any external contact;</li>
                    <li>• Visitors to the website www.audestya-avocat.com (the “Site”).</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  1. Who is the data controller?
                </h2>
                <div className="space-y-2 text-muted-foreground text-justify">
                  <p><strong className="text-primary">Haia El Zufari</strong></p>
                  <p>Lawyer at the Paris Bar,</p>
                  <p>Sole proprietor</p>
                  <p>SIREN number: 943 937 789</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  2. How is Data collected?
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>Data may be collected:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• When you are a prospect or potential client and contact me directly or via the Site’s contact form to request information or advice;</li>
                    <li>• When you are a client, notably for the conclusion of the fee agreement and the performance of the engagement and related communications;</li>
                    <li>• When you are a partner (expert, service provider, fellow lawyer, etc.) with whom I may collaborate as part of my activity;</li>
                    <li>• When you browse the Site via cookies and other trackers.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  3. What Data is collected?
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>I notably collect and process:</p>
                  <ul className="space-y-3 ml-4">
                    <li>• When initiating contact: identification data of the prospect or potential client requesting information: data necessary for contact such as name, surname, email address, phone number.</li>
                    <li>• During the engagement: identification data of clients (including their employees, representatives or managers) and data necessary for performance of the engagement such as name, surname, address, email address, phone number, bank details, date of birth.</li>
                    <li>• Browsing data of Site visitors: such as IP address and browsing data.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  4. For what purposes is your Data processed?
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>Your Data may be processed for the following purposes:</p>
                  <ul className="space-y-3 ml-4">
                    <li>• If you are a prospect or potential client: to respond to your information or contact requests.</li>
                    <li>• If you are a client: for (i) performance of the contractual relationship, (ii) compliance with legal obligations (accounting, tax and professional rules): processing of requests, performance of engagements, management of the fee agreement, invoices, accounting and follow-up of the contractual relationship.</li>
                    <li>• If you are a partner (expert, provider, fellow lawyer, etc.): for (i) the management of my activity; (ii) performance of a contractual relationship with a client and (iii) compliance with legal obligations (accounting, tax and professional rules).</li>
                    <li>• If you browse the Site: (i) to analyze traffic and (ii) facilitate navigation.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  5. With whom is your Data shared?
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>Within the purposes defined above, your Data may be shared:</p>
                  <ul className="space-y-2 ml-6 list-none">
                    <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-primary">With partners, with your explicit consent.</li>
                    <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-primary">With technical service providers: notably hosting and IT providers, for the performance of my services and the exercise of my activity.</li>
                    <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-primary">With competent authorities when required as part of a judicial or administrative procedure.</li>
                  </ul>
                  <p>Data may also be shared to comply with legal obligations, or to protect rights, physical integrity, security or safety of people.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  6. How long is your Data retained?
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>For clients and partners, Data is retained for the duration of the contractual relationship then for the statutory limitation period, i.e. five (5) years from the last exchange with the person concerned.</p>
                  <p>Data necessary for accounting is retained for the statutory period, i.e. ten (10) years, to comply with applicable accounting and tax obligations.</p>
                  <p>Data of prospects and potential clients is retained for three (3) years following the last contact with the person concerned.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  7. Are Data transferred outside the European Union?
                </h2>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  Data is hosted within the European Union and is not transferred outside the EU.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  8. What are your rights?
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>In accordance with applicable regulations, you have the following rights:</p>
                  <ul className="space-y-3 ml-4">
                    <li>• Right of access</li>
                    <li>• Right to rectification</li>
                    <li>• Right to erasure</li>
                    <li>• Right to restriction of processing</li>
                    <li>• Right to data portability</li>
                    <li>• Right to object</li>
                  </ul>
                  <p className="mt-6">
                    To exercise these rights, you can send a request by email to: 
                    <a href="mailto:dp@audestya-avocat.com" className="text-primary hover:text-secondary ml-1">dp@audestya-avocat.com</a>
                  </p>
                  <p>
                    In case of difficulty regarding Data management, you can submit a complaint to the competent authority, notably the CNIL: 
                    <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary ml-1">https://www.cnil.fr/fr/plaintes</a>.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-soft border-0 mb-8">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  9. Cookies (trackers)
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>
                    The Site uses cookies, small text files stored on your device when visiting a website.
                  </p>
                  <p>Cookies used by the Site notably allow:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Display of the Site: Strictly necessary cookies.</li>
                    <li>• Analysis of Site traffic: Audience measurement cookies.</li>
                  </ul>
                  <p>
                    You can configure your browser to accept or refuse cookies and change your choice at any time.
                  </p>
                  <p>
                    To learn more and manage your cookies, consult the 
                    <a href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/comment-se-proteger/maitriser-votre-navigateur" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary ml-1">CNIL</a>.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-accent border-0">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  10. Contact
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>
                    For any question regarding this Privacy Policy or your Data, you can contact me by:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Sending a message via the Site’s contact form;</li>
                    <li>• Or sending an email to 
                      <a href="mailto:dp@audestya-avocat.com" className="text-primary hover:text-secondary ml-1">dp@audestya-avocat.com</a>.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

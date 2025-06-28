import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Mail, Linkedin, Instagram, Globe } from "lucide-react";

export const ContactUsPage = () => {
  return (
    <div className="container my-12 px-4 md:px-6">
      <section className="text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
        <p className="max-w-[700px] mx-auto mt-4 text-muted-foreground md:text-xl">
          We'd love to hear from you. Reach out to us for demos, inquiries, or partnership opportunities.
        </p>
      </section>

      <section className="mt-16">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:CEO@digiminds.tech" className="text-muted-foreground hover:underline">
                  CEO@digiminds.tech
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Globe className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-muted-foreground">UAE based, operating globally.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Linkedin className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:underline">
                  Follow us on LinkedIn
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Instagram className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Instagram</h3>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:underline">
                  Follow us on Instagram
                </a>
              </div>
            </div>
            <Button className="w-full mt-4" variant="accent">
                Request a Demo
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}; 
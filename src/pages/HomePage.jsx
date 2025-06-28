import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Briefcase, HeartPulse, Users } from 'lucide-react';

export const HomePage = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    We're shaping the future of digital healthcare—one smart solution at a time.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover how Digiminds is revolutionizing hospital operations with innovative technology built by biomedical engineers.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/products">Book a Demo</Link>
                  </Button>
                </div>
              </div>
              {/* Placeholder for an image or graphic */}
              <div className="hidden lg:block bg-gray-200 rounded-xl"></div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Premier Product</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet MedAsSys</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  MedAsSys is a smart asset management system designed by biomedical engineers who understand the critical demands of hospital environments. It's user-friendly, cost-efficient, and integrates seamlessly.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
              <Card>
                <CardHeader>
                  <Briefcase className="h-8 w-8 text-primary" />
                  <CardTitle>Healthcare Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Built by professionals with deep knowledge of hospital operations and biomedical engineering.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <HeartPulse className="h-8 w-8 text-primary" />
                  <CardTitle>Innovation-Driven</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We believe innovation bridges today's challenges with tomorrow's solutions.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary" />
                  <CardTitle>User-Centric Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Flexible, multi-user access levels designed for the entire hospital team, from admins to technicians.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}; 
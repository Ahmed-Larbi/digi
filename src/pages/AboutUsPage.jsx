import { Briefcase, Zap, BrainCircuit } from 'lucide-react';

export const AboutUsPage = () => {
  return (
    <div className="container my-12 px-4 md:px-6">
      <section className="text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Digiminds</h1>
        <p className="max-w-[700px] mx-auto mt-4 text-muted-foreground md:text-xl">
          We are a team of biomedical engineers and healthcare experts dedicated to solving the most pressing challenges in hospital operations through technology.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 mt-16 items-center">
        <div>
          <h2 className="text-2xl font-bold">Our Foundation</h2>
          <p className="mt-4 text-muted-foreground">
            Digiminds was born from a deep understanding of the intricacies of healthcare environments. Our founders leveraged their extensive experience in biomedical engineering and hospital management to create solutions that are not just technologically advanced, but also practical, intuitive, and perfectly aligned with the needs of healthcare professionals.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start gap-4">
                <Briefcase className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                    <h3 className="font-semibold">Healthcare Expertise</h3>
                    <p className="text-sm text-muted-foreground">Our solutions are built on a foundation of real-world hospital and clinical workflow knowledge.</p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <Zap className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                    <h3 className="font-semibold">Hospital Operations</h3>
                    <p className="text-sm text-muted-foreground">We design for efficiency, aiming to streamline asset management and reduce operational burdens.</p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <BrainCircuit className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                    <h3 className="font-semibold">Commitment to Innovation</h3>
                    <p className="text-sm text-muted-foreground">We continuously explore new technologies to bring cutting-edge, reliable solutions to our partners.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center bg-secondary rounded-lg p-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Vision & Mission</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                "Innovation bridges today's challenges with tomorrow's solutions."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}; 
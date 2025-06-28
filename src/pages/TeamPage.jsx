import { Card, CardContent } from "../components/ui/card";

const teamMembers = [
  {
    name: "Meriam",
    title: "Co-Founder & CEO",
    // Add image path when available, e.g., image: "/path/to/meriam.jpg"
  },
  {
    name: "Fakhra",
    title: "Co-Founder & CTO",
    // Add image path when available, e.g., image: "/path/to/fakhra.jpg"
  },
];

export const TeamPage = () => {
  return (
    <div className="container my-12 px-4 md:px-6">
      <section className="text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Team</h1>
        <p className="max-w-[700px] mx-auto mt-4 text-muted-foreground md:text-xl">
          Meet the innovative minds behind Digiminds, driving the future of healthcare technology.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
        {teamMembers.map((member) => (
          <Card key={member.name}>
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="w-32 h-32 rounded-full bg-secondary mb-4 flex items-center justify-center">
                <span className="text-muted-foreground">Photo</span>
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-primary">{member.title}</p>
              <p className="text-muted-foreground mt-2 text-sm">
                Short bio will be displayed here once available. This section will highlight their expertise and contributions to the company.
              </p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}; 
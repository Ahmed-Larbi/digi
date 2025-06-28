import { Card, CardHeader, CardTitle } from "../components/ui/card";
import { CheckCircle2, UserCog, User, Wrench } from 'lucide-react';

export const ProductsPage = () => {
  return (
    <div className="container my-12 px-4 md:px-6">
      <section className="text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Product: MedAsSys</h1>
        <p className="max-w-[700px] mx-auto mt-4 text-muted-foreground md:text-xl">
          A smart asset management system built by biomedical engineers who understand hospital needs.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 mt-16 items-start">
        <div>
          <h2 className="text-2xl font-bold">Why Choose MedAsSys?</h2>
          <ul className="mt-4 space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Built by Biomedical Engineers</h3>
                <p className="text-sm text-muted-foreground">Designed with deep domain knowledge of hospital workflows and asset management challenges.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">User-Friendly and Flexible</h3>
                <p className="text-sm text-muted-foreground">An intuitive interface that requires minimal training, adaptable to your specific needs.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Cost-Efficient</h3>
                <p className="text-sm text-muted-foreground">Optimize asset utilization, reduce downtime, and minimize operational costs.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Local Support in the UAE</h3>
                <p className="text-sm text-muted-foreground">Get responsive, on-the-ground support from our dedicated team.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Integrates with all ERP systems</h3>
                <p className="text-sm text-muted-foreground">Seamless integration capabilities to fit into your existing IT infrastructure.</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Multi-User Access Levels</h2>
          <div className="grid grid-cols-1 gap-6 mt-4">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <UserCog className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Admin</CardTitle>
                  <p className="text-sm text-muted-foreground">Full control – manage assets, users, schedules, reports.</p>
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <User className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Operator</CardTitle>
                  <p className="text-sm text-muted-foreground">Request support, report incidents, monitor status.</p>
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Wrench className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Technician</CardTitle>
                  <p className="text-sm text-muted-foreground">Handle job orders, update logs, manage assigned assets.</p>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}; 
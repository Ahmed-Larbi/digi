import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">&copy; 2024 Digiminds. Proudly built in the UAE – Serving the Globe.</p>
      <div className="sm:ml-auto flex gap-4 sm:gap-6">
        <a href="mailto:CEO@digiminds.tech" className="text-xs hover:underline underline-offset-4">
          CEO@digiminds.tech
        </a>
        <Link to="#" className="text-muted-foreground">
          <Linkedin className="h-5 w-5" />
        </Link>
        <Link to="#" className="text-muted-foreground">
          <Instagram className="h-5 w-5" />
        </Link>
      </div>
    </footer>
  );
}; 
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import logo from '../logo.png'; // Import the logo

export const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-background border-b">
      <Link to="/" className="flex items-center justify-center">
        <img src={logo} alt="Digiminds Logo" className="h-8 w-auto" />
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link to="/" className="text-sm font-medium hover:underline underline-offset-4">Home</Link>
        <Link to="/about" className="text-sm font-medium hover:underline underline-offset-4">About Us</Link>
        <Link to="/products" className="text-sm font-medium hover:underline underline-offset-4">Products</Link>
        <Link to="/team" className="text-sm font-medium hover:underline underline-offset-4">Our Team</Link>
        <Link to="/contact" className="text-sm font-medium hover:underline underline-offset-4">Contact Us</Link>
        <Button asChild>
          <Link to="/contact">Request a Demo</Link>
        </Button>
      </nav>
    </header>
  );
}; 
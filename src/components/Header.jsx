import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import logo from '../logo.png'; // Import the logo
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = (
    <>
      <Link to="/" className="text-sm font-medium hover:underline underline-offset-4" onClick={() => setIsMenuOpen(false)}>Home</Link>
      <Link to="/about" className="text-sm font-medium hover:underline underline-offset-4" onClick={() => setIsMenuOpen(false)}>About Us</Link>
      <Link to="/products" className="text-sm font-medium hover:underline underline-offset-4" onClick={() => setIsMenuOpen(false)}>Products</Link>
      <Link to="/team" className="text-sm font-medium hover:underline underline-offset-4" onClick={() => setIsMenuOpen(false)}>Our Team</Link>
      <Link to="/contact" className="text-sm font-medium hover:underline underline-offset-4" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
    </>
  );

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-background border-b relative">
      {/* Mobile */}
      <div className="md:hidden flex items-center justify-between w-full">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        <Link to="/">
          <img src={logo} alt="Digiminds Logo" className="h-8 w-auto" />
        </Link>
        <Button asChild>
          <Link to="/contact">Request a Demo</Link>
        </Button>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between w-full">
        <div className="flex items-center">
          <Link to="/" className="mr-6">
            <img src={logo} alt="Digiminds Logo" className="h-8 w-auto" />
          </Link>
          <nav className="flex gap-6">
            {navLinks}
          </nav>
        </div>
        <Button asChild>
          <Link to="/contact">Request a Demo</Link>
        </Button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-background/80 backdrop-blur-sm border-b md:hidden">
          <nav className="flex flex-col items-center gap-4 py-4">
            {navLinks}
          </nav>
        </div>
      )}
    </header>
  );
}; 
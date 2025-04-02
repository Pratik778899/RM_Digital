import {
  Linkedin,
  Mail,
  Phone,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";
import { MeteorsWrapper } from "../ui/Metors";

export function Footer() {
  const handleStateRefresh = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <MeteorsWrapper id="footer">
      <footer className="pt-16 pb-8 w-full bg-[#f5f5f5]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-medium">RL Marketing Hub</h3>
              {/* <p className="text-muted-foreground">
                Digital Strategies for the AI Age.
              </p> */}
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com/explore"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/rl-marketing-hub/about/"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleStateRefresh("about")}
                    className="text-muted-foreground hover:text-primary"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleStateRefresh("services")}
                    className="text-muted-foreground hover:text-primary"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleStateRefresh("case-studies")}
                    className="text-muted-foreground hover:text-primary"
                  >
                    Case Studies
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleStateRefresh("about")}
                    className="text-muted-foreground hover:text-primary"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleStateRefresh("contact")}
                    className="text-muted-foreground hover:text-primary"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleStateRefresh("services")}
                    className="text-muted-foreground hover:text-primary"
                  >
                    Logo Design
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleStateRefresh("services")}
                    className="text-muted-foreground hover:text-primary text-start"
                  >
                    Website Development  /  Design 
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleStateRefresh("services")}
                    className="text-muted-foreground hover:text-primary"
                  >
                    Performance Marketing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleStateRefresh("services")}
                    className="text-muted-foreground hover:text-primary"
                  >
                    Email Marketing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleStateRefresh("services")}
                    className="text-muted-foreground hover:text-primary"
                  >
                    SEO - Get Found
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  {/* <MapPin className="h-5 w-5 text-primary" /> */}
                  <span className="text-muted-foreground">
                    Shop No. 8, Park Paradise, Opp Raheja Windermare, Oshiwara
                    400053 Mumbai, Mhada Colony, Andheri West, Mumbai,
                    Maharashtra 400047
                  </span>
                </li>
                <li
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={() =>
                    (window.location.href = "https://wa.link/cpoki2")
                  }
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">9969367421</span>
                </li>
                <li
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={() =>
                    (window.location.href = "https://wa.link/833iq5")
                  }
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">8655038677</span>
                </li>
                <li
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={() => window.open("mailto:info@rlmarketinghub.com")}
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">
                    info@rlmarketinghub.com
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} RL Marketing Hub. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </MeteorsWrapper>
  );
}

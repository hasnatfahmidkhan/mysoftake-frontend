import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

import japan from "../../../../assets/japan.svg";
import china from "../../../../assets/china.svg";
import bd from "../../../../assets/bd.svg";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-content/80">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
        {/* LOGO + SOCIAL */}
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-3 mb-4">
            <img src="/footerLogo.png" className="" />
          </div>

          <div className="flex gap-4">
            <SocialIcon>
              <Facebook size={18} />
            </SocialIcon>
            <SocialIcon>
              <Instagram size={18} />
            </SocialIcon>
            <SocialIcon>
              <Twitter size={18} />
            </SocialIcon>
            <SocialIcon>
              <Linkedin size={18} />
            </SocialIcon>
          </div>
        </div>

        {/* JAPAN */}
        <Office
          flag={japan}
          title="Head Office, Japan"
          address="Tokyo, Japan"
        />

        {/* BANGLADESH */}
        <Office
          flag={bd}
          title="Corporate Office, Bangladesh"
          address="Sector 9, Road 3/E, House 04, Uttara, Dhaka-1230"
        />

        {/* CHINA */}
        <Office
          flag={china}
          title="Manufacturing Office, China"
          address="Guangzhou, China"
        />
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-primary-content/10 mt-8">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between text-sm text-primary-content/70">
          <p>© 2025 MY SOFTAKE PLC. All rights reserved.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Office({ flag, title, address }) {
  return (
    <div className="space-y-4 flex flex-col justify-center">
      <h4 className="flex items-center gap-2 text-primary-content font-semibold text-lg">
        <img src={flag} alt={title} />
        <span>{title}</span>
      </h4>

      <Info icon={<MapPin size={16} />} text={address} />
      <Info icon={<Phone size={16} />} text="01757881477" />
      <Info icon={<Clock size={16} />} text="9:00 AM - 6:00 PM" />
      <Info icon={<Mail size={16} />} text="info@mysoftake.com" />
    </div>
  );
}

function Info({ icon, text }) {
  return (
    <div className="flex items-start gap-3 text-sm">
      <span className="text-secondary dark:text-base-content/70 mt-0.5">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function SocialIcon({ children }) {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-content/10 hover:bg-primary-content/50 transition cursor-pointer">
      {children}
    </div>
  );
}

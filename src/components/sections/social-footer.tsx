import { Linkedin, Facebook, Instagram } from 'lucide-react';

const SocialFooter = () => {
  return (
    <>
      <div className="flex justify-center gap-1.5 mb-2">
        <a
          href="https://www.linkedin.com/company/wingstop-restaurants-inc-/"
          aria-label="LinkedIn"
            className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-xl border"
            style={{ backgroundColor: 'hsl(205.32deg 100% 33.92%)', borderColor: 'hsl(205.32deg 100% 33.92%)' }}>

          <Linkedin className="w-3 h-3 text-foreground" />
        </a>
        <a
          href="https://www.facebook.com/samsclub"
          aria-label="Facebook"
            className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-xl border"
            style={{ backgroundColor: 'hsl(205.32deg 100% 33.92%)', borderColor: 'hsl(205.32deg 100% 33.92%)' }}>

          <Facebook className="w-3 h-3 text-foreground" />
        </a>
        <a
          href="https://www.instagram.com/wingstop/"
          aria-label="Instagram"
            className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-xl border"
            style={{ backgroundColor: 'hsl(205.32deg 100% 33.92%)', borderColor: 'hsl(205.32deg 100% 33.92%)' }}>

          <Instagram className="text-foreground !w-3 !h-3" />
        </a>
      </div>
      <footer className="text-black text-[9px]">
        <p className="!text-center !m-0 !p-0">© 2025</p>
        <p className="!text-center">All rights reserved</p>
      </footer>
    </>);

};

export default SocialFooter;
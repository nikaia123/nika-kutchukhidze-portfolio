import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary border-t border-accent/10 pt-16 pb-12 px-10">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex flex-col items-center gap-10 mb-12">
          
          <div className="font-serif font-semibold text-[1.6rem] tracking-[0.25em] bg-gradient-to-br from-accent-hover via-accent to-[#A67C2E] text-transparent bg-clip-text">
            MR. NIKA
          </div>

          <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

          <div className="flex gap-12">
            {[
              { name: 'Facebook', url: 'https://www.facebook.com/' },
              { name: 'Instagram', url: 'https://www.instagram.com/' },
              { name: 'GitHub', url: 'https://github.com/nikaia123/nika-kutchukhidze-portfolio' }
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="font-sans font-light text-[0.7rem] tracking-[0.2em] uppercase text-white/40 no-underline transition-colors duration-300 hover:text-accent"
              >
                {social.name}
              </a>
            ))}
          </div>

          <p className="font-sans font-extralight text-[0.75rem] tracking-[0.15em] text-white/35">
            info@example.com
          </p>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col items-center gap-4 text-center">
          <p className="font-sans font-extralight text-[0.65rem] tracking-[0.2em] text-white/30 uppercase">
            &copy; {new Date().getFullYear()} — ყველა უფლება დაცულია
          </p>
          <div className="flex gap-6 items-center">
            {[{ label: 'Privacy Policy', path: '/privacy' }, { label: 'Terms & Conditions', path: '/terms' }].map((item, i) => (
              <React.Fragment key={item.path}>
                {i > 0 && <span className="text-white/20 text-[0.6rem]">·</span>}
                <Link
                  to={item.path}
                  className="font-sans font-light text-[0.65rem] tracking-[0.15em] uppercase text-white/30 no-underline transition-colors duration-300 hover:text-accent"
                >
                  {item.label}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
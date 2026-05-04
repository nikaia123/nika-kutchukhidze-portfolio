import React from 'react';
import { Section } from '../components/Section';
import userPhoto from '../assets/user.avif';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary text-text-main py-20">
      <Section title="ჩემ შესახებ">
        <div className="flex flex-col md:flex-row items-center gap-16 max-w-[1000px] mx-auto">

          <div className="shrink-0">
            <div className="w-[260px] h-[320px] relative">
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-accent/50" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t border-r border-accent/50" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b border-l border-accent/50" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-accent/50" />

              <img
                src={userPhoto}
                alt="Profile"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale-[20%] brightness-[0.8] hover:grayscale-0 hover:brightness-[0.9] transition-all duration-500 border border-accent/[0.12]"
              />
            </div>
          </div>

          <div className="grow bg-secondary/80 border border-white/[0.04] p-12 relative">
            <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            <p className="font-serif font-light text-[1.1rem] leading-[2] text-text-muted mb-6">
              გამარჯობა, მე ვარ{' '}
              <strong className="font-serif font-semibold text-accent">
                ნიკოლოზ კუჭუხიძე
              </strong>
              , Frontend Web Developer. მივესალმები თანამედროვე ვებ-ტექნოლოგიებს და ვიზუალურ ესთეტიკას.
            </p>

            <p className="font-serif font-light text-[1.1rem] leading-[2] text-[#666] mb-8">
              ძირითადად ვმუშაობ{' '}
              <span className="text-[#A67C2E]">React</span>,{' '}
              <span className="text-[#A67C2E]">TypeScript</span> და{' '}
              <span className="text-[#A67C2E]">Tailwind CSS</span> ტექნოლოგიებით.
            </p>

            <div className="flex flex-wrap gap-6 border-t border-white/[0.04] pt-6">
              {['React', 'TypeScript', 'Tailwind CSS', 'UI/UX'].map(skill => (
                <span
                  key={skill}
                  className="font-sans font-extralight text-[0.65rem] tracking-[0.2em] uppercase text-[#555] border-b border-accent/25 pb-0.5"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="absolute bottom-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          </div>
        </div>
      </Section>
    </div>
  );
};
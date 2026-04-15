import React from 'react';
import { Section } from '../components/Section';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      <Section title="ჩემ შესახებ">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-500/30 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
              <img 
                src="src/assets/user.avif" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 space-y-6 text-gray-300 text-lg leading-relaxed font-light bg-zinc-900/40 p-8 rounded-3xl border border-white/5">
            <p>
              გამარჯობა, მე ვარ <strong className="text-yellow-500 font-bold">ნიკოლოზ კუჭუხიძე</strong>, Frontend Web Developer. 
              მივესალმები თანამედროვე ვებ-ტექნოლოგიებს და ვიზუალურ ესთეტიკას. ჩემი მიზანია შევქმნა ისეთი ინტერფეისები, 
              რომლებიც არა მხოლოდ უშეცდომოდ მუშაობს, არამედ მომხმარებელს აძლევს პრემიუმ გამოცდილებას.
            </p>
            <p>
              ძირითადად ვმუშაობ <span className="text-yellow-400 font-medium">React</span>, <span className="text-yellow-400 font-medium">TypeScript</span> და <span className="text-yellow-400 font-medium">Tailwind CSS</span> ტექნოლოგიებით. 
              განსაკუთრებით მიტაცებს Premium Dark Mode და Glassmorphism დიზაინების აწყობა, რაც პროექტებს სოლიდურ და პროფესიონალურ იერსახეს სძენს.
            </p>
          </div>

        </div>
      </Section>
    </div>
  );
};
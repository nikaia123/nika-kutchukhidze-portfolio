import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      <Section title="დამიკავშირდით">
        <div className="max-w-2xl mx-auto bg-zinc-900/60 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl">
          
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* სახელის ველი */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-gray-400 text-sm tracking-wide ml-1">სახელი</label>
              <input 
                type="text" 
                id="name" 
                placeholder="თქვენი სახელი" 
                className="bg-black/50 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 transition-all placeholder-gray-600"
              />
            </div>

            {/* ელფოსტის ველი */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-400 text-sm tracking-wide ml-1">ელ. ფოსტა</label>
              <input 
                type="email" 
                id="email" 
                placeholder="your@email.com" 
                className="bg-black/50 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 transition-all placeholder-gray-600"
              />
            </div>

            {/* შეტყობინების ველი */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-gray-400 text-sm tracking-wide ml-1">შეტყობინება</label>
              <textarea 
                id="message" 
                rows={5}
                placeholder="მოკლედ აღწერეთ თქვენი იდეა..." 
                className="bg-black/50 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 transition-all placeholder-gray-600 resize-none"
              ></textarea>
            </div>

            {/* გაგზავნის ღილაკი ჩვენი Button კომპონენტით */}
            <div className="mt-4">
              <Button variant="primary" type="submit" className="w-full py-4 text-lg">
                გაგზავნა
              </Button>
            </div>

          </form>

        </div>
      </Section>
    </div>
  );
};
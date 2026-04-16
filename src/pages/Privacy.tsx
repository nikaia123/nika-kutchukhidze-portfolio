import React from 'react';
import { Section } from '../components/Section';

export const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      <Section title="კონფიდენციალურობა">
        <div className="max-w-4xl mx-auto bg-zinc-900/60 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl text-gray-300 font-light leading-relaxed">
          
          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-bold text-yellow-500 mb-4 tracking-wide">1. მონაცემების შეგროვება</h3>
              <p>
                ჩვენ ვაგროვებთ მხოლოდ იმ პერსონალურ ინფორმაციას, რომელსაც თქვენ ნებაყოფლობით გვაწვდით "კონტაქტის" ფორმის საშუალებით. ეს მოიცავს თქვენს სახელს და ელექტრონული ფოსტის მისამართს (Email).
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-yellow-500 mb-4 tracking-wide">2. ინფორმაციის გამოყენება</h3>
              <p>
                თქვენს მიერ მოწოდებული ინფორმაცია გამოიყენება მხოლოდ თქვენს შეტყობინებებზე პასუხის გასაცემად და პოტენციური თანამშრომლობის განსახილველად. ჩვენ არ ვიყენებთ თქვენს მონაცემებს მარკეტინგული მიზნებისთვის.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-yellow-500 mb-4 tracking-wide">3. მონაცემთა გაზიარება</h3>
              <p>
                ჩვენ მკაცრად ვიცავთ თქვენს კონფიდენციალურობას და არ ვყიდით, არ ვაქირავებთ და არ ვუზიარებთ თქვენს პერსონალურ ინფორმაციას მესამე პირებს, გარდა კანონით გათვალისწინებული შემთხვევებისა.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-yellow-500 mb-4 tracking-wide">4. უსაფრთხოება</h3>
              <p>
                მიუხედავად იმისა, რომ ჩვენ ვიღებთ გონივრულ ზომებს თქვენი მონაცემების დასაცავად, გთხოვთ გაითვალისწინოთ, რომ ინტერნეტით მონაცემთა გადაცემა არასოდეს არის 100%-ით უსაფრთხო.
              </p>
            </section>
          </div>

        </div>
      </Section>
    </div>
  );
};
import React from 'react';
import { Section } from '../components/Section';

export const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      <Section title="წესები და პირობები">
        <div className="max-w-4xl mx-auto bg-zinc-900/60 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl text-gray-300 font-light leading-relaxed">
          
          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-bold text-yellow-500 mb-4 tracking-wide">1. საიტის გამოყენება</h3>
              <p>
                ამ ვებ-გვერდზე (პორტფოლიოზე) წვდომით და მისი გამოყენებით, თქვენ ეთანხმებით ქვემოთ ჩამოთვლილ წესებსა და პირობებს. თუ არ ეთანხმებით ამ პირობებს, გთხოვთ, ნუ გამოიყენებთ ამ ვებ-გვერდს.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-yellow-500 mb-4 tracking-wide">2. ინტელექტუალური საკუთრება</h3>
              <p>
                ამ საიტზე განთავსებული ყველა მასალა, მათ შორის დიზაინი, ტექსტები, გრაფიკა, პროექტები და კოდის ნიმუშები, წარმოადგენს MR. NIKA-ს ინტელექტუალურ საკუთრებას და დაცულია საავტორო უფლებებით. ნებისმიერი მასალის არასანქცირებული გამოყენება, კოპირება ან გავრცელება აკრძალულია წინასწარი წერილობითი თანხმობის გარეშე.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-yellow-500 mb-4 tracking-wide">3. პასუხისმგებლობის შეზღუდვა</h3>
              <p>
                საიტზე განთავსებული ინფორმაცია და პროექტების დემო ვერსიები მოწოდებულია "როგორც არის" საფუძველზე. ჩვენ არ ვიღებთ პასუხისმგებლობას საიტის გამოყენებით გამოწვეულ პირდაპირ ან ირიბ ზარალზე.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-yellow-500 mb-4 tracking-wide">4. ცვლილებები</h3>
              <p>
                ვიტოვებთ უფლებას, ნებისმიერ დროს, წინასწარი გაფრთხილების გარეშე შევიტანოთ ცვლილებები ამ წესებსა და პირობებში. ცვლილებების შემდეგ საიტის გამოყენება ნიშნავს ახალ პირობებზე თანხმობას.
              </p>
            </section>
          </div>

        </div>
      </Section>
    </div>
  );
};
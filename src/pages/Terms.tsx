import React from 'react';
import { Section } from '../components/Section';

const sections = [
  {
    num: '01',
    title: 'საიტის გამოყენება',
    body: 'ამ ვებ-გვერდზე წვდომით და მისი გამოყენებით, თქვენ ეთანხმებით ქვემოთ ჩამოთვლილ წესებსა და პირობებს. თუ არ ეთანხმებით ამ პირობებს, გთხოვთ, ნუ გამოიყენებთ ამ ვებ-გვერდს.'
  },
  {
    num: '02',
    title: 'ინტელექტუალური საკუთრება',
    body: 'ამ საიტზე განთავსებული ყველა მასალა — დიზაინი, ტექსტები, გრაფიკა, პროექტები და კოდი — წარმოადგენს MR. NIKA-ს ინტელექტუალურ საკუთრებას. ნებისმიერი გამოყენება აკრძალულია წინასწარი თანხმობის გარეშე.'
  },
  {
    num: '03',
    title: 'პასუხისმგებლობის შეზღუდვა',
    body: 'საიტზე განთავსებული ინფორმაცია მოწოდებულია "როგორც არის" საფუძველზე. ჩვენ არ ვიღებთ პასუხისმგებლობას საიტის გამოყენებით გამოწვეულ პირდაპირ ან ირიბ ზარალზე.'
  },
  {
    num: '04',
    title: 'ცვლილებები',
    body: 'ვიტოვებთ უფლებას, ნებისმიერ დროს, წინასწარი გაფრთხილების გარეშე შევიტანოთ ცვლილებები ამ წესებში. ცვლილებების შემდეგ საიტის გამოყენება ნიშნავს ახალ პირობებზე თანხმობას.'
  },
];

export const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary text-text-main py-20">
      <Section title="წესები და პირობები">
        <div style={{ maxWidth: '780px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0' }}>
          {sections.map((s, i) => (
            <div key={s.num} style={{
              display: 'flex',
              gap: '2.5rem',
              padding: '2.5rem 0',
              borderBottom: i < sections.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
              alignItems: 'flex-start',
            }}>
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: '2rem',
                color: 'rgba(212,168,67,0.2)',
                lineHeight: '1',
                flexShrink: 0,
                minWidth: '3rem',
              }}>
                {s.num}
              </span>
              <div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: '1.2rem',
                  color: '#D4A843',
                  letterSpacing: '0.06em',
                  marginBottom: '0.8rem',
                }}>
                  {s.title}
                </h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 200,
                  fontSize: '0.88rem',
                  color: '#555',
                  lineHeight: '1.9',
                }}>
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
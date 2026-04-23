import React from 'react';
import { Section } from '../components/Section';

const sections = [
  {
    num: '01',
    title: 'მონაცემების შეგროვება',
    body: 'ჩვენ ვაგროვებთ მხოლოდ იმ პერსონალურ ინფორმაციას, რომელსაც თქვენ ნებაყოფლობით გვაწვდით "კონტაქტის" ფორმის საშუალებით. ეს მოიცავს თქვენს სახელს და ელექტრონული ფოსტის მისამართს.'
  },
  {
    num: '02',
    title: 'ინფორმაციის გამოყენება',
    body: 'თქვენს მიერ მოწოდებული ინფორმაცია გამოიყენება მხოლოდ თქვენს შეტყობინებებზე პასუხის გასაცემად. ჩვენ არ ვიყენებთ თქვენს მონაცემებს მარკეტინგული მიზნებისთვის.'
  },
  {
    num: '03',
    title: 'მონაცემთა გაზიარება',
    body: 'ჩვენ მკაცრად ვიცავთ თქვენს კონფიდენციალურობას და არ ვყიდით, არ ვაქირავებთ და არ ვუზიარებთ თქვენს პერსონალურ ინფორმაციას მესამე პირებს.'
  },
  {
    num: '04',
    title: 'უსაფრთხოება',
    body: 'მიუხედავად იმისა, რომ ჩვენ ვიღებთ გონივრულ ზომებს თქვენი მონაცემების დასაცავად, გთხოვთ გაითვალისწინოთ, რომ ინტერნეტით მონაცემთა გადაცემა არასოდეს არის 100%-ით უსაფრთხო.'
  },
];

export const Privacy: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#080808', color: '#c8c8c8', paddingTop: '5rem', paddingBottom: '5rem' }}>
      <Section title="კონფიდენციალურობა">
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
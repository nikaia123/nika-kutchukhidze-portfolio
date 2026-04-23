import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { usePageTitle } from '../hooks/usePageTitle';
import { useForm } from '../hooks/useForm';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export const Contact: React.FC = () => {
  usePageTitle('Contact');
  const { form, handleChange } = useForm<ContactForm>({ name: '', email: '', message: '' });
  return (
    <div className="min-h-screen bg-primary text-text-main py-20">
      <Section title="დამიკავშირდით">
        <div style={{
          maxWidth: '640px',
          margin: '0 auto',
          background: '#0d0d0d',
          border: '1px solid rgba(255,255,255,0.04)',
          padding: '3.5rem',
          position: 'relative',
        }}>
          {/* Corner ornaments */}
          <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '20px', height: '20px', borderTop: '1px solid rgba(212,168,67,0.4)', borderLeft: '1px solid rgba(212,168,67,0.4)' }} />
          <div style={{ position: 'absolute', top: '-1px', right: '-1px', width: '20px', height: '20px', borderTop: '1px solid rgba(212,168,67,0.4)', borderRight: '1px solid rgba(212,168,67,0.4)' }} />
          <div style={{ position: 'absolute', bottom: '-1px', left: '-1px', width: '20px', height: '20px', borderBottom: '1px solid rgba(212,168,67,0.4)', borderLeft: '1px solid rgba(212,168,67,0.4)' }} />
          <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '20px', height: '20px', borderBottom: '1px solid rgba(212,168,67,0.4)', borderRight: '1px solid rgba(212,168,67,0.4)' }} />

          <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} onSubmit={(e) => e.preventDefault()}>

            {[
              { id: 'name', label: 'სახელი', type: 'text', placeholder: 'თქვენი სახელი' },
              { id: 'email', label: 'ელ. ფოსტა', type: 'email', placeholder: 'your@email.com' },
            ].map((field) => (
              <div key={field.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <label htmlFor={field.id} style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.65rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: '#444',
                }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  placeholder={field.placeholder}
                  value={form[field.id as keyof ContactForm]}
                  onChange={handleChange}
                  style={{
                    background: '#080808',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '2px',
                    padding: '0.9rem 1.2rem',
                    color: '#c8c8c8',
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                    width: '100%',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(212,168,67,0.3)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.06)'}
                />
              </div>
            ))}

            {/* Message */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <label htmlFor="message" style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: '0.65rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#444',
              }}>
                შეტყობინება
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="მოკლედ აღწერეთ თქვენი იდეა..."
                value={form.message}
                onChange={handleChange}
                style={{
                  background: '#080808',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '2px',
                  padding: '0.9rem 1.2rem',
                  color: '#c8c8c8',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.9rem',
                  outline: 'none',
                  resize: 'none',
                  transition: 'border-color 0.3s ease',
                  width: '100%',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(212,168,67,0.3)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.06)'}
              />
            </div>

            <div style={{ paddingTop: '0.5rem' }}>
              <Button variant="primary" type="submit" style={{ width: '100%', padding: '1rem' }}>
                გაგზავნა
              </Button>
            </div>

          </form>
        </div>
      </Section>
    </div>
  );
};
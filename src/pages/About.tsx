import React from 'react';
import { Section } from '../components/Section';
import { usePageTitle } from '../hooks/usePageTitle';
import userPhoto from '../assets/user.avif';

const skills = [
  { name: 'HTML & CSS', level: 95 },
  { name: 'JavaScript (ES6+)', level: 90 },
  { name: 'React', level: 88 },
  { name: 'TypeScript', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Git & GitHub', level: 80 },
  { name: 'Responsive Design', level: 92 },
  { name: 'REST API Integration', level: 78 },
];

const services = [
  {
    icon: '⚛️',
    title: 'React აპლიკაციები',
    description: 'თანამედროვე, კომპონენტებზე დაფუძნებული SPA აპლიკაციების შექმნა React-ისა და TypeScript-ის გამოყენებით.',
  },
  {
    icon: '🎨',
    title: 'UI/UX დიზაინი',
    description: 'მომხმარებლისთვის მოსახერხებელი, ვიზუალურად მიმზიდველი ინტერფეისების დაპროექტება და იმპლემენტაცია.',
  },
  {
    icon: '📱',
    title: 'რესპონსიული დიზაინი',
    description: 'ვებ-გვერდების ადაპტაცია ყველა მოწყობილობისთვის — მობილურიდან დესკტოპამდე.',
  },
  {
    icon: '⚡',
    title: 'ოპტიმიზაცია',
    description: 'ვებ-აპლიკაციების სიჩქარისა და წარმადობის გაუმჯობესება საუკეთესო პრაქტიკების გამოყენებით.',
  },
];

const timeline = [
  {
    period: '2024 — დღემდე',
    title: 'Frontend Developer',
    subtitle: 'თვითგანვითარება & ფრილანსი',
    description: 'React, TypeScript და Tailwind CSS ტექნოლოგიებით რეალური პროექტების შექმნა და პორტფოლიოს გამდიდრება.',
  },
  {
    period: '2023 — 2024',
    title: 'ვებ-ტექნოლოგიების შესწავლა',
    subtitle: 'HTML, CSS, JavaScript',
    description: 'ფრონტენდ დეველოპმენტის საფუძვლების ათვისება, რესპონსიული დიზაინი და JavaScript-ის ღრმა შესწავლა.',
  },
];

export const About: React.FC = () => {
  usePageTitle('ჩემ შესახებ');

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
                alt="ნიკოლოზ კუჭუხიძე — Frontend Developer"
                fetchPriority="high"
                className="w-full h-full object-cover grayscale-[20%] brightness-[0.8] hover:grayscale-0 hover:brightness-[0.9] transition-all duration-500 border border-accent/[0.12]"
              />
            </div>
          </div>

          <div className="grow bg-secondary/80 border border-white/[0.04] p-12 relative">
            <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            <p className="font-serif font-light text-[1.1rem] leading-[2] text-white mb-6">
              გამარჯობა, მე ვარ{' '}
              <strong className="font-serif font-semibold text-accent">
                ნიკოლოზ კუჭუხიძე
              </strong>
              , Frontend Web Developer. მივესალმები თანამედროვე ვებ-ტექნოლოგიებს და ვიზუალურ ესთეტიკას.
            </p>

            <p className="font-serif font-light text-[1.1rem] leading-[2] text-white/90 mb-4">
              ძირითადად ვმუშაობ{' '}
              <span className="text-accent">React</span>,{' '}
              <span className="text-accent">TypeScript</span> და{' '}
              <span className="text-accent">Tailwind CSS</span> ტექნოლოგიებით.
              ჩემი მიზანია შევქმნა სწრაფი, ლამაზი და მომხმარებლისთვის მოსახერხებელი ვებ-აპლიკაციები.
            </p>

            <p className="font-serif font-light text-[1rem] leading-[2] text-white/80 mb-8">
              მე მუდმივად ვსწავლობ ახალ ტექნოლოგიებს, ვადევნებ თვალს ინდუსტრიის ტრენდებს
              და ვცდილობ ყოველ პროექტში საუკეთესო პრაქტიკების დანერგვას — სუფთა კოდიდან
              დაწყებული, წარმადობის ოპტიმიზაციით დამთავრებული.
            </p>

            <div className="flex flex-wrap gap-6 border-t border-white/[0.04] pt-6">
              {['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'UI/UX'].map(skill => (
                <span
                  key={skill}
                  className="font-sans font-extralight text-[0.65rem] tracking-[0.2em] uppercase text-white/60 border-b border-accent/25 pb-0.5 hover:text-accent/70 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="absolute bottom-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          </div>
        </div>
      </Section>

      <Section title="უნარები">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-[900px] mx-auto">
          {skills.map(skill => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="font-sans text-[0.8rem] tracking-[0.12em] uppercase text-white/90">
                  {skill.name}
                </span>
                <span className="font-sans text-[0.75rem] text-accent/70">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-[3px] bg-white/[0.04] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent/60 to-accent rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="რას ვაკეთებ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[960px] mx-auto">
          {services.map(service => (
            <div
              key={service.title}
              className="group bg-secondary/60 border border-white/[0.04] p-10 relative hover:border-accent/20 transition-all duration-500"
            >
              <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <span className="text-3xl mb-6 block">{service.icon}</span>

              <h3 className="font-serif text-[1.25rem] text-text-main mb-3 tracking-wide">
                {service.title}
              </h3>

              <p className="font-sans font-light text-[0.85rem] leading-[1.8] text-white/80">
                {service.description}
              </p>

              <div className="absolute bottom-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </Section>

      <Section title="გამოცდილება">
        <div className="max-w-[700px] mx-auto relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />

          <div className="flex flex-col gap-14">
            {timeline.map((item, i) => (
              <div key={i} className="pl-10 relative">
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-accent/50 bg-primary" />

                <span className="font-sans text-[0.7rem] tracking-[0.2em] uppercase text-accent/60 mb-2 block">
                  {item.period}
                </span>

                <h3 className="font-serif text-[1.3rem] text-text-main mb-1 tracking-wide">
                  {item.title}
                </h3>

                <span className="font-sans text-[0.75rem] tracking-[0.1em] text-accent/40 uppercase mb-3 block">
                  {item.subtitle}
                </span>

                <p className="font-sans font-light text-[0.85rem] leading-[1.9] text-white/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

    </div>
  );
};
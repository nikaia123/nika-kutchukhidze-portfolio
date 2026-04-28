import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { usePageTitle } from '../hooks/usePageTitle';

export const NotFound: React.FC = () => {
  usePageTitle('404 Not Found');

  return (
    <div className="min-h-[80vh] bg-primary text-text-main flex items-center justify-center">
      <Section title="404">
        <div className="text-center flex flex-col items-center gap-8">
          <h2 className="font-sans font-light text-2xl tracking-[0.2em] text-text-muted">
            გვერდი ვერ მოიძებნა
          </h2>
          <p className="font-sans font-light text-[#666] max-w-[400px]">
            სამწუხაროდ, გვერდი რომელსაც ეძებთ არ არსებობს ან წაშლილია.
          </p>
          <Link to="/" className="no-underline mt-4">
            <Button variant="primary">მთავარზე დაბრუნება</Button>
          </Link>
        </div>
      </Section>
    </div>
  );
};

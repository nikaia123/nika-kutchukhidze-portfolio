import React, { useState, useEffect } from 'react';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
}

export const GitHubRepo: React.FC = () => {
  const [items, setItems] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/users/nikaia123/repos')
      .then(res => {
        if (!res.ok) throw new Error('API Error');
        return res.json();
      })
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(() => {
        setError('მონაცემები ვერ ჩაიტვირთა');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-accent text-center p-8 font-sans">იტვირთება...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center p-8 font-sans">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-12 w-full">
      {items.map(repo => (
        <a 
          key={repo.id} 
          href={repo.html_url} 
          target="_blank" 
          rel="noreferrer"
          className="w-full block no-underline group"
        >
          <div className="bg-secondary border border-white/5 p-8 h-full transition-all duration-300 relative group-hover:border-accent/30 group-hover:-translate-y-1">
            <div className="absolute top-[-1px] left-[-1px] w-[10px] h-[10px] border-t border-l border-accent/40" />
            <div className="absolute top-[-1px] right-[-1px] w-[10px] h-[10px] border-t border-r border-accent/40" />
            <div className="absolute bottom-[-1px] left-[-1px] w-[10px] h-[10px] border-b border-l border-accent/40" />
            <div className="absolute bottom-[-1px] right-[-1px] w-[10px] h-[10px] border-b border-r border-accent/40" />

            <h3 className="text-text-main mb-4 font-sans text-xl font-normal group-hover:text-accent transition-colors duration-300">{repo.name}</h3>
            <p className="text-text-muted text-sm mb-6 leading-relaxed">
              {repo.description || 'No description available.'}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-accent text-xs tracking-widest">⭐ {repo.stargazers_count}</span>
              <span className="text-accent text-xs tracking-widest uppercase">View Code</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

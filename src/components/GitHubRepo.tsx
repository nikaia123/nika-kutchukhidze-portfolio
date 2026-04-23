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
    return <div style={{ color: '#D4A843', textAlign: 'center', padding: '2rem', fontFamily: "'DM Sans', sans-serif" }}>იტვირთება...</div>;
  }

  if (error) {
    return <div style={{ color: '#ff4444', textAlign: 'center', padding: '2rem', fontFamily: "'DM Sans', sans-serif" }}>{error}</div>;
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      gap: '2.5rem',
      justifyItems: 'center',
      marginTop: '3rem'
    }}>
      {items.map(repo => (
        <a 
          key={repo.id} 
          href={repo.html_url} 
          target="_blank" 
          rel="noreferrer"
          style={{ textDecoration: 'none', width: '100%', display: 'block' }}
        >
          <div style={{
            background: '#0d0d0d',
            border: '1px solid rgba(255,255,255,0.04)',
            padding: '2rem',
            height: '100%',
            transition: 'all 0.3s ease',
            position: 'relative',
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(212,168,67,0.3)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'}
          >
            {/* Corner ornaments */}
            <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '10px', height: '10px', borderTop: '1px solid rgba(212,168,67,0.4)', borderLeft: '1px solid rgba(212,168,67,0.4)' }} />
            <div style={{ position: 'absolute', top: '-1px', right: '-1px', width: '10px', height: '10px', borderTop: '1px solid rgba(212,168,67,0.4)', borderRight: '1px solid rgba(212,168,67,0.4)' }} />
            <div style={{ position: 'absolute', bottom: '-1px', left: '-1px', width: '10px', height: '10px', borderBottom: '1px solid rgba(212,168,67,0.4)', borderLeft: '1px solid rgba(212,168,67,0.4)' }} />
            <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '10px', height: '10px', borderBottom: '1px solid rgba(212,168,67,0.4)', borderRight: '1px solid rgba(212,168,67,0.4)' }} />

            <h3 style={{ color: '#c8c8c8', marginBottom: '1rem', fontFamily: "'DM Sans', sans-serif", fontSize: '1.2rem', fontWeight: 400 }}>{repo.name}</h3>
            <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              {repo.description || 'No description available.'}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#D4A843', fontSize: '0.8rem', letterSpacing: '0.1em' }}>⭐ {repo.stargazers_count}</span>
              <span style={{ color: '#D4A843', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>View Code</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

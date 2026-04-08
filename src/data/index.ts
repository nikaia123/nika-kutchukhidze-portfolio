import type { Project, NavLink } from '../types/index';

export const NavLinks: NavLink[] = [
    { label: 'მთვარი', path: '/' },
    { label: 'ჩემ შესახებ', path: '/about' },
    { label: 'პორტფოლიო', path: '/portfolio' },
    { label: 'კონტაქტი', path: './contact' }
];


export const projects: Project[] = [
    {
        id: 1,
        title: 'პორტფოლიო',
        description: 'გიორგი საკანდელიძის პორფოლიო',
        imageUrl: 'https://via.placeholder.com/400x250',
        techStack: ['React', 'TypeScript', 'Tailwind CSS'],
        liveUrl: 'https://example.com'
    },
    {
        id: 2,
        title: 'ამინდის აპლიკაცია',
        description: 'რეალურ დროში ამინდის პროგნოზი, სადაც მონაცემები მოდის გარე API-დან.',
        imageUrl: 'https://via.placeholder.com/400x250',
        techStack: ['React', 'TypeScript', 'Tailwind CSS'],

    },
];
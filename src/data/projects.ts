import project1 from '../assets/project-1.webp';
import project2 from '../assets/project-2.webp';
import project3 from '../assets/project-3.webp';

export interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  fullText: string;
  tags: string[];
  link: string;
}

export const projectsData: Project[] = [
  {
    id: "react-dashboard",
    title: "React Admin Dashboard",
    image: project1,
    description: "სრულყოფილი ადმინ-პანელი React-სა და TypeScript-ის გამოყენებით. მოიცავს რთულ UI კომპონენტებსა და მონაცემთა ვიზუალიზაციას.",
    fullText: "ეს პროექტი წარმოადგენს თანამედროვე ადმინ-პანელს, რომელიც აგებულია React, TypeScript და Tailwind CSS ტექნოლოგიებით. მასში ინტეგრირებულია Recharts მონაცემთა ვიზუალიზაციისთვის და React Query სერვერთან სინქრონიზაციისთვის. მთავარი გამოწვევა იყო დიდი მოცულობის მონაცემების ოპტიმიზებული რენდერი და რთული UI კომპონენტების შექმნა, როგორიცაა დინამიური ცხრილები და ფილტრაციის სისტემები.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://react.dev/"
  },
  {
    id: "data-visualizer",
    title: "Interactive Data Visualizer",
    image: project2,
    description: "მონაცემთა ინტერაქტიული ვიზუალიზაცია და ანალიტიკის პანელი D3.js და React-ის გამოყენებით.",
    fullText: "ეს Front-End აპლიკაცია საშუალებას აძლევს მომხმარებლებს დიდი მოცულობის მონაცემების დინამიურ ფილტრაციას და რთულ გრაფიკებად გარდაქმნას რეალურ დროში. პროექტში წარმატებით არის ინტეგრირებული D3.js ბიბლიოთეკა React-ის კომპონენტურ არქიტექტურასთან, რაც უზრუნველყოფს მაღალ პერფორმანსს ანიმაციების რენდერის დროს.",
    tags: ["UI/UX", "React", "D3.js"],
    link: "https://d3js.org/"
  },
  {
    id: "collaboration-tool",
    title: "Real-time Collaboration Workspace",
    image: project3,
    description: "ვებ-აპლიკაცია გუნდური მუშაობისთვის, WebSockets-ისა და Redux-ის ინტეგრაციით სინქრონული კომუნიკაციისთვის.",
    fullText: "სრულიად ფუნქციური Front-End პლატფორმა, სადაც მომხმარებლებს შეუძლიათ ერთდროულად იმუშაონ დაფაზე (Whiteboard). მდგომარეობის (State) სამართავად გამოყენებულია Redux Toolkit, ხოლო დიზაინი სრულად აგებულია Custom CSS მოდულებით და ითვალისწინებს საუკეთესო UI/UX პრაქტიკებს Drag-and-Drop ფუნქციონალისთვის.",
    tags: ["Redux", "WebSockets", "UI/UX"],
    link: "https://redux-toolkit.js.org/"
  }
];

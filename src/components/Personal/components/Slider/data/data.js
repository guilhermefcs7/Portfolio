import netflix from "../images/netflix.jpg";
import photoGallery from "../images/photoGallery.jpg";
import crud from "../images/crud.jpg";
import github from "../images/github.jpg";

export const data = [
  {
    id: 1,
    image: netflix,
    link: "https://netflix-clone-2-0-gamma.vercel.app/auth",
    title: "Netflix 2.0",
    subtitle: "React / TypeScript / Tailwind CSS / Next.Js / Prisma / MongoDB ",
    description:
      "This is a full-stack web application that represents an evolution of the Netflix clone previously created by me. The application has a front-end developed in React and Tailwind CSS, and a complete back-end, which includes MongoDB, Next.js, and NextAuth. The application is deployed in the cloud using the Vercel platform.",
  },
  {
    id: 2,
    image: photoGallery,
    link: "https://github.com/guilhermefcs7/PhotoGallery",
    title: "Photo Gallery",
    subtitle: "React / TypeScript/ Firebase",
    description:
      "The PhotoGallery repository is a web application that allows users to upload and organize their photos. Built using ReactJS and TypeScript. Cloud hosting has also been increased with the firebase service for controlling and maintaining files. The project is a great example of how modern web technologies can be used to create innovative and user-friendly applications.",
  },
  {
    id: 3,
    image: crud,
    link: "https://github.com/guilhermefcs7/Crud",
    title: "Crud",
    subtitle: " React / Node / MySql",
    description:
      "The Crud repository is a simple CRUD (Create, Read, Update, Delete) application using Node.js and MySql as database. The purpose of this project is to demonstrate the functionality of a CRUD application, which is a common requirement in many web development projects. ",
  },
  {
    id: 4,
    image: github,
    link: "https://github.com/guilhermefcs7/Github-Finder",
    title: "GitHub Finder",
    subtitle: "React / TypeScript",
    description:
      "The Github-Finder repository is a web application developed that allows users to search for Github profiles and view information about users and their repositories. Built using technologies such as ReactJS, TypeScript and Github API, this project provides users with a simple and efficient way to find and explore Github profiles.",
  },
];

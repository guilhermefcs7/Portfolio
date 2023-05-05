import netflix from "../images/netflix.jpg";
import spotify from "../images/spotify-clone.jpg";
import photoGallery from "../images/photoGallery.jpg";
import crud from "../images/crud.jpg";
import rickmorty from "../images/rickmorty.jpg";

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
    image: spotify,
    link: "https://spotify-clone-delta-six.vercel.app/",
    title: "Spotify Clone",
    subtitle: "React / Tailwind / Redux / RapidAPI",
    description:
      "Spotify clone was a platform built based on the real platform, to simulate the operation of a basic streaming service, capable of listening to music.",
  },
  {
    id: 3,
    image: rickmorty,
    link: "https://github.com/guilhermefcs7/rick-morty-challenger",
    title: "Rick and Morty",
    subtitle: "React / TypeScript / Next.Js / Jest ",
    description:
      "It consists of a front-end system using React, which is capable of integrating and populating data with the Rick and Morty api. Having mainly the possibility of listing characters, bookmarking and filtering, with search funcionality and a details screen which should contain as much information as possible. Besides the application was automated with tests using Jest.",
  },
  {
    id: 4,
    image: photoGallery,
    link: "https://github.com/guilhermefcs7/PhotoGallery",
    title: "Photo Gallery",
    subtitle: "React / TypeScript/ Firebase",
    description:
      "The PhotoGallery repository is a web application that allows users to upload and organize their photos. Built using ReactJS and TypeScript. Cloud hosting has also been increased with the firebase service for controlling and maintaining files. The project is a great example of how modern web technologies can be used to create innovative and user-friendly applications.",
  },
  {
    id: 5,
    image: crud,
    link: "https://github.com/guilhermefcs7/Crud",
    title: "Crud",
    subtitle: " React / Node / MySql",
    description:
      "The Crud repository is a simple CRUD (Create, Read, Update, Delete) application using Node.js and MySql as database. The purpose of this project is to demonstrate the functionality of a CRUD application, which is a common requirement in many web development projects. ",
  },
];

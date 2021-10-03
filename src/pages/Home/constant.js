import IMAGES from "../../assets/images";

// SEMUA TEXT DITULIS DISINI

export const Nav = {
  logo: IMAGES.logo,
  // Sementara tidak pakai react-router-dom
  // Karena tipe web nya SINGLE PAGE
  item: [
    { name: "Blogss", href: "/#" },
    { name: "Open Source Project", href: "/#" },
    { name: "Experience", href: "/#" },
  ],
};

export const Sec1 = {
  h2: "Hi and welcome to",
  h1: `Ahmad Amirudin's Site`,
  desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui
  quas,`,
  // Hanya button sebelah kiri saja
  button: { name: "see project", href: "/#" },
  // Button contact me langsung mengarah ke bawah
};

export const Sec2 = {
  h1: "Recent Activities",
  more: "more",
  // Max 4, Jika lebih tidak akan tampil
  content: [
    {
      image: IMAGES.Square,
      name: "Project kegabutan Hello world!",
      desc: "Lorem ipsum dolor sit amet, consectetur",
      date: "10/01/2021",
    },
    {
      image: IMAGES.Square,
      name: "Project kegabutan Hello world!",
      desc: "Lorem ipsum dolor sit amet, consectetur",
      date: "10/01/2021",
    },
    {
      image: IMAGES.Square,
      name: "Project kegabutan Hello world!",
      desc: "Lorem ipsum dolor sit amet, consectetur",
      date: "10/01/2021",
    },
    {
      image: IMAGES.Square,
      name: "Project kegabutan Hello world!",
      desc: "Lorem ipsum dolor sit amet, consectetur",
      date: "10/01/2021",
    },
  ],
};

export const Sec3 = {
  h1: "Work Inquiry",
  // Dipisah menjadi 2 line saat tampilan mobile
  desc1: "Let’s work together and i’ll",
  desc2: " help you by all my best",
  button: {
    name: "Get in Touch",
    href: "/#",
  },
  location: "Magetan, Indonesia",
  email: "ahmadamirudin901@gmail.com",
  phone: "(+62) 821 4314 2419",
  whatsapp: "https://whatsapp.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
};

export const Footer = {
  text: "Made with Love and Gabut",
};

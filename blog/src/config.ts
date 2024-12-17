import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://tolgabayrak.com/", // replace this with your deployed domain
  author: "Tolga BAYRAK",
  profile: "https://tolgabayrak.com/",
  desc: "Tolga Bayrak'ın kişisel blogu. Yazılım geliştirme, teknoloji ve kişisel gelişim üzerine içerikler.",
  title: "Tolga BAYRAK",
  ogImage: "",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/tolgabayrakdev",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/tolgabayrakz",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/tolgabayrak0",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:bayraktolga28@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
 
];

export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Tolga BAYRAK',
    subtitle: 'Kişisel blog sayfası',
    description: 'Tolga BAYRAK tarafından yazılan kişisel bir blog sayfasıdır.',
    image: {
        src: '/site-image.jpg',
        alt: 'Tolga Bayrak Blog Sayfası'
    },
    headerNavLinks: [
        {
            text: 'Anasayfa',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Etiketler',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'Hakkımda',
            href: '/about'
        },
        {
            text: 'İletişim',
            href: '/contact'
        },

    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://instagram.com/tolgabayrakv'
        },
        {
            text: 'Linkedln',
            href: 'https://www.linkedin.com/in/tolgabayrak0/'
        }
    ],
    hero: {
        title: 'Selam, hoşgeldin 👋🏻',
        text: "Tekrardan selam, burada ilgimi çektiği ve merak ettiğim konulara azıcık da olsa değinmek istedim. Umarım keyif alırsın. İyi okumalar. <a href='https://github.com/tolgabayrakdev'>GitHub</a> ve <a href='https://instagram.com/tolgabayrakv'>Instagram</a>.",
       
        actions: [
            {
                text: 'Benimle iletişime geç',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;

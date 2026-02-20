import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Despre noi',
      links: [
        {
          text: 'Despre noi',
          href: getPermalink('/despre-noi'),
        },
        {
          text: 'Viziune și Misiune',
          href: getPermalink('/viziune'),
        },
        {
          text: 'Structura de Conducere',
          href: getPermalink('/structura-de-conducere'),
        },
        {
          text: 'Rapoarte de Activitate',
          href: getPermalink('/rapoarte-de-activitate'),
        },
        {
          text: 'Galerie foto',
          href: getPermalink('/galerie'),
        },
      ],
    },
    {
      text: 'Centre',
      links: [
        {
          text: 'CSS „Sf. Vasile cel Mare"',
          href: getPermalink('/centre/css-sf-vasile'),
        },
        {
          text: 'CAMS „Sf. Pantelimon"',
          href: getPermalink('/centre/poli-sf-pantelimon'),
        },
        {
          text: 'CSS „Acoperământul Maicii Domnului"',
          href: getPermalink('/centre/css-amd'),
        },
        {
          text: 'CIA „Sf. Nicolae", Mociu',
          href: getPermalink('/centre/cia-mociu'),
        },
        {
          text: 'Grădinița Socială, Turda',
          href: getPermalink('/centre/gradi-turda'),
        },
        {
          text: 'Programul „Sf. Dimitrie Basarabov"',
          href: getPermalink('/centre/progr-sf-dimitrie'),
        },
      ],
    },
    {
      text: 'Proiecte',
      links: [
        {
          text: 'Școala Gimnazială „Christiana"',
          href: getPermalink('/proiecte/scoala-gimnaziala-christiana'),
        },
        {
          text: '„Învață să reușești"',
          href: getPermalink('/proiecte/invata-sa-reusesti'),
        },
        {
          text: 'Burse Școlare',
          href: getPermalink('/proiecte/burse-scolare'),
        },
        {
          text: 'Meditații Școlare',
          href: getPermalink('/proiecte/meditatii-scolare'),
        },
        {
          text: 'Centrul Comunitar pentru Tineret',
          href: getPermalink('/proiecte/centrul-comunitar-pentru-tineret'),
        },
        {
          text: 'Pentru Viață',
          href: getPermalink('/proiecte/pentru-viata'),
        },
        {
          text: 'Cantina Socială „Sf. Arhidiacon Ștefan"',
          href: getPermalink('/proiecte/cantina-sociala'),
        },
        {
          text: '„Părinți și adolescenți"',
          href: getPermalink('/proiecte/parinti-si-adolescenti'),
        },
      ],
    },
    {
      text: 'Noutăți',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [
    {
      text: 'Donează',
      href: getPermalink('/sustine-ne'),
      class: 'bg-[#ed9f23] hover:bg-[#d68d1a] text-white',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Centre',
      links: [
        { text: 'CSS „Sf. Vasile cel Mare"', href: getPermalink('/centre/css-sf-vasile') },
        { text: 'CAMS „Sf. Pantelimon"', href: getPermalink('/centre/poli-sf-pantelimon') },
        { text: 'CSS „Acoperământul Maicii Domnului"', href: getPermalink('/centre/css-amd') },
        { text: 'CIA „Sf. Nicolae", Mociu', href: getPermalink('/centre/cia-mociu') },
        { text: 'Grădinița Socială, Turda', href: getPermalink('/centre/gradi-turda') },
        { text: 'Programul „Sf. Dimitrie Basarabov"', href: getPermalink('/centre/progr-sf-dimitrie') },
      ],
    },
    {
      title: 'Proiecte',
      links: [
        { text: 'Școala Gimnazială „Christiana"', href: getPermalink('/proiecte/scoala-gimnaziala-christiana') },
        { text: '„Învață să reușești"', href: getPermalink('/proiecte/invata-sa-reusesti') },
        { text: 'Burse Școlare', href: getPermalink('/proiecte/burse-scolare') },
        { text: 'Meditații Școlare', href: getPermalink('/proiecte/meditatii-scolare') },
        { text: 'Centrul Comunitar pentru Tineret', href: getPermalink('/proiecte/centrul-comunitar-pentru-tineret') },
        { text: 'Cantina Socială', href: getPermalink('/proiecte/cantina-sociala') },
        { text: 'Pentru Viață', href: getPermalink('/proiecte/pentru-viata') },
        { text: '„Părinți și adolescenți"', href: getPermalink('/proiecte/parinti-si-adolescenti') },
      ],
    },
    {
      title: 'Informații',
      links: [
        { text: 'Despre noi', href: getPermalink('/despre-noi') },
        { text: 'Viziune și Misiune', href: getPermalink('/viziune') },
        { text: 'Rapoarte de Activitate', href: getPermalink('/rapoarte-de-activitate') },
        { text: 'Galerie foto', href: getPermalink('/galerie') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Susține-ne',
      links: [
        { text: 'Donează', href: getPermalink('/sustine-ne') },
        { text: 'Modalități de susținere', href: getPermalink('/modalitati-de-sustinere') },
        { text: 'Drepturile Donatorului', href: getPermalink('/drepturile-donatorului') },
        { text: 'Pagina Voluntarului', href: getPermalink('/pagina-voluntarului') },
      ],
    },
  ],
  secondaryLinks: [{ text: 'Drepturile Donatorului', href: getPermalink('/drepturile-donatorului') }],
  socialLinks: [
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://www.facebook.com/asociatia.christiana.cluj',
    },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    © ${new Date().getFullYear()} Asociația Filantropică Medical-Creștină Christiana - Filiala Cluj. Toate drepturile rezervate.
  `,
};

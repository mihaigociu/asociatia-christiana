# Asociația Filantropică Medical Creștină Christiana — Filiala Cluj

Site-ul oficial al **Asociației CHRISTIANA — Filiala Cluj**, portat de pe WordPress pe [Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/).

🌐 **[christianacluj.ro](https://christianacluj.ro)**

## Despre asociație

Asociația Filantropică Medical Creștină CHRISTIANA — Filiala Cluj desfășoară activități filantropice, sociale, medicale și educaționale în slujba comunității din Cluj-Napoca și împrejurimi.

### Centre

- **Centrul de Servicii Sociale „Sf. Vasile cel Mare"** — servicii sociale integrate
- **Centrul de Servicii Sociale „Acoperământul Maicii Domnului"** — sprijin pentru persoane vulnerabile
- **Centrul de Îngrijire și Asistență „Sf. Nicolae", Mociu** — îngrijire rezidențială
- **Grădinița Socială „Acoperământul Maicii Domnului", Turda** — educație preșcolară
- **Centrul de Asistență Medico-Socială „Sf. Pantelimon"** — servicii medicale gratuite
- **Programul „Sf. Dimitrie Basarabov"** — informare și consiliere în adicții

### Proiecte

- Cantina Socială „Sf. Arhidiacon Ștefan"
- Burse Școlare
- Meditații Școlare
- Centrul Comunitar pentru Tineret
- „Învață să Reușești"
- „Pentru Viață"
- „Părinți și Adolescenți"
- Școala Gimnazială Christiana — Program A Doua Șansă

## Tehnologii

- [Astro 5](https://astro.build/) — framework static site
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [AstroWind](https://github.com/onwidget/astrowind) — template de bază
- [MDX](https://mdxjs.com/) — pentru articole/blog

## Dezvoltare locală

```bash
# Instalare dependențe
npm install

# Server de dezvoltare
npm run dev

# Build producție
npm run build

# Preview build
npm run preview

# Verificare cod
npm run check
```

## Structura proiectului

```
src/
├── components/     # Componente Astro reutilizabile
├── data/post/      # Articole/noutăți (Markdown)
├── layouts/        # Layout-uri de pagină
├── pages/          # Pagini site
│   ├── centre/     # Pagini centre
│   └── proiecte/   # Pagini proiecte
├── assets/         # Imagini și resurse procesate
└── navigation.ts   # Configurare meniuri
public/
├── images/         # Imagini statice
└── documents/      # PDF-uri (rapoarte de activitate)
```

## Licență

[MIT](./LICENSE.md) — bazat pe template-ul [AstroWind](https://github.com/onwidget/astrowind) de la [onwidget](https://github.com/onwidget).

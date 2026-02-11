import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'jdj-craft/jdj-craft-web',
  },
  collections: {
    projects: collection({
      label: 'Projekty',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Název projektu' } }),
        category: fields.select({
            label: 'Kategorie',
            options: [
                { label: 'Rekonstrukce', value: 'rekonstrukce' },
                { label: 'Vodo-Topo', value: 'vodo-topo' },
                { label: 'Elektroinstalace', value: 'elektroinstalace' },
                { label: 'Zednické práce', value: 'zednicke-prace' },
                { label: 'Realizace', value: 'realizace' }
            ],
            defaultValue: 'rekonstrukce'
        }),
        shortDesc: fields.text({ label: 'Krátký popis' }),
        fullDesc: fields.text({ label: 'Celý popis (do modalu)', multiline: true }),
        hidden: fields.checkbox({ label: 'Skrýt projekt', defaultValue: false }),
        mainImage: fields.image({
          label: 'Hlavní obrázek',
          directory: 'src/assets/projectsImg',
          publicPath: '@/assets/projectsImg',
        }),
        gallery: fields.array(
          fields.image({
            label: 'Obrázek galerie',
            directory: 'src/assets/projectsImg',
            publicPath: '@/assets/projectsImg',
          }),
          { label: 'Galerie' }
        ),
        content: fields.document({
            label: 'Obsah',
            formatting: true,
            dividers: true,
            links: true,
        }),
      },
    }),
  },
});
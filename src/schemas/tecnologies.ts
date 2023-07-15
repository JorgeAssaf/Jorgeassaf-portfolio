export const technologies = {
  name: 'technology',
  title: 'Technologies',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',

    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'slug',
          options: { source: 'name' },

        },
      ],
    },
  ],
}

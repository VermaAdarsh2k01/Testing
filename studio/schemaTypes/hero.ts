export default {
    name: 'simpleContent',
    title: 'Simple Content',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: import('sanity').Rule) => Rule.required()
      },
      {
        name: 'heading',
        title: 'Heading',
        type: 'string',
        description: 'The main heading text'
      }
    ]
  }
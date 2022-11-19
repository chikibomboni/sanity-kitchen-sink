export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6379549c47398b319c7430e8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6rof33gj',
                  apiId: '5cf5f85c-f151-4612-9a80-222e050c5a86'
                },
                {
                  buildHookId: '6379549ce090c234bbbeea4a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-983q1q64',
                  apiId: '66b25605-f473-4ac1-ad7e-6344c72d31b0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chikibomboni/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-983q1q64.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

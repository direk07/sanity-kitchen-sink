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
                  buildHookId: '60f9a9a05eca37145f8140e6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-d96zuf4o',
                  apiId: '140ece2c-96ba-4d72-bdb6-7eb8fec49266'
                },
                {
                  buildHookId: '60f9a9a0c8224712e83dbb26',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-upqibftt',
                  apiId: '881b7a07-158c-421a-a1ab-ee8fb088c213'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pixelerspro/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-upqibftt.netlify.app', category: 'apps'}
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

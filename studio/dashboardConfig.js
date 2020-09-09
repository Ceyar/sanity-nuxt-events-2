export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events-2-studio-qucq9kyr',
                  apiId: '62e018d7-074e-4614-b024-0dd20b0bbec6'
                },
                {
                  buildHookId: '5f5920c488c7280d626d370a',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events-2-web-9k2ydtmf',
                  apiId: '4447f4a6-ee2e-4073-8441-e1ba65a2f9e7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Ceyar/sanity-nuxt-events-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events-2-web-9k2ydtmf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}

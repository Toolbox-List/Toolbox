import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Toolbox",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Sidebar Categries',
        items: [
          { text: 'Categories', link: '/categories' },
        ],
        text: 'Privacy / Security',
        items: [
          { text: 'AdBlock', link: '/privacy-security/adblock' },
        ],

      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Toolbox-List/Toolbox' }
    ]
  }
})

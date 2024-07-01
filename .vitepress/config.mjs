import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "🧰 Toolbox",
  description: "Toolbox is a consolidated list of websites, applications and tools from across the internet. ",
  base: '/Toolbox/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
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

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
          { text: 'Anti Virus', link: '/privacy-security/antivirus' },
          { text: 'Encryption', link: '/privacy-security/encryption' },
          { text: 'Passwords', link: '/privacy-security/passwords' },
          { text: 'Search Engines', link: '/privacy-security/privacy-search-engines' },
          { text: 'VPN', link: '/privacy-security/vpn' },
        ],
        
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Toolbox-List/Toolbox' }
    ]
  }
})

export const manifestForPlugIn = {
  registerType:'prompt',
  includeAssests:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg", "vite.svg", "naruto-logo.png", "naruto-characters.jpg"],
  manifest:{
    name:"React-vite-app",
    short_name:"react-vite-app",
    description:"I am a simple vite app",
    icons:[{
      src: '/assets/vite.svg',
      sizes:'192x192',
      type:'image/svg',
      purpose:'favicon'
    },
    {
      src:'/assets/vite.svg',
      sizes:'512x512',
      type:'image/svg',
      purpose:'favicon'
    },
    {
      src: '/assets/vite.svg',
      sizes:'180x180',
      type:'image/svg',
      purpose:'apple touch icon',
    },
    {
      src: '/assets/vite.svg',
      sizes:'512x512',
      type:'image/svg',
      purpose:'any maskable',
    }
  ],
  theme_color:'#171717',
  background_color:'#f0e7db',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  }
}
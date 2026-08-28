const fs = require('fs')
const pages = ['/', '/about', '/services', '/gallery', '/contact', '/policies']
const siteUrl = 'https://elmanicomiotattoo.es' // edit if needed

const urls = pages.map(p => `  <url>\n    <loc>${siteUrl}${p}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`).join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`

if (!fs.existsSync('dist')) fs.mkdirSync('dist')
fs.writeFileSync('dist/sitemap.xml', xml)
console.log('Sitemap generado en dist/sitemap.xml')

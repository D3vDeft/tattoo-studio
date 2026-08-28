import { useHead } from '@vueuse/head'

export function useSeo(opts: { title: string; description: string; url?: string }) {
  useHead({
    title: opts.title,
    meta: [
      { name: 'description', content: opts.description },
      { property: 'og:title', content: opts.title },
      { property: 'og:description', content: opts.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: opts.url ?? (typeof window !== 'undefined' ? window.location.href : '') }
    ],
    link: [{ rel: 'canonical', href: opts.url ?? (typeof window !== 'undefined' ? window.location.href : '') }],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'TattooParlor',
          'name': 'El Manicomio Tattoo',
          'url': opts.url ?? (typeof window !== 'undefined' ? window.location.href : ''),
          'telephone': '+34 600 000 000'
        })
      }
    ]
  })
}

import { useEffect } from 'react'

const SITE = 'https://indianhelpingtrust.org'

function upsertMeta(attr, key, content) {
  if (content == null) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Per-route SEO head manager for the Vite SPA.
 * Sets title, description, canonical, robots, Open Graph, Twitter Card and an
 * optional page-specific JSON-LD block. No external dependency.
 */
export default function Seo({
  title,
  description,
  path = '/',
  image = '/og-home.jpg',
  type = 'website',
  noindex = false,
  jsonLd = null,
}) {
  useEffect(() => {
    const url = SITE + path
    const img = image.startsWith('http') ? image : SITE + image

    if (title) document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    upsertLink('canonical', url)

    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:image', img)
    upsertMeta('property', 'og:site_name', 'Indian Helping Trust')

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', img)

    // Page-specific structured data (kept separate from the static site-wide JSON-LD).
    let script = document.getElementById('page-jsonld')
    if (jsonLd) {
      if (!script) {
        script = document.createElement('script')
        script.type = 'application/ld+json'
        script.id = 'page-jsonld'
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(jsonLd)
    } else if (script) {
      script.textContent = ''
    }
  }, [title, description, path, image, type, noindex, jsonLd])

  return null
}

// Helper: BreadcrumbList JSON-LD builder.
export function breadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: SITE + it.path,
    })),
  }
}

export { SITE }

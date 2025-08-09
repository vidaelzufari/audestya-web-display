import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description?: string;
  canonical?: string;
}

const ensureMeta = (name: string, attr: 'name' | 'property', content: string) => {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const Seo = ({ title, description, canonical }: SeoProps) => {
  useEffect(() => {
    if (title) document.title = title;
    if (description) ensureMeta('description', 'name', description);
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }
  }, [title, description, canonical]);

  return null;
};

export default Seo;

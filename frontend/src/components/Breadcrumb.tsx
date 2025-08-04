import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  const location = useLocation();

  // Configuration des chemins et leurs labels
  const pathConfig: { [key: string]: string } = {
    '/': 'Accueil',
    '/presentation': 'Identité & Approche',
    '/reseaux-distribution': 'Réseaux de Distribution',
    '/relations-commerciales': 'Relations et Pratiques Commerciales',
    '/accompagnement-juridique': 'Accompagnement Juridique Externalisé',
    '/actualites': 'Actualités',
    '/honoraires': 'Honoraires',
    '/portail-client': 'Portail Client',
    '/mentions-legales': 'Mentions Légales',
    '/politique-confidentialite': 'Politique de Confidentialité',
    '/politique-cookies': 'Politique des Cookies',
  };

  // Générer automatiquement les items du breadcrumb si non fournis
  const generateBreadcrumbItems = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbItems: BreadcrumbItem[] = [
      { label: 'Accueil', path: '/' }
    ];

    let currentPath = '';
    pathSegments.forEach(segment => {
      currentPath += `/${segment}`;
      const label = pathConfig[currentPath] || segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      breadcrumbItems.push({
        label,
        path: currentPath
      });
    });

    return breadcrumbItems;
  };

  const breadcrumbItems = items || generateBreadcrumbItems();

  // Ne pas afficher le breadcrumb sur la page d'accueil
  if (location.pathname === '/' && !items) {
    return null;
  }

  return (
    <nav className={`flex items-center space-x-2 text-sm text-muted-foreground ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          const isHome = index === 0;

          return (
            <li key={item.path} className="flex items-center space-x-2">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-muted-foreground/60" />
              )}
              
              {isLast ? (
                <span className="font-medium text-primary" aria-current="page">
                  {isHome && <Home className="w-4 h-4 inline mr-1" />}
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="hover:text-primary transition-colors flex items-center"
                >
                  {isHome && <Home className="w-4 h-4 mr-1" />}
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '**',
      },
    ],
  },
  i18n: {
    locales: ['es', 'de', 'en'], // Idiomas soportados
    defaultLocale: 'es', // Idioma predeterminado
    domains: [
      {
        domain: isProduction
          ? 'ciudades-de-cuidado.org'
          : 'ciudades-de-cuidado.vercel.app',
        defaultLocale: 'es',
      },
      {
        domain: isProduction
          ? 'sorgende-staedte.org'
          : 'sorgende-staedte.vercel.app',
        defaultLocale: 'de',
      },
      {
        domain: isProduction
          ? 'caring-cities.org'
          : 'caring-cities.vercel.app',
        defaultLocale: 'en',
      },
    ],
  },
};

export default nextConfig;

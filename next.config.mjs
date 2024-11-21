/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['ciudades-de-cuidado.org'], // Agrega tu dominio aquí
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;

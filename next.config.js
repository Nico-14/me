module.exports = {
  i18n: {
    locales: ['es'],
    defaultLocale: 'es',
  },
  redirects() {
    return [
      {
        source: '/proyectos',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/projects',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  }
};

module.exports = {
  globDirectory: 'dist/angular-single-page-developer-portfolio/',
  globPatterns: ['**/*.{html,js,ts,css}'],
  swDest: 'dist/angular-single-page-developer-portfolio/service-worker.js',
  clientsClaim: true,
  skipWaiting: true,
};

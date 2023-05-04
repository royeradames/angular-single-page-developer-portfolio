module.exports = {
  globDirectory: 'dist/angular-single-page-developer-portfolio/',
  globPatterns: ['**/*.{html,js,css,ico,jpg,png,svg,json}'],
  swDest: 'dist/angular-single-page-developer-portfolio/service-worker.js',
  clientsClaim: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'images-cache',
      },
    },
    {
      urlPattern: /\.(?:css|js)$/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-assets-cache',
      },
    },
  ],
};

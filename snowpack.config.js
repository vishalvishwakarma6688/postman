// snowpack.config.js
module.exports = {
    mount: {
      // Mount the root directory (`postman-clone/`) at the root URL.
      '.': { url: '/' },
    },
    routes: [
      // Enable an SPA Fallback in development (for single-page applications)
      { match: 'routes', src: '.*', dest: '/index.html' },
    ],
    optimize: {
      // Bundle the final build (optional, useful for production)
      bundle: true,
      minify: true,
      target: 'es2018',
    },
    packageOptions: {
      // Additional package options (optional)
    },
    devOptions: {
      // Set the development server port to 8080 (default)
      port: 8080,
    },
    buildOptions: {
      // Define where to output the build (optional)
      out: 'build',
    },
  };
  
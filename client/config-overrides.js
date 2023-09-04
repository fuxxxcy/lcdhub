const path = require('path');

module.exports = function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, 'src'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@images': path.resolve(__dirname, 'public/assets/img'),
    '@component-styles': path.resolve(__dirname, 'src/components/styles'),
  };

  return config;
};

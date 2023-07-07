const path = require('path');

module.exports = function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, 'src'),
    '@components': path.resolve(__dirname, 'src/components')
  };

  return config;
};

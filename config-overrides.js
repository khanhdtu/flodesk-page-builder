const { addWebpackAlias, override } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@stores': path.resolve(__dirname, 'src/stores'),
    '@fixtures': path.resolve(__dirname, 'src/fixtures'),
    '@interfaces': path.resolve(__dirname, 'src/interfaces'),
  })
);
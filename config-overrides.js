const path = require('path');
const { override, addWebpackAlias} = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@views': path.resolve(__dirname, 'src/views'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@styles': path.resolve(__dirname, 'src/assets/scss'),
    '@services': path.resolve(__dirname, 'src/services'),
    '@store': path.resolve(__dirname, 'src/store')
  }),
);

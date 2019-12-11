
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = withBundleAnalyzer({

  distDir: '.next',
  // devIndicators: {
  //   autoPrerender: false,
  // },
  
  compress: true ,  // Next.js provides gzip compression to compress rendered content and static files. Compression only works with the server target.

  webpack(config) {
    const prod = process.env.NODE_ENV === 'production';
    const plugins = [
      ...config.plugins,
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
    ];
    if (prod) {
      plugins.push(new CompressionPlugin()); // main.js.gz
    }
    return {
      ...config,
      mode: prod ? 'production' : 'development',
      devtool: prod ? 'hidden-source-map' : 'eval',
      // optimization: {          // 이거 활성화하면 next/routor  pathname 속성 작동안함
      //   minimize: true,
      //   // splitChunks: {
      //   //     vendors: {
      //   //       enforce: true,
      //   //     }
      //   //   }
      //   // }
      // },

      plugins,
    };
  },
});

/*
module.exports = {
  webpack: (config) => {
    // Unshift polyfills in main entrypoint.
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();
      if (entries['server.js']) {
        entries['server.js'].unshift('./polyfills.js'); // <- polyfill here
      }
      return entries;
    };

    return config;
  }
}
*/
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = withBundleAnalyzer( {
    distDir: '.next',

    // 최종 배포시 이부분은 막아 놓음
    analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
        server: {
        analyzerMode: 'static',
        reportFilename: '../bundles/server.html'
        },
        browser: {
        analyzerMode: 'static',
        reportFilename: '../bundles/client.html'
        }
    },

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
    
      plugins,
    };
  },
});
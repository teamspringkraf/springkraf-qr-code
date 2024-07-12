const commonConfig = require('./webpack.config.common.js');
const config = commonConfig;

module.exports = (env, argv) => {
  config.mode = argv.mode;

  if (argv.mode === "development") {
    config.devtool = "inline-source-map";
    config.watch = true;
  }

  if (argv.mode === "production") {
    config.devtool = "source-map";
    // Only apply this plugin on production because it messes up hot reload.
    config.module.rules.push({
      enforce: "pre",
      test: /\.ts$/,
      loader: "eslint-loader",
      exclude: /node_modules/
    });
  }

  return config;
};
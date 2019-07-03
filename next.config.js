const withLess = require("@zeit/next-less");
const withTypescript = require("@zeit/next-typescript");
const withImages = require("next-images");

if (typeof require !== "undefined") {
  require.extensions[".less"] = file => {};
}

module.exports = withImages(
  withTypescript(
    withLess({
      cssModules: true,
      import: true,
      lessLoaderOptions: {
        javascriptEnabled: true
      },
      env: {
        CAMP_PHONE: process.env.CAMP_PHONE
      },
      webpack(config) {
        // Ensure less files imported in less files are not hashed
        config.module.rules[3].use[
          config.module.rules[3].use.length - 2
        ].options.localIdentName = "[local]";

        return config;
      }
    })
  )
);

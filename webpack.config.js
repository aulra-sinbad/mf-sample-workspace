const { merge } = require("webpack-merge");
const { resolve } = require("path");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "sinbad",
    projectName: "mf-sample-workspace",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    resolve: {
      // https://medium.com/weekly-webtips/create-react-app-import-modules-using-aliases-with-webpack-and-typescript-439017d84eb9
      // ANCHOR[id=path-alias]
      alias: {
        // SECTION Home module
        // NOTE Application
        "@home/application": resolve(
          __dirname,
          "./src/pages/home/application/"
        ),

        "@home/style": resolve(__dirname, "./src/pages/home/assets/styles/"),

        // NOTE Domain/constant
        "@home/domain/constant": resolve(
          __dirname,
          "./src/pages/home/domain/constant/"
        ),

        // NOTE Domain/entity
        "@home/domain/entity": resolve(
          __dirname,
          "./src/pages/home/domain/entity/"
        ),

        // NOTE Domain/repository
        "@home/domain/repository": resolve(
          __dirname,
          "./src/pages/home/domain/repository/"
        ),

        // NOTE Domain/selector
        "@home/domain/selector": resolve(
          __dirname,
          "./src/pages/home/domain/selector/"
        ),

        // NOTE Domain
        "@home/domain": resolve(__dirname, "./src/pages/home/domain/"),

        // NOTE Infrastructure/entity
        "@home/infrastructure/entity": resolve(
          __dirname,
          "./src/pages/home/infrastructure/entity/"
        ),

        // NOTE Infrastructure
        "@home/infrastructure": resolve(
          __dirname,
          "./src/pages/home/infrastructure/"
        ),

        // NOTE Presentation/components
        "@home/component/product-table": resolve(
          __dirname,
          "./src/pages/home/presentation/components/product-table/"
        ),

        // NOTE Presentation/event
        "@home/event": resolve(
          __dirname,
          "./src/pages/home/presentation/event/"
        ),

        // NOTE Presentation/state
        "@home/state": resolve(
          __dirname,
          "./src/pages/home/presentation/state/"
        ),
        // !SECTION
      },
    },
  });
};

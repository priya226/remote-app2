const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: "app2", 
          filename: "remoteEntry.js",
          exposes: {
            // Expose your component
            "./App": "./src/App", // Adjust the path based on your folder structure
          },
          // exposes: {
          //   "./Button": "./src/components/Button",
          // },
          shared: {
            react: { singleton: true, eager: true, requiredVersion: '^18.3.1' },
            "react-dom": { singleton: true, eager: true, requiredVersion: '^18.3.1' },
          },
          
        })
      );

      return webpackConfig;
    },
  },
};

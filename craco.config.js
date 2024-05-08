const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@base": path.resolve(__dirname, "src/base"),
      "@config": path.resolve(__dirname, "src/config"),
      "@infra": path.resolve(__dirname, "src/infra"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@router": path.resolve(__dirname, "src/router"),
      "@uikit": path.resolve(__dirname, "src/uikit"),
      "@views": path.resolve(__dirname, "src/views"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
  devServer: {
    port: 11443,
  },
};

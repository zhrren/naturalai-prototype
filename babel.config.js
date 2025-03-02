module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["@babel/preset-typescript"],
    plugins: [
      "babel-plugin-transform-typescript-metadata",
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
    ],
  };
};

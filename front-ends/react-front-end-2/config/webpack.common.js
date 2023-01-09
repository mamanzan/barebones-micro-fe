module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    //https://webpack.js.org/configuration/resolve/#resolveextensions
    // webpack by itself resolves js/json/wasm files but if you override it like
    // we do you need to specify "..." at the end to bring them back
    extensions: [".tsx", ".ts", "..."],
  },
};

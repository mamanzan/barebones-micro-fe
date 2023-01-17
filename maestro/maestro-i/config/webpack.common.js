module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
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

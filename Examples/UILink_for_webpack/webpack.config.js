module.exports = {
  entry: "./app.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.jade$/, loader: "jade-loader" }
    ]
  },
  resolve: {
    root: [__dirname + "/web_modules"]
  }
}
const path = require('path');

module.exports = {
  entry: './src/index.js', // Adjust to your entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply the loader to JavaScript files
        exclude: /node_modules/, // Don't apply to dependencies in node_modules
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve both .js and .jsx files
  },
};

module.exports = {
    resolve: {
        fallback: {
          "stream": require.resolve("stream-browserify"),
          "path": require.resolve("path-browserify"),
          "crypto": require.resolve("crypto-browserify"),
          "url": require.resolve("url/"),
          "http": require.resolve("stream-http"),
          "https": require.resolve("https-browserify"),
          "zlib": require.resolve("browserify-zlib"),
          "events": require.resolve("events/"),
          "util": require.resolve("util/")
        }
      }
  };
  
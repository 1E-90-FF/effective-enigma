module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter("absoluteUrl", (url, base) => {
      try {
        return new URL(url, base).href;
      } catch (err) {
        console.error(`Error creating absolute URL: ${err.message}`);
        return url;
      }
    });
  };
  
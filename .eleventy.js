const filters = require("./filters.js");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('js')
    eleventyConfig.addPassthroughCopy('fonts')
    eleventyConfig.addPassthroughCopy('images')
    eleventyConfig.addPassthroughCopy("robots.txt");
    eleventyConfig.addCollection("posts", function(collectionApi) {
      return collectionApi.getFilteredByGlob("posts/*.md");
    });
    filters(eleventyConfig);

    // Add a collection for all items
    eleventyConfig.addCollection("all", function(collectionApi) {
      return collectionApi.getAll();
    });
    return {
      dir: {
        input: ".",
        includes: "_includes",
        data: "_data",
        output: "_site"
      }
    };
  }
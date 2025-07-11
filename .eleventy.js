module.exports = function(eleventyConfig) {
  // Copy static files
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");
  
  // Create collections
  eleventyConfig.addCollection("schedule", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/schedule/*.md");
  });
  
  // Add date filter
  eleventyConfig.addFilter("dateDisplay", (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
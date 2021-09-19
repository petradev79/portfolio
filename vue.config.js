module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "@/scss/_animations.scss";
        @import "@/scss/_variables.scss";
        @import "@/scss/_mixins.scss";
        @import "@/scss/_general.scss";
        `
      }
    }
  }
};

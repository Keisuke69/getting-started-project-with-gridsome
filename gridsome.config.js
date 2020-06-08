// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Cooooool Site!!!!",
  plugins: [
    {
      use: "@gridsome/source-wordpress",
      options: {
        baseUrl: "http://52.194.210.69/", // required
        typeName: "blog",
        apiBase: 'wp-json',
        perPage: 10,
        concurrent: 1,
      },
    },
  ],
  templates: {
    BlogPost: "/:year/:month/:day/:slug",
  },
  icon: {
    favicon: "./src/red-skull.png",
    touchicon: {
      src: "./src/red-skull.png",
      sizes: [76, 152, 120, 167],
      precomposed: true,
    },
  },
};

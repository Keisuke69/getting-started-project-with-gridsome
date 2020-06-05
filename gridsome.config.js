// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Cooooool Site!!!!",
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './blog/**/*.md',
      }
    }
  ],
  templates: {
    Post: '/blog/:id'
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

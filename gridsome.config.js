// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Coool Site!!!!',
  plugins: [],
  icon: {
    favicon: './src/red-skull.png',
    touchicon: {
      src: './src/red-skull.png',
      sizes: [76, 152, 120, 167],
      precomposed: true
    }
  }
}

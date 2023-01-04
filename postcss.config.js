module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  content: {
    transform: (content) => content.replace(/taos:/g, ''),
  },
}

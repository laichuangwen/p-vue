module.exports = {
  plugins: [
    [
      require.resolve('babel-plugin-import'),
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      }, 'vant',
    ]
  ]
};

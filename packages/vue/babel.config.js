module.exports = {
  plugins: [
    [
      require.resolve('babel-plugin-component'),
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      }
    ]
  ]
};

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('', './src')
      .set('packages', './packages')
      .set('examples', './examples')
  }
}
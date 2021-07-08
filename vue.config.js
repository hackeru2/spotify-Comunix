// vue.config.js for less-loader@6.0.0
module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#1ed760',
            'link-color': '#1ed760',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
};
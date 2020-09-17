module.exports = {
    pluginOptions: {
        electronBuilder: {
            chainWebpackRendererProcess(config) {
                config.plugins.delete('workbox')
                config.plugins.delete('pwa')
            }
        }
    }
}

module.exports = {
    pwa: {
        themeColor: '#4A90E2',
        msTileColor: '#4A90E2',
        manifestOptions: {
            background_color: '#4A90E2'
        }
    }
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "@/assets/styles/styles.scss";'
            }
        }
    }
}
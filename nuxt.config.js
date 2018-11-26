module.exports = {
    plugins: [
        '~/plugins/element-ui.js'
    ],
    css: [
        'element-ui/lib/theme-chalk/index.css',
        '~/css/index.css'
    ],
    head: {
        titleTemplate: 'Рейтинг франшиз',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: 'Рейтинг франшиз на портале БиБосс.ру' }
        ]
    }
}
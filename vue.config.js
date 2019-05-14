const PrerenderSPAPlugin = require('prerender-spa-plugin');
const path = require('path');

module.exports = {
    publicPath: '/',
    outputDir: path.join(__dirname, 'dist'),
    configureWebpack: {
        plugins: [
            new PrerenderSPAPlugin({
                staticDir: path.join(__dirname, 'dist'),
                outputDir: path.join(__dirname, 'dist'),
                indexPath: path.join(__dirname, 'dist', 'index.html'),
                routes: [
                    '/',
                    '/login',
                    '/dashboard',
                    '/about'
                ],
            }),
        ],
    },
};
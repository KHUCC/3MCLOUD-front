
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        createProxyMiddleware(['/auth', '/file'], {
            target: 'http://54.225.193.176:8080',
            changeOrigin: true,
        })
        // '/file',
        // createProxyMiddleware({
        //     target: 'http://localhost:8080/',
        //     changeOrigin: true,
        // })
    );
};


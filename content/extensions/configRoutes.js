/**
 * Cấu hình định tuyến đến trang quản lý 
 * @param {kites} kites 
 */
module.exports = function (kites) {
    kites.on('expressConfigure', (app) => {
        kites.logger.info('Configure page views ...');

        app.get('/', (req, res) => res.view('index'));
        app.get('/admin', (req, res) => res.view('admin'));
        app.get('/about', (req, res) => res.view('about'));
    });
}
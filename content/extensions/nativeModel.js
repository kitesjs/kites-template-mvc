/**
 * Accessing native model
 * @param {kites} kites 
 */
module.exports = function (kites) {
    kites.native = new Proxy({}, {
        get(obj, prop) {
            if (typeof prop === 'string' && kites.db[prop] != null) {
                return kites.db[prop].schema;
            } else {
                return obj[prop];
            }
        }
    })
}
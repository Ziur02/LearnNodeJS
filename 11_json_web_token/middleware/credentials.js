const allowedOrigins = require("../config/allowedOrigins");

const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.Header('Access-Control-Allow-Origin', true);
    }
    next();
}

module.exports = credentials;
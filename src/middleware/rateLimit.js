const { requests }   = require('../config');
const rateLimit = require("express-rate-limit");
const slowDown  = require("express-slow-down");

const limiter = rateLimit({
    windowsMS: requests.rateLimit.window,
    max:       requests.rateLimit.max,
    message:   requests.rateLimit.mensagem,
});

const slow = slowDown({
    windowMs:   requests.slowDown.window,
    delayAfter: requests.slowDown.delayAfter,
    delayMs:    requests.slowDown.delayMs,
});
module.exports = [
    limiter,
    slow
];
var url = require('url'),
    analyticsSpamHosts = require('./domains.json');

module.exports = function (req, res, next) {
    var referer = req.header('Referer') || "",
        refererParts = url.parse(referer),
        refererHostname = refererParts.hostname || "",
        i;

    for (i = 0; i < analyticsSpamHosts.length; i++) {
        if (refererHostname.match(analyticsSpamHosts[i])) {
            console.log('[Analytics Spam] Request with referer', referer);
            res.redirect(referer);
            return;
        }
    }

    next();
};

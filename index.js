var express = require('express'),
    ghost = require('ghost'),
    path = require('path'),
    hbs = require('ghost/node_modules/express-hbs'),

    htmlencode = require('htmlencode'),
    widget = new htmlencode.Encoder('numerical'),

    spamProtection = require('./spam-protection'),

    app = express();

ghost({
    config: path.join(__dirname, 'config.js')
}).then(function (ghostServer) {
    hbs.registerHelper('showBio', function showBio(bio) {
        var safeBio = widget.htmlEncode(bio),
            newBio = safeBio
                .replace(/https?:\/\/github.com\/([a-z0-9]+)/gi, function (match, username) {
                    return '<a class="social-link" href="' + match + '"><i class="fa fa-github"></i> Github</a>';
                })
                .replace(/https?:\/\/stackoverflow.com\/users\/([0-9]+)\/([a-z0-9]+)/gi, function (match, id, username) {
                    return '<a class="social-link" href="' + match + '"><i class="fa fa-stack-overflow"></i> Stack Overflow</a>';
                })
            ;

        return new hbs.SafeString(newBio);
    });

    app.use(spamProtection);
    app.use(ghostServer.rootApp);
    ghostServer.start(app);
});

const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/stripe', requireLogin , async (req, res) => {
        req.user.credits += 5;
        const user = await req.user.save();

        res.send(user);
    });
};
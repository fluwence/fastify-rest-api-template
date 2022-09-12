module.exports = {
    route: '/ping',
    exec: async(req, res) => {
        res.send({ping:"pong"});
    },
}

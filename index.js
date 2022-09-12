const Fastify = require('fastify');
const Chalk = require('chalk');
const path = require('path');

const fastify = Fastify({
    logger: true
});
fastify.register(require('@fastify/static'), {
    root: path.join(__dirname, 'public'),
    prefix: '/static/',
})


const errorLog = Chalk.bold.red;
const successLog = Chalk.bold.green;
const infoLog = Chalk.bold.cyan;
const warningLog = Chalk.bold.yellow;

require('./get/router')(fastify);
require('./post/router')(fastify);

fastify.get('/', async (request, reply) => {
    reply.send({ working: true, status: "online", code: 200, });
});

fastify.listen({ port: 3000 }, (err, address) => {
    if (err) throw err
    else console.log(successLog('[*] | Web Server Launched. Address: ') + infoLog(`${address}`));
})

const { AUTHORIZATION_TOKEN } = require('../data.json');
const isEmail = require('is-email');

module.exports = {
    route: "/auth/v1/register",
    exec: async(req, res) => {
        const AUTHORIZATION = req.headers['authorization'];
        if(AUTHORIZATION !== AUTHORIZATION_TOKEN) return res.status(401).send({ error: true, _error: { description: "AUTHORIZATION_TOKEN_NEEDED", location: "Authorization Header", at: Date.now(), code: 401, response_code: 1000 } });
        const { email, username, password, email_updates } = req.body;
        if(!email || typeof email !== 'string' || isEmail(email) !== true) return res.status(200).send({ error: true, _error: { description: "INVALID_PARAMETER", message: "Email is required and must be a valid string and email address.", location: "Body", at: Date.now(), code: 200, response_code: 1002  } });
        if(!password || typeof password !== 'string' || password.length < 8) return res.status(200).send({ error: true, _error: { description: "INVALID_PARAMETER", message: "Password is required, must be a valid string and must be atleast 8 characters in length.", location: "Body", at: Date.now(), code: 200, response_code: 1002  } });
        if(!username || typeof username !== 'string' || username.length < 4) return res.status(200).send({ error: true, _error: { description: "INVALID_PARAMETER", message: "Username is required, must be a valid string, must be atleast 4 characters in length and must not contain invalid characters. Allowed Characters: A-Z a-z 0-9 . - _", location: "Body", at: Date.now(), code: 200, response_code: 1002  } });
        if(email_updates && typeof email_updates !== 'boolean') res.status(200).send({ error: true, _error: { description: "INVALID_PARAMETER", message: "Email Updates must be a valid boolean.", location: "Body", at: Date.now(), code: 200, response_code: 1002  } });
        
    },
}
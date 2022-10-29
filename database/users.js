const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    email: { type: String, required: true },
    id: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: false },
    avatar: { type: String, required: false },
    banner: { type: String, required: false },
    description: { type: String, required: false },
    links: { type: Array, required: false },
    joined: { type: String, required: true },
    status: { type: Object, required: false },
    connections: { type: Array, required: false },
    authorized_apps: { type: Array, required: false },
    created: { type: String, required: true },
    logins: { type: Array, required: true },
    logs: { type: Array, required: false },
    notifications: { type: Array, required: false },
    email_updates: { type: Boolean, required: false },
    followers: { type: Array, required: false },
    following: { type: Array, required: false },
    badges: { type: Array, required: false },
    contact: { type: Object, required: false },
    settings: { type: Object, required: false },
    email_verified: { type: Boolean, required: true },
    logout_from: { type: Array, required: false },
    public_token: { type: String, required: true },
    token: { type: String, required: true },
    access_token: { type: String, required: true },
    api_key: { type: String, required: true },
    api_secret: { type: String, required: true }
});

module.exports = mongoose.model('users', Schema);

/*  STATUS STRUCTURE 
*
*   status: {
*       text: String, // Status Text
*       type: String, // Status Mode: online/offline
*       activity: {
*           name: String,
*           type: String, // Watching, Playing, Listening, Using
*           url: String,
*           image: String
*       }
*   }
*
*/

/* AUTHORIZED APPS STRUCTURE 
*
*   authorized_apps: [
*       {
*           name: String, // App Name
*           icon: String, // App Icon
*           id: String, // App ID
*           token: String, // App Token
*           permissions: Array, // App Permissions: Email, Username, ID, Avatar, Banner, Status, etc.
*       },{...}
*   ]
*
*/

/* LINKS STRUCTURE 
*
*   links: [ { name: String, url: String, added: Date }, { name: String, url: String, added: Date } ]
*
*/


/* CONTACT STRUCTURE
*
*   contact: { email: String, phone: String, website: String, address: String },
*
*/

/* SETTINGS STRUCTURE 
*
*   settings: {
*       theme: String,   
*       appearance: { page_zoom: String, font_family: String },
*       sync: Boolean,
*       notifications: Boolean
*   }
*
*/

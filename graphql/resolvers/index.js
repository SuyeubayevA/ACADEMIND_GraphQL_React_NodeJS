const authResolver = require('./auth');
const eventsResolver = require('./booking');
const bookingResolver = require('./events');


const rootResolver = {
    ...authResolver,
    ...eventsResolver,
    ...bookingResolver
};

module.exports = rootResolver;
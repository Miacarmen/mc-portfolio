// require JWT to check vilidity of token
const jwt = require('jsonwebtoken');

// set secret and token expiration
const secret = 'mysecretshhh';
const expiration = '2h';

module.exports = {
  // function for authenticated routes
  authMiddleware: function ({ req }) {
    // allows token to be sent through query or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // authorization: Bearer <token>
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    // verify token and get user data
    try {
      const { data } = jwt.verify(token, secret, {
        maxAge: expiration,
      });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }
    // send to next endpoint
    return req;
  },
  // function to combine payload, secret, and string to return token as a string
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, {
      expiresIn: expiration,
    });
  },
};

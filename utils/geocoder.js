const NodeGeocoder = require('node-geocoder');

const options = {
  provider: process.env.GEOCODER_PROVIDER,
  httoAdapter: 'https',
  apiKey: process.env.GEOCODER_API_KEY,
  formatted: null,
  proxy: 'google',
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;

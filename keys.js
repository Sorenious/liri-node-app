console.log('this is loaded');
var Twitter = require('twitter');

var twitterKeys = new Twitter( {
  consumer_key: '2SeeLvUegPexf1XybQqPMT9uJ',
  consumer_secret: 'qoh0qszuFcB42rdZqTsa4ON02zqTUozGL1xJnuxfPqfMTZYaOr',
  access_token_key: '3270424314-AEDiIPLIwIW9jiaNVK9J1i8l1LDazRn9qNqroZo',
  access_token_secret: '05zvyVLUUjKMgI0tUd9NKBxfFSZNojfLAaqINErotOMpX',
});

module.exports = twitterKeys;
var simplayer = require('simplayer');
const DIR_MP3 = 'mp3';
const VOICE_EXT = '.MP3';

var mp3 = DIR_MP3 + '/' + process.argv[2] + VOICE_EXT;
console.log(mp3);
var musicProcess = simplayer(mp3, function(error) {
  if (error) throw error;
  console.log('end of song!');
});

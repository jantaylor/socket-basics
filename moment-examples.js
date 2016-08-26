var moment = require('moment');
var now = moment();

now.subtract(1, 'year');

console.log(now.format());
console.log(now.format('X'));
console.log(now.format('x'));
console.log(now.valueOf()); //number instead of string
console.log(now.format("dddd, MMMM Do YYYY, h:mm:ss a"));
console.log(now.format("h:mm:ss a"));
console.log(now.format("MMM Do h:mma"));

var timestamp = 1440611268504;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.format());

//Challenge -
// 11:06 am
console.log();
console.log(now.format("h:mm a"));

//Answer improved
console.log(now.local().format("h:mm a"));
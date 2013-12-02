var google = require('./lib/google');

google.resultsPerPage = 10;
var nextCounter = 0;

google('node.js best practices', function(err, page, next, links){
  if (err) console.error(err);
  console.log('Page Return = '+page);
  for (var i = 0; i < links.length; ++i) {
    console.log(links[i].link); //link.href is an alias for link.link
  }
});

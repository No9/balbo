var assert = require('assert');
var fs = require('fs');
var balbo = require('../').create();

// Get the initial template
var src = fs.readFileSync(__dirname + '/template.hbs', 'utf8');

//compile it
var template = balbo.compile(src);

//Get some data
var data = { "request" : 
		{"item1" : "item1data",
		 "item2" : "item2data"	
		}
	   };

//Create some output based on the template and the data. 
var finaloutput = template(data);

assert.equal(finaloutput, '<request item1="item1data" type="test">\n'
		+ '	<item2>item2data</item2>\n'
+ '</request>\n');

console.log("Simple Test Passed");

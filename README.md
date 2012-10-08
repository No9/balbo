# balbo

A node.js module wrapper based on handlebars.js 1.0.beta.6
Supports all handlebars.js templating techniques 

[![build status](https://secure.travis-ci.org/No9/balbo.png)](http://travis-ci.org/No9/balbo)

## Install 
```
npm install balbo
```

## Usage 

```
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
```

*See tests folder for working sample*

##License

(The MIT License)

Copyright (c) 2012 Anthony Whalley

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

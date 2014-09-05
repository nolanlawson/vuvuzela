vuvuzela
=========

Super simple JSON parse/stringify library.

Goals
-----

- No recursion (avoids "too much recursion" or "maximum call stack" errors)
- Speed (no functions within functions, just a `while` loop and a stack)
- Small footprint (<1 KB minified and gzipped)

Description
-----


This doesn't implement the full JSON spec, but it's designed to work for most common structures. And importantly, it doesn't care how deeply nested your JSON structures are.

This is not a streaming library, so unlike [oboe](https://github.com/jimhigson/oboe.js)/[clarinet](https://github.com/dscape/clarinet), it reads the whole thing into memory at once. Use at your own risk!

Usage
------

    $ npm install vuvuzela

```js
var vuvuzela = require('vuvuzela')

var asString = vuvuzela.stringify({hello: 'world'}); // '{"hello":"world"}'

var asJson = vuvuzela.parse('{"hello": "world"}'); // {hello: 'world'}

```

Browser builds are available in the `dist/` folder. They'll create a `window.vuvuzela` object you can use.

Testing
------

Unit tests:

    $ npm test
    
Coverage tests:

    $ npm run coverage
    
Building
-------

    $ npm run build

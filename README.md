# jstransformer-riotjs

[Riot.js](https://github.com/riot/riot/tree/30f1dc8c8f216b2784dd332823716a888841325c) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-riotjs/master.svg)](https://travis-ci.org/jstransformers/jstransformer-riotjs)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-riotjs/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-riotjs)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-riotjs/master.svg)](http://david-dm.org/jstransformers/jstransformer-riotjs)
[![NPM version](https://img.shields.io/npm/v/jstransformer-riotjs.svg)](https://www.npmjs.org/package/jstransformer-riotjs)

## Note

There is a difference between [Riot.js](https://github.com/riot/riot/tree/30f1dc8c8f216b2784dd332823716a888841325c) and [Riot](https://github.com/riot/riot). The last version was `v1.0.4` before it become a React-like UI library and moved to www.npm.im/riot. There could be a JSTransformer for `Riot` specially. This is just their `v1` template engine, which is a little bit different than `v2` template engine.

## Installation

    npm install jstransformer-riotjs --save

## API

```js
var riotjs = require('jstransformer')(require('jstransformer-riotjs'))

riotjs.render('<p>Hello {place}</p>', {place: 'world'}).body
//=> '<p>Hello world</p>'
```

## License

MIT

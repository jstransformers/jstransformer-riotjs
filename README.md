# jstransformer-riotjs [![The MIT License][license-img]][license-url]

[Riot.js](https://github.com/riot/riot/tree/30f1dc8c8f216b2784dd332823716a888841325c) support for [JSTransformers][jstransformers-url]

[![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url] [![npmjs.com][npmjs-img]][npmjs-url]

**Please, you should notice the difference between [Riot.js](https://github.com/riot/riot/tree/30f1dc8c8f216b2784dd332823716a888841325c) and [Riot](https://github.com/riot/riot)!**

Last version was `v1.0.4` before become React-like UI library and moved to www.npm.im/riot. There could be JSTransformer for `Riot` specially. This just use their `v1` template engine, which in other side is little bit different than `v2` template engine.

## Install
```
npm install jstransformer-riotjs --save
```


## Usage
> For more use-cases see the **tests** in [test folder](./test) or see the [JSTransformer API](http://github.com/jstransformers/jstransformer#api) for more details.

```js
var riotjs = require('jstransformer')(require('jstransformer-riotjs'));

riotjs.render('<p>Hello {place}</p>', {place: 'world'}).body
//=> '<p>Hello world</p>'
```


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jstransformers/jstransformer-riotjs/issues/new).


## License
[The MIT License][license-url]


[npmjs-url]: https://www.npmjs.com/package/jstransformer-riotjs
[npmjs-img]: https://img.shields.io/npm/v/jstransformer-riotjs.svg

[license-url]: ./LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/jstransformers/jstransformer-riotjs
[travis-img]: https://img.shields.io/travis/jstransformers/jstransformer-riotjs.svg

[coveralls-url]: https://coveralls.io/r/jstransformers/jstransformer-riotjs
[coveralls-img]: https://img.shields.io/coveralls/jstransformers/jstransformer-riotjs.svg

[david-url]: https://david-dm.org/jstransformers/jstransformer-riotjs
[david-img]: https://img.shields.io/david/jstransformers/jstransformer-riotjs.svg

[jstransformers-url]: http://github.com/jstransformers

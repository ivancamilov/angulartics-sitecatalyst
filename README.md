## angulartics-sitecatalyst

[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-downloads-url] [![Bower version][bower-image]][bower-url] [![Dependencies status][dep-status-image]][dep-status-url] [![MIT license][license-image]][license-url] [![Join the Slack chat][slack-image]][slack-url]

Adobe Analytics plugin for [Angulartics](http://github.com/luisfarzati/angulartics).

## Install

First make sure you've read installation and setup instructions for [Angulartics](https://github.com/luisfarzati/angulartics#install).

Then you can install this package either with `npm` or with `bower`.

### npm

```shell
npm install angulartics-sitecatalyst
```

Then add `angulartics.sitecatalyst` as a dependency for your app:

```javascript
require('angulartics')

angular.module('myApp', [
  'angulartics',
  require('angulartics-sitecatalyst')
]);
```

> Please note that core Angulartics doesn't export the name yet, but it will once we move it into [the new organization](http://github.com/angulartics).

### bower

```shell
bower install angulartics-sitecatalyst
```

Add the `<script>` to your `index.html`:

```html
<script src="/bower_components/angulartics-sitecatalyst/dist/angulartics-sitecatalyst.min.js"></script>
```

Then add `angulartics.sitecatalyst` as a dependency for your app:

```javascript
angular.module('myApp', [
  'angulartics',
  'angulartics.sitecatalyst'
]);
```

## Documentation

Documentation is available on the [Angulartics site](http://luisfarzati.github.io/angulartics).

## Development

```shell
npm run build
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/angulartics-sitecatalyst.svg
[npm-url]: https://npmjs.org/package/angulartics-sitecatalyst
[npm-downloads-image]: https://img.shields.io/npm/dm/angulartics-sitecatalyst.svg
[npm-downloads-url]: https://npmjs.org/package/angulartics-sitecatalyst
[bower-image]: https://img.shields.io/bower/v/angulartics-sitecatalyst.svg
[bower-url]: http://bower.io/search/?q=angulartics-sitecatalyst
[dep-status-image]: https://img.shields.io/david/angulartics/angulartics-sitecatalyst.svg
[dep-status-url]: https://david-dm.org/angulartics/angulartics-sitecatalyst
[license-image]: http://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE
[slack-image]: https://angulartics.herokuapp.com/badge.svg
[slack-url]: https://angulartics.herokuapp.com

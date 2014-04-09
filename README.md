Cordova + AngularJS + Social Networks
=====================================

A set of AngularJS factories to Social Networks APIs use in Cordova.

The idea is to :
* have a ready-to-use API for "login with {social network}" types, using Cordova InAppBrowser;
* use it as an AngularJS module;
* use the social networks API actions ( share, tweet, like... )

---

## Status : In Development
The module is still in early development.
See [Changelog](https://github.com/raiseandfall/cordova-angular-social-networks/blob/master/CHANGELOG.md) for more details.

---

## Install
Coming soon

---

## Contribute
Clone the repository
```bash
$ git clone git@github.com:raiseandfall/cordova-angular-social-networks.git
$ cd cordova-angular-social-networks
```

Install dependencies
```bash
$ npm install
$ bower install
```

The project uses grunt :
```bash
$ grunt test # will run the karma tests
$ grunt dev # Connect server & watch JS sources files for changes; run tests if source files change
$ grunt build # Build the sources to build/ folder
```

---

## API
### Factory `FacebookManager`
#### `FacebookManager.set()`

#### `FacebookManager.get()`

#### `FacebookManager.login()`

#### `FacebookManager.share()`


#### Factory `TwitterManager` ( coming soon )
#### `TwitterManager.set()`

#### `TwitterManager.get()`

#### `TwitterManager.login()`

#### `TwitterManager.tweet()`


#### Factory `LinkedinManager` ( coming soon )
#### `LinkedinManager.set()`

#### `LinkedinManager.login()`

#### `LinkedinManager.share()`

---

## Examples
Coming soon

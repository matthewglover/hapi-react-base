
[![Build Status](https://travis-ci.org/matthewglover/hapi-react-base.svg?branch=master)](https://travis-ci.org/matthewglover/hapi-react-base) [![Coverage Status](https://coveralls.io/repos/github/matthewglover/hapi-react-base/badge.svg?branch=master)](https://coveralls.io/github/matthewglover/hapi-react-base?branch=master)

## Webpack

This uses a minimal Webpack setup, which just transpiles and bundles jsx and ES2015 code to ES5 and transpiles and bundles sass to css.

The Sass code should only be included once at the top of main.js, so that all sass rules are available to all React Components. Sass files should then be included in main.scss.

### Trade offs

Webpack could be used to transpile/optimise images, use css modules, use post-css. The reason against is that they make writing tests more complex, as the tests would need to be run after all the css and images had been compiled with Webpack. Whilst this can be achieved, using karma with jasmine or mocha, rather than a more streamlined testing setup with AVA.


## Resources

### Webpack

- [Webpack Image Loader](http://www.davidmeents.com/how-to-set-up-webpack-image-loader/)
- [Webpack testing](http://mike-ward.net/2015/09/07/tips-on-setting-up-karma-testing-with-webpack/)


### Git commit messages

- [Seven rules of git commit messages](http://chris.beams.io/posts/git-commit/)

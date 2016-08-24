
[![Build Status](https://travis-ci.org/matthewglover/hapi-react-base.svg?branch=master)](https://travis-ci.org/matthewglover/hapi-react-base) [![Coverage Status](https://coveralls.io/repos/github/matthewglover/hapi-react-base/badge.svg?branch=master)](https://coveralls.io/github/matthewglover/hapi-react-base?branch=master)

## Webpack

This uses a minimal Webpack setup, which only does two things:

- transpiles and bundles jsx and ES2015 code to ES5
- transpiles and bundles sass to css

The Sass code should only be included once at the top of main.js, as all sass rules will then be available to all React Components. Sass files should then be included in main.scss.

### Trade offs

Webpack can do more than just transpile javascript and sass. Possible improvements would be:

- use webpack for images (including automated image optimization)
- use css modules for modularized css
- use post-css for pre-processing css, as a faster and more flexible alternative to sass

The reason against using webpack for images and css modules is that they make writing tests more complex, as the tests would need to be run after all the css and images had been compiled with webpack. Whilst this can be achieved, using karma with jasmine or mocha, the result will be slow tests and rules out the option of using my preferred test frameworks, Tape of AVA.

The reason against post-css is more marginal. But, whilst it it seems a promising and highly configurable way of pre-processing css, sass appears to be the most popular pre-processor around for the moment, and comes with all batteries included.

Personally, I'm on the fence over sass, as I think most sass use cases can be achieved with well thought through css, so sass in practice is often a tool that encourages poorly written css. Nevertheless, we shouldn't blame good tools for shoddy workmanship, so sass is included.






## Resources

### Webpack

- [Webpack Image Loader](http://www.davidmeents.com/how-to-set-up-webpack-image-loader/)
- [Webpack testing](http://mike-ward.net/2015/09/07/tips-on-setting-up-karma-testing-with-webpack/)


### Git commit messages

- [Seven rules of git commit messages](http://chris.beams.io/posts/git-commit/)

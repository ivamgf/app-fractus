Installation and Usage
Prerequisites: Node.js (^12.22.0, ^14.17.0, or >=16.0.0) built with SSL support. (If you are using an official Node.js distribution, SSL is always built in.)

You can install ESLint using npm or yarn:

npm install eslint --save-dev

# or

yarn add eslint --dev
You should then set up a configuration file, and the easiest way to do that is:

$ npm init @eslint/config

# or

$ yarn create @eslint/config
Note: npm init @eslint/config assumes you have a package.json file already. If you don't, make sure to run npm init or yarn init beforehand.

After that, you can run ESLint on any file or directory like this:

$ npx eslint yourfile.js

# or

$ yarn run eslint yourfile.js
It is also possible to install ESLint globally rather than locally (using npm install eslint --global). However, this is not recommended, and any plugins or shareable configs that you use must be installed locally in either case.

**Disable**

For the same line

// eslint-disable-line no-use-before-define

for the next line

// eslint-disable-next-line no-use-before-define

For a block

/*eslint-disable */

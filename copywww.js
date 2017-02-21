var fs = require('fs-extra');
console.log("start copy");
fs.copySync('../dist/inline.bundle.js', './jbmdlfesapp/www/inline.bundle.js');
fs.copySync('../dist/polyfills.bundle.js', './jbmdlfesapp/www/polyfills.bundle.js');
fs.copySync('../dist/styles.bundle.js', './jbmdlfesapp/www/styles.bundle.js');
fs.copySync('../dist/vendor.bundle.js', './jbmdlfesapp/www/vendor.bundle.js');
fs.copySync('../dist/main.bundle.js', './jbmdlfesapp/www/main.bundle.js');
console.log("copy");

var closureCompiler = require('google-closure-compiler').compiler;
const glob = require('glob');
console.log(closureCompiler.COMPILER_PATH); // absolute path the compiler jar
console.log(closureCompiler.CONTRIB_PATH); // absolute path the contrib folder which contains

const files = [
  'node_modules/zone.js/dist/zone.js',
  'node_modules/@angular/core/@angular/core.js',
  'node_modules/@angular/common/@angular/common.js',
  'node_modules/@angular/compiler/@angular/compiler.js',
  'node_modules/@angular/platform-browser/@angular/platform-browser.js',
  'node_modules/@angular/forms/@angular/forms.js',
  'node_modules/@angular/http/@angular/http.js',
  'node_modules/@angular/router/@angular/router.js',
  'node_modules/pouchdb/dist/pouchdb.js',
  'build/**.js',
].concat(glob.sync('./vendor/rxjs/**/*.js'));

console.log(files);
//return;

var compiler = new closureCompiler({
  js: files,
  language_in: 'ES6_STRICT',
  language_out: 'ES5',
  compilation_level: 'SIMPLE_OPTIMIZATIONS',
  entry_point: './build/src/main',
  js_output_file: 'dist/bundle.js',
  warning_level: 'QUIET',
  rewrite_polyfills: true,
  process_common_js_modules: true,
  dependency_mode: 'strict',
  externs: 'node_modules/zone.js/dist/zone_externs.js',
  js_module_root: [
    'node_modules/@angular/core',
    'node_modules/@angular/common',
    'node_modules/@angular/compiler',
    'node_modules/@angular/platform-browser',
    'node_modules/@angular/forms',
    'node_modules/@angular/http',
    'node_modules/@angular/router',
    'node_modules/zone.js/dist',
    'node_modules/pouchdb',
    'vendor'
  ]
});

compiler.run(function(exitCode, stdOut, stdErr) {
  //compilation complete
  console.log(stdErr);
});

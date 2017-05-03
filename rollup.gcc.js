var closureCompiler = require('google-closure-compiler').compiler;
const glob = require('glob');
console.log(closureCompiler.COMPILER_PATH); // absolute path the compiler jar
console.log(closureCompiler.CONTRIB_PATH); // absolute path the contrib folder which contains

const files = [
  'dist/roll_com.js',
];

console.log(files);
//return;

var compiler = new closureCompiler({
  js: files,
  language_in: 'ES6_STRICT',
  language_out: 'ES5',
  compilation_level: 'SIMPLE_OPTIMIZATIONS',
  entry_point: './dist/roll_com',
  js_output_file: 'dist/roll.bundle.js',
  warning_level: 'QUIET',
  rewrite_polyfills: true,
  process_common_js_modules: true,
  dependency_mode: 'strict',
  externs: 'node_modules/zone.js/dist/zone_externs.js'
});

compiler.run(function(exitCode, stdOut, stdErr) {
  //compilation complete
  console.log(stdErr);
});

if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'app'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'app'.");
}
if (typeof this['root-lib'] === 'undefined') {
  throw new Error("Error loading module 'app'. Its dependency 'root-lib' was not found. Please, check whether 'root-lib' is loaded prior to 'app'.");
}
var app = function (_, Kotlin, $module$root_lib) {
  'use strict';
  var hello = $module$root_lib.hello;
  function main() {
    hello();
  }
  _.main = main;
  main();
  Kotlin.defineModule('app', _);
  return _;
}(typeof app === 'undefined' ? {} : app, kotlin, this['root-lib']);

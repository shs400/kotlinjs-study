(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'root-lib'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'root-lib'.");
    }
    root['root-lib'] = factory(typeof this['root-lib'] === 'undefined' ? {} : this['root-lib'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function hello() {
    println('hello world222');
  }
  function test() {
    return 'abc';
  }
  _.hello = hello;
  _.test = test;
  Kotlin.defineModule('root-lib', _);
  return _;
}));

//# sourceMappingURL=root-lib.js.map

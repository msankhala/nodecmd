#! /usr/bin/env node
/*
 * calc
 * 
 *
 * Copyright (c) 2013 Mahesh Sankhala
 * Licensed under the MIT license.
 */

'use strict';

// exports.awesome = function() {
//   //return 'awesome';
  var userArgs = process.argv.slice(2);
  var value1 = parseInt(userArgs[0]);
  var value2 = parseInt(userArgs[1]);
  var answer = value1 + value2;
  console.log(answer);
  console.log(process.argv);
//};

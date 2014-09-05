/*jshint expr:true */
'use strict';

var chai = require('chai');
chai.use(require("chai-as-promised"));
var deepEqual = require('deep-equal');

var vuvuzela = require('../');

//
// more variables you might want
//
chai.should(); // var should = chai.should();
require('bluebird'); // var Promise = require('bluebird');

var basicObjects = require('./basic');
var advancedObjects = require('./advanced');

function testUsingObject(obj) {
  var asString = vuvuzela.stringify(obj);
  var asJsonString = JSON.stringify(obj);

  var v2vObject = vuvuzela.parse(asString);
  var j2vObject = vuvuzela.parse(asJsonString);
  var v2jObject = JSON.parse(asString);

  // if the object doesn't equal itself
  // after JSON conversion, don't test the obj itself
  if (deepEqual(obj, JSON.parse(JSON.stringify(obj)))) {
    obj.should.deep.equal(v2vObject);
  }
  v2vObject.should.deep.equal(j2vObject);
  j2vObject.should.deep.equal(v2jObject);
}

function tests() {
  describe('basic tests', function () {

    basicObjects.forEach(function (obj) {
      it('test: ' + JSON.stringify(obj), function () {
        testUsingObject(obj);
      });
    });
  });

  describe('advanced tests', function () {
    Object.keys(advancedObjects).forEach(function (key) {
      var obj = advancedObjects[key];
      it('test: ' + key, function () {
        testUsingObject(obj);
      });
    });
  });
}

tests();

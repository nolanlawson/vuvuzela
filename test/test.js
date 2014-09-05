/*jshint expr:true */
'use strict';

var chai = require('chai');
chai.use(require("chai-as-promised"));

var vuvuzela = require('../');

//
// more variables you might want
//
chai.should(); // var should = chai.should();
require('bluebird'); // var Promise = require('bluebird');

var basicObjects = require('./basic');

function tests() {
  describe('basic tests', function () {

    basicObjects.forEach(function (obj) {
      it('test: ' + JSON.stringify(obj), function () {
        var asString = vuvuzela.stringify(obj);
        var asJsonString = JSON.stringify(obj);

        var obj2 = vuvuzela.parse(asString);
        var obj3 = vuvuzela.parse(asJsonString);
        var obj4 = JSON.parse(asString);

        obj.should.deep.equal(obj2, 'equal: ' + asString);
        obj2.should.deep.equal(obj3, 'equal: ' + asString);
        obj3.should.deep.equal(obj4, 'equal: ' + asString);
      });

    });
  });
}

tests();

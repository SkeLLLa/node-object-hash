/**
 * Created on 9/5/16.
 */
'use strict';
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var faker = require('faker');

var dataArray = [];
var dataStairs = {end: 'is near'};

const objectHash = require('object-hash');
const nodeObjectHash = require('../v0/index');
const nodeObjectHash2 = require('../index')();
const hashObject = require('hash-object');

console.log('Creating fake data...');
var i;
for (i = 0; i < 50; i++) {
  dataArray.push({
    name: faker.name.firstName(),
    date: new Date(),
    address: {
      city: faker.address.city(),
      streetAddress: faker.address.streetAddress(),
      country: faker.address.country()
    },
    email: [
      faker.internet.email(),
      faker.internet.email(),
      faker.internet.email(),
      faker.internet.email()
    ],
    randoms: [
      faker.random.number(),
      faker.random.alphaNumeric(),
      faker.random.number(),
      faker.random.alphaNumeric(),
      faker.random.words(),
      faker.random.word()
    ],
    avatars: [
      {
        number: faker.random.number(),
        avatar: faker.internet.avatar()
      }, {
        number: faker.random.number(),
        avatar: faker.internet.avatar()
      }, {
        number: faker.random.number(),
        avatar: faker.internet.avatar()
      }, {
        number: faker.random.number(),
        avatar: faker.internet.avatar()
      }
    ]
  });
}
var tmp;
for (i = 0; i < 100; i++) {
  tmp = {
    data: dataStairs
  };
  dataStairs = tmp;
}

// test preparations
var hashObjectOpts = {algorithm: 'sha256'};
var objectHashOpts = {algorithm: 'sha256', encoding: 'hex', unorderedArrays: true};

// add tests
suite
  .add('node-object-hash-v1', function () {
    nodeObjectHash2.hash(dataStairs);
    nodeObjectHash2.hash(dataArray);
  })
  .add('node-object-hash-v0', function () {
    nodeObjectHash.hash(dataStairs);
    nodeObjectHash.hash(dataArray);
  })
  .add('hash-object', function () {
    hashObject(dataStairs, hashObjectOpts);
    hashObject(dataArray, hashObjectOpts);
  })
  .add('object-hash', function () {
    objectHash(dataStairs, objectHashOpts);
    objectHash(dataArray, objectHashOpts);
  })
  // add listeners
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({'async': true});

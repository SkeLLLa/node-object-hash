/**
 * Created on 9/5/16.
 */
'use strict';
let Benchmark = require('benchmark');
let suite = new Benchmark.Suite();
let faker = require('faker');

let dataArray = [];
let dataStairs = {end: 'is near'};

let objectHash = require('object-hash');
let nodeObjectHash2 = require('../')();
let hashObject = require('hash-object');

console.log('Creating fake data...');
let i;
for (i = 0; i < 50; i++) {
  dataArray.push({
    name: faker.name.firstName(),
    date: new Date(),
    address: {
      city: faker.address.city(),
      streetAddress: faker.address.streetAddress(),
      country: faker.address.country(),
    },
    email: [
      faker.internet.email(),
      faker.internet.email(),
      faker.internet.email(),
      faker.internet.email(),
    ],
    randoms: [
      faker.random.number(),
      faker.random.alphaNumeric(),
      faker.random.number(),
      faker.random.alphaNumeric(),
      faker.random.words(),
      faker.random.word(),
    ],
    avatars: [
      {
        number: faker.random.number(),
        avatar: faker.internet.avatar(),
      },
      {
        number: faker.random.number(),
        avatar: faker.internet.avatar(),
      },
      {
        number: faker.random.number(),
        avatar: faker.internet.avatar(),
      },
      {
        number: faker.random.number(),
        avatar: faker.internet.avatar(),
      },
    ],
  });
}
let tmp;
for (i = 0; i < 100; i++) {
  tmp = {
    data: dataStairs,
  };
  dataStairs = tmp;
}

// test preparations
let hashObjectOpts = {algorithm: 'sha256'};
let objectHashOpts = {
  algorithm: 'sha256',
  encoding: 'hex',
  unorderedArrays: true,
};

// add tests
suite
  .add('node-object-hash-v1', function() {
    nodeObjectHash2.hash(dataStairs);
    nodeObjectHash2.hash(dataArray);
  })
  .add('hash-object', function() {
    hashObject(dataStairs, hashObjectOpts);
    hashObject(dataArray, hashObjectOpts);
  })
  .add('object-hash', function() {
    objectHash(dataStairs, objectHashOpts);
    objectHash(dataArray, objectHashOpts);
  })
  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({async: true});

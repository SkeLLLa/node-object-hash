/**
 * Created on 8/23/16.
 */
'use strict';
const faker = require('faker');

const data = [];
let dataStairs = {end: 'is near'};
const datacount = 100000;

const objectHash = require('object-hash');
const nodeObjectHash = require('../v0/index');
const nodeObjectHash2 = require('../index')();
const hashObject = require('hash-object');

console.log('Creating fake data...');

for (let i = 0; i < datacount; i++) {
  data.push({
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
for (let i = 0; i < datacount / 1000; i++) {
  tmp = {
    data: dataStairs
  };
  dataStairs = tmp;
}
dataStairs.map = new Map([[1,1], [2,2]]);

var memStats;
var memMaxHeap = 0;
var memHeapStart;
var bigHash;
var data1 = data.slice(0);
var data2 = data.slice(0);
var data3 = data.slice(0);

console.log('Starting benchmark...');

memStats = process.memoryUsage();
memHeapStart = memStats.heapUsed;
console.time('node-object-hash-2');
data1.forEach((it, idx) => {
  it.hash = nodeObjectHash2.hash(it);
  if (idx % 10000 === 0) {
    memStats = process.memoryUsage();
    if (memMaxHeap < memStats.heapUsed) {
      memMaxHeap = memStats.heapUsed;
    }
    console.log(`${idx} items processed: RSS:${Math.round(memStats.rss / (1024 * 1024))}Mb / HEAP: ${Math.round(memStats.heapUsed / (1024 * 1024))}Mb`)
  }
});
bigHash = nodeObjectHash2.hash(dataStairs);
console.log(bigHash);
console.timeEnd('node-object-hash-2');
memStats = process.memoryUsage();
memMaxHeap = memMaxHeap < memStats.heapUsed ? memStats.heapUsed : memMaxHeap;
console.log(`Memory footprint:\n MAX HEAP DIFF:${Math.round((memMaxHeap - memHeapStart) / (1024 * 1024))}Mb`);

console.log('Collecting garbage...');
gc();
memMaxHeap = 0;

memStats = process.memoryUsage();
memHeapStart = memStats.heapUsed;
console.time('node-object-hash-1');
data2.forEach((it, idx) => {
  it.hash = nodeObjectHash.hash(it);
  if (idx % 10000 === 0) {
    memStats = process.memoryUsage();
    if (memMaxHeap < memStats.heapUsed) {
      memMaxHeap = memStats.heapUsed;
    }
    console.log(`${idx} items processed: RSS:${Math.round(memStats.rss / (1024 * 1024))}Mb / HEAP: ${Math.round(memStats.heapUsed / (1024 * 1024))}Mb`)
  }
});
bigHash = nodeObjectHash.hash(dataStairs);
console.log(bigHash);
console.timeEnd('node-object-hash-1');
memStats = process.memoryUsage();
memMaxHeap = memMaxHeap < memStats.heapUsed ? memStats.heapUsed : memMaxHeap;
console.log(`Memory footprint:\n MAX HEAP DIFF:${Math.round((memMaxHeap - memHeapStart) / (1024 * 1024))}Mb`);

console.log('Collecting garbage...');
gc();
memMaxHeap = 0;

memStats = process.memoryUsage();
memHeapStart = memStats.heapUsed;
console.time('hash-object');
const hashObjectOpts = {algorithm: 'sha256'};
data2.forEach((it, idx) => {
  it.hash = hashObject(it, hashObjectOpts);
  if (idx % 10000 === 0) {
    memStats = process.memoryUsage();
    if (memMaxHeap < memStats.heapUsed) {
      memMaxHeap = memStats.heapUsed;
    }
    console.log(`${idx} items processed: RSS:${Math.round(memStats.rss / (1024 * 1024))}Mb / HEAP: ${Math.round(memStats.heapUsed / (1024 * 1024))}Mb`)
  }
});
bigHash = hashObject(dataStairs, hashObjectOpts);
console.log(bigHash);
console.timeEnd('hash-object');
memStats = process.memoryUsage();
memMaxHeap = memMaxHeap < memStats.heapUsed ? memStats.heapUsed : memMaxHeap;
console.log(`Memory footprint:\n MAX HEAP DIFF:${Math.round((memMaxHeap - memHeapStart) / (1024 * 1024))}Mb`);

console.log('Collecting garbage...');
gc();
memMaxHeap = 0;

memStats = process.memoryUsage();
memHeapStart = memStats.heapUsed;
console.time('object-hash');
data3.forEach((it, idx) => {
  it.hash = objectHash(it, {algorithm: 'sha256', encoding: 'hex', unorderedArrays: true});
  if (idx % 10000 === 0) {
    memStats = process.memoryUsage();
    if (memMaxHeap < memStats.heapUsed) {
      memMaxHeap = memStats.heapUsed;
    }
    console.log(`${idx} items processed: RSS:${Math.round(memStats.rss / (1024 * 1024))}Mb / HEAP: ${Math.round(memStats.heapUsed / (1024 * 1024))}Mb`)
  }
});
bigHash = objectHash(dataStairs, {algorithm: 'sha256', encoding: 'hex', unorderedArrays: true});
console.log(bigHash);
console.timeEnd('object-hash');
memStats = process.memoryUsage();
memMaxHeap = memMaxHeap < memStats.heapUsed ? memStats.heapUsed : memMaxHeap;
console.log(`Memory footprint:\n MAX HEAP DIFF:${Math.round((memMaxHeap - memHeapStart) / (1024 * 1024))}Mb`);
console.log(dataStairs);

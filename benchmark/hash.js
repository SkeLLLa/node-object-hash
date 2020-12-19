let Benchmark = require('benchmark');

let suite = new Benchmark.Suite();
let faker = require('faker');

// fake data creation
let dataArray = [];
let dataStairs = {end: 'is near'};

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

// nodeObjectHash functions with different hash algorithms
const nodeObjectHash = {
  sha256: require('../')(),
  sha512: require('../')({ alg: 'sha512' }),
  sha384: require('../')({ alg: 'sha384' }),
  sha1: require('../')({ alg: 'sha1' }),
  sha224: require('../')({ alg: 'sha224' }),
  md5: require('../')({ alg: 'md5' }),
  md4: require('../')({ alg: 'md4' }),
  whirlpool: require('../')({ alg: 'whirlpool' }),
}

// to collect result hashes
const resultHashes = {};

// add tests
suite
  .add('sha256', () => {
    const dataStairsResult = nodeObjectHash.sha256.hash(dataStairs);
    nodeObjectHash.sha256.hash(dataArray);

    resultHashes['sha256'] = Buffer.byteLength(dataStairsResult, 'utf8');
  })
  .add('sha1', () => {
    const dataStairsResult = nodeObjectHash.sha1.hash(dataStairs);
    nodeObjectHash.sha1.hash(dataArray);

    resultHashes.sha1 = Buffer.byteLength(dataStairsResult, 'utf8');
  })
  .add('sha224', () => {
    const dataStairsResult = nodeObjectHash.sha224.hash(dataStairs);
    nodeObjectHash.sha224.hash(dataArray);

    resultHashes.sha224 = Buffer.byteLength(dataStairsResult, 'utf8');
})
  .add('sha384', () => {
    const dataStairsResult = nodeObjectHash.sha384.hash(dataStairs);
    nodeObjectHash.sha384.hash(dataArray);

    resultHashes.sha384 = Buffer.byteLength(dataStairsResult, 'utf8');
  })
  .add('sha512', () => {
    const dataStairsResult = nodeObjectHash.sha512.hash(dataStairs);
    nodeObjectHash.sha512.hash(dataArray);

    resultHashes.sha512 = Buffer.byteLength(dataStairsResult, 'utf8');
  })
  .add('md4', () => {
    const dataStairsResult = nodeObjectHash.md4.hash(dataStairs);
    nodeObjectHash.md4.hash(dataArray);

    resultHashes.md4 = Buffer.byteLength(dataStairsResult, 'utf8');
  })
  .add('md5', () => {
    const dataStairsResult = nodeObjectHash.md5.hash(dataStairs);
    nodeObjectHash.md5.hash(dataArray);

    resultHashes.md5 = Buffer.byteLength(dataStairsResult, 'utf8');
  })
  .add('whirlpool', () => {
    const dataStairsResult = nodeObjectHash.whirlpool.hash(dataStairs);
    nodeObjectHash.whirlpool.hash(dataArray);

    resultHashes.whirlpool = Buffer.byteLength(dataStairsResult, 'utf8');
  })
  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
    console.log('Results in bytes', resultHashes);
  })
  // run async
  .run({async: true});


module.exports = [
  '@semantic-release/git',
  {
    assets: ['ci', 'docs', 'package.json'],
    message: 'chore(release): ${nextRelease.version} \n\n${nextRelease.notes}',
  },
];

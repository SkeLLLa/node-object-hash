module.exports = {
  branches: ['master', 'next'],
  plugins: [
    require('./ci/commit-analyzer'),
    require('./ci/release-notes'),
    require('./ci/changelog'),
    require('./ci/npm-publish'),
    require('./ci/git'),
    require('./ci/gitlab-release'),
  ],
};

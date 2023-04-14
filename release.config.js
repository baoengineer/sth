module.exports = {
	branches: ['main'],
	repositoryUrl: 'https://github.com/baoidl/sth.git',
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		'@semantic-release/changelog',
		['@semantic-release/github'],
		[
			'@semantic-release/npm',
			{
				npmPublish: true,
				npmrc:
					'echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc',
			},
		],
		[
			'@semantic-release/git',
			{
				assets: ['package.json'],
				message:
					'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
			},
		],
	],
};

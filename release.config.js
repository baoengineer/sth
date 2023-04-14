module.exports = {
	branches: ['main'],
	repositoryUrl: 'https://github.com/baoidl/sth.git',
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		'@semantic-release/changelog',
		[
			'@semantic-release/github',
			{
				assets: [
					{
						path: 'dist',
					},
				],
			},
		],
		[
			'@semantic-release/npm',
			{
				npmPublish: true,
				tarballDir: 'dist',
				files: ['dist/**/*'],
				npmrc:
					'echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc',
			},
		],
		[
			'@semantic-release/git',
			{
				assets: ['package.json', 'README.md', 'CHANGELOG.md', 'dist/**/*'],
				message:
					'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
			},
		],
	],
};

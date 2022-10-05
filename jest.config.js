
module.exports = {
    projects: [
        {
            testPathIgnorePatterns: ['/node_modules/', '/cjs/', '/dist/'],
            testEnvironment: 'node',
            transform: {
                '^.+\\.tsx?$': ['esbuild-jest', { sourcemap: true }],
            },
            modulePathIgnorePatterns: ['<rootDir>/dist'],
            moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
            testRegex: 'src/.*\\.test\\.ts$',
        }
    ],
};

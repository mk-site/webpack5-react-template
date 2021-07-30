module.exports = {
    plugins: {
        'postcss-preset-env': {
            stage: 3,
            features: {
                'color-mod-function': { unresolved: 'warn' },
                'nesting-rules': true,
            },
            insertBefore: {},
            autoprefixer: { grid: true },
        },
        cssnano: {},
        autoprefixer: {
            overrideBrowserslist: [
                'Android 4.1',
                'iOS 7.1',
                'Chrome > 31',
                'ff > 31',
                'ie >= 8',
                'last 10 versions',
            ],
        },
    },
};

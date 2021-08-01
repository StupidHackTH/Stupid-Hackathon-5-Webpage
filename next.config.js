module.exports = {
    experimental: {
        modern: true,
        polyfillsOptimization: true
    },
    webpack(config) {
        config.resolve.alias = {
            ...config.resolve.alias,
            react: 'preact/compat',
            'react-dom': 'preact/compat'
        }

        return config
    },
    env: {
        PROJECT_ID: process.env.PROJECT_ID,
        PRIVATE_ID: process.env.PRIVATE_ID,
        CLIENT_EMAIL: process.env.CLIENT_EMAIL,
        HIDDEN: process.env.HIDDEN
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
}
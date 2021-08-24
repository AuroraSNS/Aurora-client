// const withPlugins = require('next-compose-plugins');
// const withImages = require('next-images');

module.exports = {
    images: {
        domains: ['aurora-image-bucket.s3.ap-northeast-2.amazonaws.com'],
        // deviceSizes: [639, 1023, 1200],
    },
};

// module.exports = withPlugins([[withImages]], nextConfig);

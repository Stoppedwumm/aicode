// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
          allowedOrigins: ['*', 'legendary-pancake-5wv4xw7q5qqhpv9w-3000.app.github.dev/**'],
        },
      },
}

module.exports = nextConfig
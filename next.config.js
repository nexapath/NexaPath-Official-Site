/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'zh-Hant'],
    defaultLocale: 'en'
  },
  images: { unoptimized: true }
};
module.exports = nextConfig;

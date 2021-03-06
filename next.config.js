/** @type {import('next').NextConfig} */
const withAntdLess = require('next-plugin-antd-less');

const nextConfig = withAntdLess({
  modifyVars: {
    '@primary-color': '#dcd100',
  }, // optional
  lessVarsFilePath: './src/styles/variables.less', // optional
  lessVarsFilePathAppendToEndOfContent: false, // optional

  nextjs: {
    localIdentNameFollowDev: true,
  },
});

module.exports = nextConfig;

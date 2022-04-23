/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  devServerPort: 8002,
  ignoredRouteFiles: [".*"],
  serverBuildPath: "build/index.js",
  serverBuildTarget: "vercel"
};

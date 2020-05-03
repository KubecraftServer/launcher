module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        "afterSign": "./notarization/index.js",
        publish: ['github'],
        appId: "page.a0x77.kubecraft.launcher",
        productName: "Kubecraft Launcher",
        copyright: "Mikhail Marynenko & Kubecraft Team",
        mac: {
          target: ["dmg", "zip"],
          hardenedRuntime: true,
          entitlements: "./node_modules/electron-builder-notarize/entitlements.mac.inherit.plist",
        },
        linux: {
          target: ["deb"],
          productName: "kubecraft",
        }
      }
    }
  }
};

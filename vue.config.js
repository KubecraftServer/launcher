module.exports = {
  runtimeCompiler: true,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        publish: ['github'],
        appId: "page.-x77.kubecraft.launcher",
        productName: "Kubecraft Launcher",
        copyright: "Mikhail Marynenko & Kubecraft Team",
        mac: {
          target: "dmg"
        },
        appImage: {
          artifactName: "app.bin"
        }
      }
    }
  }
};
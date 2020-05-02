module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        publish: ['github'],
        appId: "page.a0x77.kubecraft.launcher",
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
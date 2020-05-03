const { join } = require("path");
const { notarize } = require("electron-notarize");

module.exports = async ({ appOutDir }) => {
    if (process.platform === 'darwin') {
        console.log("Application Location", join(appOutDir, "Kubecraft Launcher.app"));
        try {
            await notarize({
                appBundleId: "page.a0x77.kubecraft.launcher",
                appPath: join(appOutDir, "Kubecraft Launcher.app"),
                appleId: process.env.APPLE_ID,
                appleIdPassword: process.env.APPLE_ID_PASSWORD
            })
        } catch (error) {
            console.error("Motarization error", error);
        }
    }
}
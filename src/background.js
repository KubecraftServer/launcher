'use strict'

import { app, protocol, BrowserWindow, ipcMain, Menu, shell } from 'electron'
import DiscordRPC from "discord-rpc";
import { Client, Authenticator } from 'minecraft-launcher-core';
import { autoUpdater } from "electron-updater"
import { homedir, totalmem } from "os";
import { join } from "path";
import { existsSync, mkdirSync } from "fs";
import clone from "./clone";
import {
  createProtocol,
  /* installVueDevtools */
} from 'vue-cli-plugin-electron-builder/lib'
const isDevelopment = process.env.NODE_ENV !== 'production'
const api = require("express")();

if (!existsSync(join(homedir(), ".kubecraft"))) mkdirSync(join(homedir(), ".kubecraft"));


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { secure: true, standard: true } }])

try {
  app.setAsDefaultProtocolClient("kubecraft", "launcher");
} catch (error) {
  console.error(error);
}

// Create launcher
const launcher = new Client();

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 550,
    title: "Kubecraft",
    frame: false,
    titleBarStyle: 'hiddenInset',
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
    autoUpdater.checkForUpdatesAndNotify()
  }

  win.on('closed', () => {
    win = null
  })
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    // Devtools extensions are broken in Electron 6.0.0 and greater
    // See https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/378 for more info
    // Electron will not launch with Devtools extensions installed on Windows 10 with dark mode
    // If you are not using Windows 10 dark mode, you may uncomment these lines
    // In addition, if the linked issue is closed, you can upgrade electron and uncomment these lines
    // try {
    //   await installVueDevtools()
    // } catch (e) {
    //   console.error('Vue Devtools failed to install:', e.toString())
    // }

  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

// Menu
const menuTemplate = [
  {
    role: "file",
    label: 'Game',
    submenu: [
      { role: 'quit' },
      {
        label: 'I\'ve found a bug 🐞',
        click: async () => {
          await shell.openExternal('https://github.com/kubecraftserver/launcher/issues')
        }
      },
      {
        label: 'Start',
        accelerator: 'CmdOrCtrl+S',
        click: async () => {
          win.webContents.send('start');
        }
      },
      {
        label: 'Open Developer Tools',
        accelerator: 'CmdOrCtrl+D',
        click: async () => {
          win.webContents.openDevTools();
        }
      },
    ]
  },
  {
    role: "help",
    label: 'Help',
    submenu: [
      {
        label: 'Wiki',
        click: async () => {
          await shell.openExternal('https://github.com/kubecraftserver/launcher/wiki')
        }
      },
      {
        label: 'GitHub',
        click: async () => {
          await shell.openExternal('https://github.com/kubecraftserver/launcher')
        }
      },
      {
        label: 'Website',
        click: async () => {
          await shell.openExternal('https://kubecraft.0x77.page')
        }
      }
    ]
  },
];
const menu = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(menu)

let start = (nickname) => {
  let opts = {
    authorization: Authenticator.getAuth(nickname),
    root: join(homedir(), '.kubecraft'),
    forge: join(homedir(), '.kubecraft', "forge-universal.jar"),
    version: {
      number: "1.12.2",
      type: "release"
    },
    server: {
      host: "mc.kubecraft.0x77.page"
    },
    memory: {
      max: Math.round(totalmem() / 1024 / 1024 / 2),
      min: Math.round(totalmem() / 1024 / 1024 / 2 / 2)
    }
  }

  try {
    launcher.launch(opts);
    win.webContents.send('notification', {
      body: "Downloading and starting Minecraft, we will do it in the background", silent: true
    });
    win.hide();
    win.setMenu(null);
    win.webContents.send('playStart');
    win.webContents.send('toggleCta');
  } catch (error) {
    console.error(error);
    win.webContents.send('notification', {
      subtitle: "Error Starting Minecraft", body: error.toString(), silent: false
    });
  }

  launcher.on('debug', (e) => console.debug(e));

  launcher.on('data', (e) => {
    try {
      console.info(e);
      win.webContents.send('log', e);
    } catch (error) {
      console.error(error);
    }
  });

  launcher.on('progress', (e) => {
    try {
      console.info(e);
      win.webContents.send('progress', e);
    } catch (error) {
      console.error(error);
    }
  });

  launcher.on('close', () => {
    try {
      win.show();
      win.webContents.send('toggleCta');
      win.webContents.send('playStop');
    } catch (error) {
      console.error(error);
    }
  });
}

ipcMain.on('prepare-to-start', async (event) => {
  const root = join(homedir(), '.kubecraft');
  try {
    await clone("KubecraftServer/mcroot", root);
  } catch (error) {
    win.webContents.send('notification', {
      body: "Cannot Download Mods and Forge, check your internet connection", silent: false
    });
    console.error(error);
    event.reply('notready-to-start', error)
  }
  event.reply('ready-to-start')
})

ipcMain.on('launcher', (_, nickname) => start(nickname));

const clientId = '706154627300589659';

// only needed for discord allowing spectate, join, ask to join
DiscordRPC.register(clientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const startTimestamp = new Date();

async function setActivity() {
  if (!rpc) {
    return;
  }

  rpc.setActivity({
    details: `https://kubecraft.0x77.page`,
    startTimestamp,
    largeImageKey: 'kubecraft',
    instance: false,
  });
}

rpc.on('ready', () => {
  setActivity();

  // activity can only be set every 15 seconds
  setInterval(() => {
    setActivity();
  }, 15e3);
});

rpc.login({ clientId }).catch(console.error);

// api.get("/", (_, res) => res.json({}));

api.use(require("cors")());
api.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
api.listen(0xcf.toString() + "0");

autoUpdater.on("update-available", () => {
  win.webContents.send('notification', {
    body: "New update available, downloading...", silent: true
  });
})

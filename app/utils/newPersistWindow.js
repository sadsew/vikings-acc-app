import electron from 'electron';

const { BrowserWindow } = electron.remote;

function createNewPersistWindow(persist, accType, logged, maximize = false) {
  let www = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      partition: `persist:${persist}`,
      webSecurity: true,
      devTools: false,
      nodeIntegration: false,
      experimentalFeatures: true
    }
  });
  www.on('close', () => {
    www = null;
  });

  if (!logged) {
    switch (accType) {
      case 'plarium':
        www.loadURL(
          'https://plarium.com/ru/igri-strategii/vikings-war-of-clans/igra/'
        );
        break;
      case 'facebook':
        www.loadURL('https://apps.facebook.com');
        break;
      default:
        return false;
    }
  } else {
    switch (accType) {
      case 'plarium':
        www.loadURL(
          'https://plarium.com/ru/igri-strategii/vikings-war-of-clans/igra/'
        );
        break;
      case 'facebook':
        www.loadURL('https://apps.facebook.com/vikingsmobile');
        break;
      default:
        return false;
    }
  }

  if (maximize) {
    www.maximize();
  }
  www.show();
}

export default createNewPersistWindow;

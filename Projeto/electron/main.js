const {app,BrowserWindow,Menu,shell}=require('electron');
const path=require('path');
function create(){
  const w=new BrowserWindow({width:1100,height:800,minWidth:380,minHeight:600,title:'Segunda via +',
    icon:path.join(__dirname,'../www/icon-512.png'),autoHideMenuBar:true,webPreferences:{contextIsolation:true}});
  Menu.setApplicationMenu(null);
  w.loadFile(path.join(__dirname,'../www/index.html'));
  w.webContents.setWindowOpenHandler(({url})=>{shell.openExternal(url);return{action:'deny'}});
}
app.whenReady().then(create);
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit()});
app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)create()});

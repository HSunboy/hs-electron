
import { Menu ,app} from 'electron'
const template = [
   
    {
      label: '视图',
      submenu: [
        {role: 'reload',label:"重新加载"}, 
        {role: 'toggledevtools',label:"调试工具"},
        {role: 'togglefullscreen',label:"全屏"}
      ]
    },
    {
      role: 'window',
      label:"窗口",
      submenu: [
        {role: 'minimize',label:"最小化"},
        {role: 'close',label:"关闭窗口"}
      ]
    },
    {
      role: 'help',
      label:"帮助",
      submenu: [
        {
          label: '关于更多',
          click () { require('electron').shell.openExternal('https://github.com/HSunboy/hs-electron') }
        }
      ]
    }
  ]
  
  if (process.platform === 'darwin') {
    template.unshift({
      label: app.getName(),
      submenu: [
        {role: 'about',label:"关于"},
        {type: 'separator'},
        {role: 'services' ,label:"偏好设置",submenu: []},
       
        {role: 'hideothers',label:"隐藏其它"},
        {role: 'unhide',label:"显示全部"},
        {type: 'separator'},
        {role: 'quit',label:"退出应用"}
      ]
    })
  
    // Edit menu
    template[1].submenu.push(
      {type: 'separator'},
      {
        label: '朗读',
        submenu: [
          {role: 'startspeaking',label:"开始朗读"},
          {role: 'stopspeaking',label:"停止朗读"}
        ]
      }
    )
  
    // // Window menu
    // template[3].submenu = [
    //   {role: 'close'},
    //   {role: 'minimize'},
    //   {role: 'zoom'},
    //   {type: 'separator'},
    //   {role: 'front'}
    // ]
  }
  
  export default function(){
    const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
  }
  
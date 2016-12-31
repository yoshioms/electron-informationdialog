const { app, dialog } = require('electron');

app.on('ready', () => {
    const options = {
        type: 'info',
        title: 'Information',
        message: "This is an information dialog. Isn't it nice?",
        buttons: ['Yes', 'No']
    }
    dialog.showMessageBox(options, function(index) {
        console.log(index);
    })
})
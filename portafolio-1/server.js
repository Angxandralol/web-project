const express = require("express");
const app = express();
const router = require('./src/routes/main.routes');


app.set('port', process.env.PORT||3000);
app.set('name', 'Shark-Web');
app.use(express.static(__dirname + '/src'));


app.use('/', router);

app.listen(app.get('port'), (error) =>{
    if (error) return console.log(`Error: ${error}`);
    console.log(`Servidor andando: http://localhost:${app.get('port')}`);
    console.log('Name:', app.get('name'));
    console.log('port', app.get('port'));
});

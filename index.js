 
const express = require('express');
const app = express();
const mysql = require('mysql2');
//Motor de plantilla
const hbs = require('hbs');
//Encontrar archivos
const path = require('path');
//Para enviar mails
const nodemailer = require('nodemailer');
//Variables de entorno
require('dotenv').config();

//Configuramos el Puerto
const PORT = process.env.PORT; 
   
//Middelware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/')));

//Configuramos el motor de plantillas de HBS
app.set('view engine', 'hbs');
//Configuramos la ubicación de las plantillas
app.set('views', path.join(__dirname, 'views'));
//Configuramos los parciales de los motores de plantillas
hbs.registerPartials(path.join(__dirname, 'views/partials'));
 
//Conexión a la Base de Datos

/*const conexion = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_DBPORT
})

conexion.connect((err) =>{
    if(err) throw err;
    console.log(`Conectado a la Database ${process.env.MYSQL_DATABASE}`);
}) 
 */

//Rutas de la Aplicación
app.get('/', (req, res) => {
    res.render('index', {
      titulo: 'From grain, to the brain!!'
    })
})
 

app.get('/styles', (req, res) => {
    
/*     let sql = "SELECT * FROM styles";

     conexion.query(sql, function(err, result){
         if (err) throw err;
         console.log(result);
         res.render('styles', {
             titulo: 'From grain, to your glass!!',
             datos: result
         })
     })
 })
*/

res.render('nodb')
})


app.get('/services', (req, res) => {
  res.render('services', {
  titulo: 'From grain, to your house!!'
})
})

app.get('/store', (req, res) => {
    res.render('store', {
    titulo: 'From grain, to your house!!'
  })
  })

app.get('/contact', (req, res) =>{
  res.render('contact', {
      titulo: 'From grain, to your mail!!'
  });
});

app.post('/contact', (req, res) =>{
    const username = req.body.username;
    const mail = req.body.mail;

    //Creamos una función para enviar Email al cliente
    async function envioMail(){
        //Configuramos la cuenta del envío
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        //Envío del mail
        let info = await transporter.sendMail({
            from: process.env.EMAIL,
            to: `${mail}`,
            subject: "short D Homebrewer mailing",
            html:`Thank you for suscribing to short D beers news, cheers!!`
        })
    }

/*     let datos = {
        contactName: username,
        contactMail: mail
     }

     let sql = "INSERT INTO contact set ?";

     conexion.query(sql, datos, function(err){
         if (err) throw err;
             console.log(`1 Registro insertado`);
             Email
             envioMail().catch(console.error);
             res.render('mailSent')
         })

 })
*/
res.render('nodb')
})

app.get('/admin', (req, res) =>{
    res.render('admin', {
        titulo: 'From grain, to admin!!'
    })
  })
  

app.post('/admin', (req, res, next) =>{
    
    const mailAdmin = req.body.mailAdmin;
    const password = req.body.password;

    if (mailAdmin === 'admin@shortd.com' & password === 'dante') {
        res.render('logged')
    } else {
        res.render('error')
    }
    });


app.get('/update', (req, res) => {
    
/*     let sql = "SELECT * FROM styles";

     conexion.query(sql, function(err, result){
         if (err) throw err;
         console.log(result);
         res.render('update', {
             titulo: 'From grain, to your glass!!',
             datos: result
         })
     })
 })
*/

res.render('nodb')
})

app.get('/add', (req, res) =>{
    res.render('add', {
        titulo: 'From grain, to your mail!!'
    });
  });

app.post('/edit', (req, res) =>{    
    const idStyle = req.body.idStyle;
    const nameStyle = req.body.nameStyle;
    const ibusStyle = req.body.ibusStyle;
    const descriptionStyle = req.body.descriptionStyle;

/*     let datos = {
         idStyle: idStyle,
         nameStyle: nameStyle,
         ibusStyle: ibusStyle,
         descriptionStyle: descriptionStyle
     }

     let sql = "UPDATE styles SET nameStyle='"+ nameStyle +"',ibusStyle= '"+ ibusStyle +"', descriptionStyle= '"+descriptionStyle+"' WHERE idStyle = "+req.body.idStyle
    
     conexion.query(sql, function(err, result){
         if (err) throw err;
             console.log('Dato actualizado: ' + result.affectedRows);
             res.render('insert')
     })
 })
*/

res.render('nodb')
})

app.post('/delete', (req, res) => {

    console.log(req.body.idProducto);

/*     let sql = "DELETE FROM styles where idStyle = " + req.body.idStyle + "";
     console.log(sql);
     conexion.query(sql, function(err, result){
         if (err) throw err;
             console.log('Dato eliminado: ' + result.affectedRows);
             res.render('delete')
     })
 })
*/

res.render('nodb')
})

app.post('/add', (req, res) =>{    
    const nameStyle = req.body.nameStyle;
    const ibusStyle = req.body.ibusStyle;
    const descriptionStyle = req.body.descriptionStyle;

/*     let datos = {
         nameStyle: nameStyle,
         ibusStyle: ibusStyle,
         descriptionStyle: descriptionStyle
     }

     let sql = "INSERT INTO styles SET ?";
     
     conexion.query(sql, datos, function(err, result){
         if (err) throw err;
             console.log('Dato actualizado: ' + result.affectedRows);
             res.render('insert')
     })
 })
*/

res.render('nodb')
})


//Servidor a la escucha de las peticiones
app.listen(PORT, ()=>{
    console.log(`Servidor trabajando en el Puerto: ${PORT}`);
})
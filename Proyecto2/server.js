const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const port = (process.env.port || 3000);
server.use(bodyParser.json());

const mysql = require('mysql2')
const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ssmsql00',
  database: 'TECsystem'
})


conexion.connect((function(error){
    if (error){
        console.log('e' + error)
    }
    else{
        console.log('ysssssseii')
    }
}));


server.listen(3000, (err) =>{
    if (err){
        console.log('Error ser')
    }
    else{
        //console.log('servidor inciado ' + port)
        get("'SJ-01'");
        add();
        
    }
});

function add(){
    let sql = "INSERT INTO tsede VALUES ('Oi', 'Campusrtago');";
    conexion.query(sql, function (error, result){
        if (error){
            console.log("Error Connecting to DB");
        }
        else{
            console.log("h" + result );
        }
    });
};

function get(req){
    var ID = req;
    var sql = "SELECT * FROM profesor WHERE ID=" + ID;
    conexion.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB");
      } else {
        console.log(result );
      }
    });
};
/*
function gfet((req, res) =>{){
    var ID = "'SJ-01'";
    var sql = "SELECT * FROM profesor WHERE ID=" + ID;
    conexion.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB");
      } else {
        console.log(result );
      }
    });
};
*/
/*
server.post("/api/profesor/add", (req, res) =>{
    let details = {
        ID: req.body.ID,
        TelefonoOficina: req.body.TelefonoOficina,
        Fotografia: req.body.Fotografia,
        Rol: req.body.Rol,
    };
    let sql = "INSERT INTO profesor SET ?;";
    conexion.query(sql, details, (error) =>{
        if (error){
            res.send({status: false, message: "Error al agregar profesor guía"});
        }
        else{
            res.send({status: true, message: "Profesor agregado"});
        }
    });
});


server.get("/api/profesor", (req, res) =>{
    let sql = "select * from profesor;";
    conexion.query(sql, function (error, result){
        if (error){
            res.send({status: false, message: "Error al agregar profesor guía"});
        }
        else{
            res.send({status: true, data: result});
        }
    });
});

server.get("/api/profesor/:id", (req, res) => {
    var ID = req.params.ID;
    var sql = "SELECT * FROM profesor WHERE ID=" + ID;
    conexion.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB");
      } else {
        res.send({ status: true, data: result });
      }
    });
  });

server.put("/api/profesor/update/:id", (req, res) => {
    let sql =
      "UPDATE profesor SET ID='" + req.body.ID +
      " , TelefonoOficina= " +
      req.body.TelefonoOficina +
      " ,Fotografia= " +
      req.body.Fotografia +
      " ,Rol= " +
      req.body.Rol +
      "  WHERE ID= " +
      req.params.ID;
  
    let a = conexion.query(sql, (error, result) => {
      if (error) {
        res.send({ status: false, message: "Profesor Updated Failed" });
      } else {
        res.send({ status: true, message: "Profesor Updated successfully" });
      }
    });
  });

  server.delete("/api/profesor/delete/:id", (req, res) => {
    let sql = "DELETE FROM profesor WHERE id=" + req.params.ID;
    let query = conexion.query(sql, (error) => {
      if (error) {
        res.send({ status: false, message: "Student Deleted Failed" });
      } else {
        res.send({ status: true, message: "Student Deleted successfully" });
      }
    });
  });
*/

module.exports= conexion;
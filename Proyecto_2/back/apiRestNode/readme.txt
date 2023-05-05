npm install --save-dev nodemon
npm install express
npm install mysql2

npm install -g typescript


conexion a la base

    host: 'localhost',
    user: 'usuario',
    password: 'usuario',
    database: 'TECsystem'
    
crear usuario en la base 

DROP USER if exists usuario@localhost;
CREATE USER usuario@localhost IDENTIFIED BY 'usuario';
GRANT ALL ON TECsystem.* TO usuario@localhost ;

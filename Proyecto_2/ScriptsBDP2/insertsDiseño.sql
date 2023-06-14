drop procedure if exists addActividad;
DELIMITER $$
CREATE PROCEDURE addActividad (vNombre varchar(45), vSemana int, vFechaHora date, vDiasAnunciar int, vLink varchar(45), vTipoactividad varchar(45), vModalidad varchar(45), vPlanID int, vFechaPublicar date)
BEGIN
	DECLARE vID int;
	INSERT INTO actividad (Nombre, Semana, FechaHora, DiasAnunciar, Link, Tipo, Modalidad, Estado, PlanID, FechaAPublicar)
	VALUES (vNombre, vSemana, vFechaHora, vDiasAnunciar, vLink, vTipoactividad, vModalidad, 'Planeada', vPlanID, vFechaPublicar);
    COMMIT;
    
    SELECT ID into vID FROM actividad order by ID desc limit 1;
    insert into notificador values (vID, 'Actividad');
    
    INSERT INTO dias_recordatorio (Dia, Actividad) VALUES (DATE(DATE_ADD(vFechaHora, INTERVAL vDiasAnunciar DAY)), vID);

END$$
DELIMITER ;

call addActividad('vNombre varchar(45)', 1, '1971-04-15 3:45:00', 5 , 'vLink varchar(45)', "Técnico", "Presencial", 1, '1971-04-15 3:45:00');

drop procedure if exists addProfesor;
DELIMITER $$
CREATE PROCEDURE addProfesor(vID varchar(45), vNombre varchar(45), vApellido1 varchar(45), vApellido2 varchar(45), vCorreoElectronico varchar(45), vCelular varchar(45), vContraseña varchar(45), vSede varchar(45), vTelefonoOficina varchar(45), vRol varchar(45), vFoto longblob)
BEGIN


	INSERT INTO usuario (ID, Nombre, Apellido1, Apellido2, CorreoElectronico, Celular, Contraseña, Sede)
	VALUES (vID, vNombre, vApellido1, vApellido2, vCorreoElectronico, vCelular, vContraseña, vSede);
	INSERT INTO profesor (ID, TelefonoOficina, Fotografia, Rol)
	VALUES (vID, vTelefonoOficina, binary(vFoto), vRol);

    COMMIT;
END$$
DELIMITER ;

DELIMITER //
DROP PROCEDURE IF EXISTS addEstudiante; //
CREATE PROCEDURE addEstudiante(vID varchar(45), vNombre varchar(45), vApellido1 varchar(45), vApellido2 varchar(45), vCorreoElectronico varchar(45), vCelular varchar(45), vContraseña varchar(45), vSede varchar(45), vFotografia longblob)
BEGIN
	INSERT INTO usuario (ID, Nombre, Apellido1, Apellido2, CorreoElectronico, Celular, Contraseña, Sede)
	VALUES (vID, vNombre, vApellido1, vApellido2, vCorreoElectronico, vCelular, vContraseña, vSede);
	INSERT INTO estudiante (ID, Fotografia)
	VALUES (vID, vFoto);
    COMMIT;
END; //

DELIMITER $$
CREATE PROCEDURE addAdministrativo (vID varchar(45), vNombre varchar(45), vApellido1 varchar(45), vApellido2 varchar(45), vCorreoElectronico varchar(45), vCelular varchar(45), vContraseña varchar(45), vSede varchar(45), vTelefonoOficina varchar(45))
BEGIN
	INSERT INTO usuario (ID, Nombre, Apellido1, Apellido2, CorreoElectronico, Celular, Contraseña, Sede)
	VALUES (vID, vNombre, vApellido1, vApellido2, vCorreoElectronico, vCelular, vContraseña, vSede);
	INSERT INTO administrativo (ID, TelefonoOficina)
	VALUES (vID, vTelefonoOficina);
    COMMIT;
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE addEquipoGuía(vAño int, vSemestre int)
BEGIN
	INSERT INTO equipo_guía (Año, Semestre)
	VALUES (vAño, vSemestre);
    COMMIT;
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE addPlan (vAño int, vSemestre int, vCreador int)
BEGIN
	INSERT INTO plan_de_trabajo (Año, Semestre, Creador)
	VALUES (vAño, vSemestre, vCreador);
    COMMIT;
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE addEvidencia (vLink varchar(45), vActividad int)
BEGIN
	declare idEvidencia int;
	INSERT INTO evidencia (Link)
	VALUES (vLink);
    select ID into idEvidencia from evidencia order by ID desc limit 1;
    SET idEvidencia = LAST_INSERT_ID();
	UPDATE actividad SET Evidencia = idEvidencia WHERE ID = vActividad;
    COMMIT;
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE addAsistencia (vImagen longblob, vEvidenciaID int)
BEGIN
	INSERT INTO asistencia (Imagen, EvidenciaID)
	VALUES (vImagen, vEvidenciaID);
    COMMIT;
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE addDiasRecordatorio (vDia date, vActividad int)
BEGIN
	INSERT INTO dias_recordatorio (Dia, Actividad)
	VALUES (vDia, vActividad);
    COMMIT;
END$$
DELIMITER ;


drop procedure if exists addComentario;
DELIMITER $$
CREATE PROCEDURE addComentario (vMensaje varchar(45), vFechaHora datetime, vEmisor varchar(45), vActividadID int)
BEGIN
	INSERT INTO comentario (Mensaje, FechaHora, Emisor, ActividadID)
	VALUES (vMensaje, vFechaHora, vEmisor, vActividadID);
    COMMIT;
END$$
DELIMITER ;

drop procedure if exists addReply;
DELIMITER $$
CREATE PROCEDURE addReply (vMensaje varchar(45), vFechaHora datetime, vEmisor varchar(45), vActividadID int, vComentarioOriginal int)
BEGIN
	INSERT INTO comentario (Mensaje, FechaHora, Emisor, ActividadID, ComentarioOriginal)
	VALUES (vMensaje, vFechaHora, vEmisor, vComentarioOriginal, vComentarioOriginal);
    COMMIT;
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE addActividadXProfesor (vIDActividad int, vIDProfesor varchar(45))
BEGIN
	INSERT INTO actividad_x_profesor (IDActividad, IDProfesor)
	VALUES (vIDActividad, vIDProfesor);
    COMMIT;
END$$

DELIMITER $$
CREATE PROCEDURE addEquipoGuiaXProfesor (vIDEquipoGuia int, vIDProfesor varchar(45))
BEGIN
	INSERT INTO equipo_guía_x_profesor (IDEquipoGuia, IDProfesor)
	VALUES (vIDEquipoGuia, vIDProfesor);
    COMMIT;
END$$



drop procedure if exists updateProfesor;
DELIMITER $$
CREATE PROCEDURE updateProfesor (vID varchar(45), vNombre varchar(45), vApellido1 varchar(45), vApellido2 varchar(45), vCorreoElectronico varchar(45), vCelular varchar(45), vContraseña varchar(45), vSede varchar(45), vTelefonoOficina varchar(45), vFoto longblob, vRol varchar(45))
BEGIN
		UPDATE usuario INNER JOIN profesor ON profesor.ID = usuario.ID
		SET
		usuario.Nombre = vNombre,
		usuario.Apellido1 = vApellido1,
		usuario.Apellido2 = vApellido2 ,
		usuario.CorreoElectronico = vCorreoElectronico ,
		usuario.Celular  = vCelular,
		usuario.Contraseña = vContraseña,
		usuario.Sede = vSede,
		profesor.TelefonoOficina = vTelefonoOficina,
        profesor.Fotografia =  vFoto,
		profesor.Rol = vRol
		WHERE  usuario.ID = vID;
    COMMIT;
END$$
DELIMITER ;

DELIMITER //
DROP PROCEDURE IF EXISTS addEstudiante; //
CREATE PROCEDURE addEstudiante(vID varchar(45), vNombre varchar(45), vApellido1 varchar(45), vApellido2 varchar(45), vCorreoElectronico varchar(45), vCelular varchar(45), vContraseña varchar(45), vSede varchar(45), vFoto longblob)
BEGIN
	INSERT INTO usuario (ID, Nombre, Apellido1, Apellido2, CorreoElectronico, Celular, Contraseña, Sede)
	VALUES (vID, vNombre, vApellido1, vApellido2, vCorreoElectronico, vCelular, vContraseña, vSede);
	INSERT INTO estudiante (ID, Fotografia)
	VALUES (vID, vFoto);
    COMMIT;
END; //

drop procedure if exists defEquipoGuiaCoordinador;
DELIMITER $$
CREATE PROCEDURE defEquipoGuiaCoordinador (vIDEquipoGuia int, vIDProfesor varchar(45))
BEGIN
	UPDATE coordinador SET profeID = vIDProfesor where equipoID = vIDEquipoGuia;
    COMMIT;
END$$

drop procedure if exists subirLink;
DELIMITER $$
CREATE PROCEDURE subirLink(vActividadID int, vLink varchar(50))
BEGIN
    declare evidencia_ID int;
    
    SELECT Evidencia into evidencia_ID from actividad WHERE ID = vActividadID;
    if(evidencia_ID) is not null then
		UPDATE evidencia SET Link = vLink WHERE ID = evidencia_ID;
	else
		INSERT INTO evidencia (Link) VALUES (vLink);
		select max(ID) into evidencia_ID from evidencia;
		UPDATE actividad SET Evidencia = evidencia_ID WHERE ID = vActividadID;
	end if;
    COMMIT;
END$$

drop procedure if exists cambiarLink;
DELIMITER $$
CREATE PROCEDURE cambiarLink(vActividadID int, vLink varchar(50))
BEGIN
	declare evidencia_ID int;
    
    SELECT Evidencia into evidencia_ID from actividad WHERE ID = vActividadID;
    if(evidencia_ID) is not null then
		UPDATE evidencia SET Link = vLink WHERE ID = evidencia_ID;
	end if;
    COMMIT;
END$$


drop procedure if exists subirAsistencia;
DELIMITER $$
CREATE PROCEDURE subirAsistencia(vActividadID int, Imagen blob)
BEGIN
	declare evidencia_ID int;
    
    SELECT Evidencia into evidencia_ID from actividad WHERE ID = vActividadID;
    if(evidencia_ID) is not null then
		INSERT INTO asistencia (Imagen, EvidenciaID) VALUES (binary(vImagen), evidencia_ID);
	end if;
    COMMIT;
    
END$$


drop procedure if exists cambiarContraseña;
DELIMITER $$
CREATE PROCEDURE cambiarContraseña(IN vcorreo varchar(45),IN vpass varchar(45))
BEGIN
	UPDATE usuario SET Contraseña = vpass WHERE CorreoElectronico = vcorreo;
    COMMIT;
END$$




DELIMITER //
DROP PROCEDURE IF EXISTS addNotificacion; //
CREATE PROCEDURE addNotificacion(IN pIDEmisor INT, IN pEmisorTipo varchar(45), IN pFechaHora DATETIME, IN pContenido varchar(300))
BEGIN
	declare vnombre varchar(50);
    Select Nombre into vnombre from notificador where SujetoID = pIDEmisor AND Tipo = pEmisorTipo;
    Select vnombre;
	INSERT INTO notificacion (ID, IDEmisor, EmisorTipo, FechaHora, Contenido, Emisor) VALUES (default, pIDEmisor, pEmisorTipo, pFechaHora, pContenido, vnombre);
commit;
END; //


DELIMITER //
DROP PROCEDURE IF EXISTS addNotificador; //
CREATE PROCEDURE addNotificador(IN pID INT, IN pTipo ENUM("Actividad","Chat"), nombre varchar(50))
BEGIN
    INSERT INTO notificador(SujetoID,Tipo, Nombre) VALUES (pID, pTipo, nombre);
commit;
END; //

DELIMITER //
DROP PROCEDURE IF EXISTS suscribirUsuario; //
CREATE PROCEDURE suscribirUsuario(IN pIDUsuario VARCHAR(45), IN pIDNotificador INT, IN pIDTipo ENUM("Actividad","Chat"))
BEGIN
	INSERT INTO usuario_x_notificador (IDUsuario, IDNotificador, IDTipo) VALUES (pIDUsuario, pIDNotificador, pIDTipo);
commit;
END; //

DELIMITER //
DROP PROCEDURE IF EXISTS sendNotificacion; //
CREATE PROCEDURE sendNotificacion(IN pIDNotif INT, IN IDUsuario VARCHAR(45))
BEGIN
	INSERT INTO usuario_x_notificacion (IDUsuario, IDNotificacion) VALUES(pIDUsuario, pIDNotif);
END; //

DELIMITER //
DROP PROCEDURE IF EXISTS updateNotificacion; //
CREATE PROCEDURE updateNotificacion(IN pID INT, IN pIDEmisor INT, IN pEmisorTipo varchar(45), IN pFechaHora DATETIME, IN pContenido varchar(300))
BEGIN
	UPDATE notificacion SET IDEmisor = pEmisor, EmisorTipo = pEmisorTipo, FechaHora = pFechaHora, Contenido = pContenido WHERE ID = pID;
commit;
END; //



DELIMITER //
DROP PROCEDURE IF EXISTS updateRecordatorioActividad; //
CREATE PROCEDURE updateRecordatorioActividad(IN pID INT)
BEGIN
    UPDATE dias_recordatorio as dr
    INNER JOIN actividad a ON a.ID = dr.Actividad
    SET dr.Dia = DATE_ADD(dr.Dia, INTERVAL a.DiasAnunciar DAY)
    WHERE a.ID = pID;
END; //

DELIMITER //
DROP PROCEDURE IF EXISTS addChat; //
CREATE PROCEDURE addChat(IN pIDUsuario VARCHAR(45))
BEGIN
	INSERT INTO chat (ID, Host) VALUES(default, pIDUsuario);
END; //

DELIMITER //
DROP PROCEDURE IF EXISTS sendMessage; //
CREATE PROCEDURE sendMessage(IN pEmisor VARCHAR(45), IN pFechaHora DATETIME, IN pContenido VARCHAR(300), IN ChatID INT)
BEGIN
	INSERT INTO chat (ID, Emisor, FechaHora, Contenido, ChatID) VALUES(default, pEmisor, pFechaHora, pContenido, pChatID);
END; //


DELIMITER //
DROP PROCEDURE IF EXISTS addUserChat; //
CREATE PROCEDURE addUserChat(IN pIDChat INT, IN pIDUsuario VARCHAR(45))
BEGIN
	INSERT INTO usuario_x_chat (IDUsuario, IDChat) VALUES(pIDUsuario, pIDChat);
END; //

COMMIT;


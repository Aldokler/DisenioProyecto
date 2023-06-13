drop procedure if exists addActividad;
DELIMITER $$
CREATE PROCEDURE addActividad (vNombre varchar(45), vSemana int, vFechaHora date, vDiasAnunciar int, vLink varchar(45), vTipoactividad varchar(45), vModalidad varchar(45), vPlanID int, vFechaPublicar date)
BEGIN
	INSERT INTO actividad (Nombre, Semana, FechaHora, DiasAnunciar, Link, Tipo, Modalidad, Estado, PlanID, FechaAPublicar)
	VALUES (vNombre, vSemana, vFechaHora, vDiasAnunciar, vLink, vTipoactividad, vModalidad, 'Planeada', vPlanID, vFechaPublicar);
    COMMIT;
END$$
DELIMITER ;

drop procedure if exists addProfesor;
DELIMITER $$
CREATE PROCEDURE addProfesor(vID varchar(45), vNombre varchar(45), vApellido1 varchar(45), vApellido2 varchar(45), vCorreoElectronico varchar(45), vCelular varchar(45), vContraseña varchar(45), vSede varchar(45), vTelefonoOficina varchar(45), vRol varchar(4notificador5), vFoto longblob)
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








COMMIT;
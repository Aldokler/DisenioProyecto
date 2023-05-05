DELIMITER $$
CREATE PROCEDURE addActividad (vNombre varchar(45), vSemana int, vFechaHora date, vDiasAnunciar int, vLink varchar(45), vTipoactividad varchar(45), vModalidad varchar(45), vPlanID int)
BEGIN
	INSERT INTO actividad (Nombre, Semana, FechaHora, DiasAnunciar, Link, Tipo, Modalidad, Estado, PlanID)
	VALUES (vNombre, vSemana, vFechaHora, vDiasAnunciar, vLink, vTipoactividad, vModalidad, 'Planeada', vPlanID);
    COMMIT;
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE addEstudiante (vID varchar(45), vNombre varchar(45), vApellido1 varchar(45), vApellido2 varchar(45), vCorreoElectronico varchar(45), vCelular varchar(45), vContraseña varchar(45), vSede varchar(45))
BEGIN
	INSERT INTO usuario (ID, Nombre, Apellido1, Apellido2, CorreoElectronico, Celular, Contraseña, Sede)
	VALUES (vID, vNombre, vApellido1, vApellido2, vCorreoElectronico, vCelular, vContraseña, vSede);
	INSERT INTO estudiante (ID)
	VALUES (vID);
    COMMIT;
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE addProfesor (vID varchar(45), vNombre varchar(45), vApellido1 varchar(45), vApellido2 varchar(45), vCorreoElectronico varchar(45), vCelular varchar(45), vContraseña varchar(45), vSede varchar(45), vTelefonoOficina varchar(45), vRol varchar(45), vFoto longblob)
BEGIN
	INSERT INTO usuario (ID, Nombre, Apellido1, Apellido2, CorreoElectronico, Celular, Contraseña, Sede)
	VALUES (vID, vNombre, vApellido1, vApellido2, vCorreoElectronico, vCelular, vContraseña, vSede);
	INSERT INTO profesor (ID, TelefonoOficina, Fotografia, Rol)
	VALUES (vID, vTelefonoOficina, vFoto, vRol);
    COMMIT;
END$$
DELIMITER ;

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
CREATE PROCEDURE addEquipoGuía (vAño int, vSemestre int)
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

DELIMITER $$
CREATE PROCEDURE addComentario (vMensaje varchar(45), vFechaHora datetime, vEmisor varchar(45), vActividadID int)
BEGIN
	INSERT INTO comentario (Mensaje, FechaHora, Emisor, ActividadID)
	VALUES (vMensaje, vFechaHora, vEmisor, vActividadID);
    COMMIT;
END$$
DELIMITER ;
DELIMITER $$
CREATE PROCEDURE addReply (vMensaje varchar(45), vFechaHora datetime, vEmisor varchar(45), vComentarioOriginal int)
BEGIN
	INSERT INTO comentario (Mensaje, FechaHora, Emisor, ComentarioOriginal)
	VALUES (vMensaje, vFechaHora, vEmisor, vComentarioOriginal);
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

COMMIT;

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
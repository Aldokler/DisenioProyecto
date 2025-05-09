DELIMITER $$
CREATE PROCEDURE deleteActividad (pID int)
BEGIN
    DELETE asistencia FROM asistencia 
    INNER JOIN evidencia
    ON evidencia.ID = asistencia.EvidenciaID
    INNER JOIN actividad
    ON evidencia.ID = actividad.Evidencia
    WHERE actividad.ID = pID;
    
    DELETE evidencia FROM evidencia 
    INNER JOIN actividad
    ON evidencia.ID = actividad.Evidencia
    WHERE actividad.ID = pID;

	DELETE FROM comentario where ActividadID = pID;
	DELETE FROM dias_recordatorio where Actividad = pID;
	DELETE FROM actividad_x_profesor where IDActividad = pID;
	DELETE FROM actividad where ID = pID;
    COMMIT;
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE deleteEstudiante (pID varchar(45))
BEGIN
	DELETE FROM estudiante where ID = pID;
	DELETE FROM usuario where ID = pID;
    COMMIT;
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE deleteProfesor (pID varchar(45))
BEGIN
	DELETE FROM actividad_x_profesor where IDProfesor = pID;
	DELETE FROM equipo_guía_x_profesor where IDProfesor = pID;
	DELETE FROM profesor where ID = pID;
	DELETE FROM usuario where ID = pID;
    COMMIT;
END$$
DELIMITER ;

drop procedure if exists sacarProfesor;
DELIMITER $$
CREATE PROCEDURE sacarProfesor(profeID varchar(45), equipoID int)
BEGIN
	DELETE FROM actividad_x_profesor where IDProfesor = profeID;
	DELETE FROM equipo_guía_x_profesor where IDEquipoGuia = equipoID and IDProfesor = profeID;
    COMMIT;
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE deleteAdministrativo (pID varchar(45))
BEGIN
	DELETE FROM administrativo where ID = pID;
	DELETE FROM usuario where ID = pID;
    COMMIT;
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE deleteComentario (pID int)
BEGIN
	DELETE FROM comentario where ID = pID;
    COMMIT;
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE deleteDiasRecordatorio (pID int)
BEGIN
	DELETE FROM dias_recordatorio where ID = pID;
    COMMIT;
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE deletePlanDeTrabajo (pID int)
BEGIN
	DECLARE actividadID int;

	DECLARE looper CURSOR FOR
	SELECT actividad.ID
    from actividad
    INNER JOIN plan_de_trabajo
    ON actividad.PlanID = plan_de_trabajo.ID
    WHERE plan_de_trabajo.ID = pID;
    
    OPEN looper;
    REPEAT
		FETCH looper INTO actividadID;
        IF NOT done THEN
			CALL deleteActividad(actividadID);
		END IF;
    Until done END REPEAT;

	DELETE FROM plan_de_trabajo where ID = pID;
    COMMIT;
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE deleteAsistencia (pID int)
BEGIN
	DELETE FROM asistencia where ID = pID;
    COMMIT;
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE deleteEvidencia (pID int)
BEGIN
	DELETE asistencia FROM asistencia
    INNER JOIN evidencia
    ON asistencia.EvidenciaID = evidencia.ID
    WHERE evidencia.ID = pID;
    
	UPDATE actividad 
    INNER JOIN evidencia
    ON actividad.Evidencia = evidencia.ID
    SET actividad.Evidencia = null
    WHERE evidencia.ID = pID;

	DELETE FROM evidencia where ID = pID;
    COMMIT;
END$$
DELIMITER ;


drop procedure if exists eliminarAsistencia;
DELIMITER $$
CREATE PROCEDURE eliminarAsistencia(IN ImagenID int)
BEGIN

    DELETE FROM asistencia WHERE ID = ImagenID;
    COMMIT;
    
END$$

DELIMITER //
DROP PROCEDURE IF EXISTS deleteNotificacion; //
CREATE PROCEDURE deleteNotificacion(IN pID INT)
BEGIN
	DELETE FROM usuario_x_notificacion WHERE IDNotificacion = pID;
	DELETE FROM notificacion WHERE ID = pID;
commit;
END; //

DELIMITER //
DROP PROCEDURE IF EXISTS deleteNotificador; //
CREATE PROCEDURE deleteNotificador(IN pID INT, IN pTipo ENUM("Actividad","Chat"))
BEGIN
	DELETE FROM notificador WHERE SujetoID = pID AND Tipo = pTipo;
commit;
END; //


DELIMITER //
DROP PROCEDURE IF EXISTS cancelarSubscripcionUsuario; //
CREATE PROCEDURE cancelarSubscripcionUsuario(IN pIDUsuario VARCHAR(45), IN pIDNotificador INT, IN pIDTipo ENUM("Actividad","Chat"))
BEGIN
	DELETE FROM usuario_x_notificador WHERE IDUsuario = pIDUsuario AND IDNotificador =pIDNotificador AND IDTipo = pIDTipo;
commit;
END; //


DELIMITER //
DROP PROCEDURE IF EXISTS deleteChat; //
CREATE PROCEDURE deleteChat(IN pID INT)
BEGIN
	DELETE FROM mensaje WHERE ChatID = pID;
    DELETE FROM usuario_x_chat WHERE IDChat;
	DELETE FROM chat WHERE ID = pID;
END; //

DELIMITER //
DROP PROCEDURE IF EXISTS deleteMessage; //
CREATE PROCEDURE deleteMessage(IN pID INT)
BEGIN
	DELETE FROM mensaje WHERE ID = pID;
END; //


DROP PROCEDURE IF EXISTS deleteBuzon; //
DELIMITER $$
CREATE PROCEDURE deleteBuzon(buzonID varchar(45))
BEGIN
	DELETE FROM usuario_x_notificacion where IDUsuario = buzonID;
    COMMIT;
END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS deleteNotificacionBuzon; //
DELIMITER $$
CREATE PROCEDURE deleteNotificacionBuzon(buzonID varchar(45), notiID varchar(45))
BEGIN
	DELETE FROM usuario_x_notificacion where IDUsuario = buzonID AND IDNotificacion = notiID;
    COMMIT;
END$$
DELIMITER ;




COMMIT;
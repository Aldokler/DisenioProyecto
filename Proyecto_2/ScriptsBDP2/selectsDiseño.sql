drop procedure if exists getComentariosO;
DELIMITER $$
CREATE PROCEDURE getComentariosO(IN pIDact int)
BEGIN
	select * from comentario where ActividadID = pIDact AND ComentarioOriginal is null
    Order by comentario.FechaHora;
END$$
DELIMITER ;

drop procedure if exists getComentariosR;
DELIMITER $$
CREATE PROCEDURE getComentariosR(IN pIDcoment int)
BEGIN
	select * from comentario where ComentarioOriginal = pIDcoment
    Order by comentario.FechaHora;
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE getReplies (pID int)
BEGIN
	select Mensaje, FechaHora, Emisor
    from comentario
    where comentario.ComentarioOriginal = pID
    Order by b.FechaHora;
END$$
DELIMITER ;


drop procedure if exists getActividadesofPlan;
DELIMITER $$
CREATE PROCEDURE getActividadesofPlan(pID int)
BEGIN
	select * from actividad where PlanID = pID
    Order by FechaHora;
END$$
DELIMITER ;

DELIMITER //
DROP PROCEDURE IF EXISTS getActividadesByPlanyEstado; //
CREATE PROCEDURE getActividadesByPlanyEstado(IN pPlan varchar(50), IN pEstado varchar(45))
BEGIN
	SELECT * FROM actividad WHERE PlanID = pPlan AND Estado = pEstado;
    COMMIT;
END; //

DELIMITER //
DROP PROCEDURE IF EXISTS getNextActividadNotificada; // 
CREATE PROCEDURE getNextActividadNotificada(IN pplan int, IN pfecha datetime)
BEGIN
select * from actividad where PlanID = pplan AND FechaHora >= pfecha AND Estado = "Notificada"
ORDER BY FechaHora LIMIT 1;
commit;
END; // 

DELIMITER //
DROP PROCEDURE IF EXISTS getEstudianteByID; //
CREATE PROCEDURE getEstudianteByID(IN pID varchar(50))
BEGIN
	select * from usuario join estudiante on estudiante.ID = usuario.ID where usuario.ID = pID ;
    COMMIT;
END; //

DELIMITER $$
CREATE PROCEDURE getEstudiantesAlfa ()
BEGIN
	select a.Nombre, a.Apellido1, a.Apellido2, a.CorreoElectronico, a.Celular, b.ID, a.Sede
    from usuario a, estudiante b
    where a.ID = b.ID
    Order by a.Apellido1, a.Apellido2, a.Nombre;
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE getEstudiantesCarne ()
BEGIN
	select a.Nombre, a.Apellido1, a.Apellido2, a.CorreoElectronico, a.Celular, b.ID, a.Sede
    from usuario a, estudiante b
    where a.ID = b.ID
    Order by b.ID;
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE getEstudianteByCorreo(IN pcorreo varchar(50))
BEGIN
	select * from usuario where CorreoElectronico = pcorreo ;
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE getEstudiantesSede ()
BEGIN
	select a.Nombre, a.Apellido1, a.Apellido2, a.CorreoElectronico, a.Celular, b.ID, a.Sede
    from usuario a, estudiante b
    where a.ID = b.ID
    Order by a.Sede, a.Apellido1, a.Apellido2, a.Nombre;
END$$
DELIMITER ;

drop procedure if exists getProfesores;
DELIMITER $$
CREATE PROCEDURE getProfesores()
BEGIN
	select *
    from usuario a, profesor b
    where a.ID = b.ID
    Order by a.Sede, a.Apellido1, a.Apellido2, a.Nombre;
END$$
DELIMITER ;

drop procedure if exists getProfesoresByID;
DELIMITER $$
CREATE PROCEDURE getProfesoresByID (IN pID varchar(50))
BEGIN
	select * from usuario join profesor on profesor.ID = pID where usuario.ID = pID ;
END$$
DELIMITER ;

drop procedure if exists getAdmByID;
DELIMITER $$
CREATE PROCEDURE getAdmByID (IN pID varchar(50))
BEGIN
	select * from usuario join administrativo on administrativo.ID = pID where usuario.ID = pID ;
END$$
DELIMITER ;


DELIMITER //
DROP PROCEDURE IF EXISTS getProfesoresEnEquipoByProfesor; //
CREATE PROCEDURE getProfesoresEnEquipoByProfesor(IN pprofesor_ID VARCHAR(45))
BEGIN
SELECT g.IDEquipoGuia, p.*, u.*
FROM (SELECT gxp.IDEquipoGuia FROM equipo_guía_x_profesor gxp  WHERE gxp.IDProfesor= pprofesor_ID) as g
INNER JOIN equipo_guía_x_profesor gxp ON gxp.IDEquipoGuia = g.IDEquipoGuia
INNER JOIN profesor p ON gxp.IDProfesor = p.ID
INNER JOIN usuario u ON p.ID =u.ID
WHERE NOT IDProfesor = pprofesor_ID;
END; //


drop procedure if exists consultarEquipoGuia;
DELIMITER $$
CREATE PROCEDURE consultarEquipoGuia(IN pID varchar(50))
BEGIN
	select * from equipo_guía_x_profesor join profesor on profesor.ID = IDProfesor join usuario on usuario.ID=IDProfesor where IDEquipoGuia = pID;
END$$
DELIMITER ;

drop procedure if exists getEquiposGuia;
DELIMITER $$
CREATE PROCEDURE getEquiposGuia()
BEGIN
	select * from equipo_guía;
END$$
DELIMITER ;
COMMIT;

DELIMITER $$
CREATE FUNCTION getEquipoGuiaByYearSemester(vAño INT, vSemestre INT) RETURNS INT
BEGIN
    DECLARE id_result INT;
    
    SELECT id INTO id_result
    FROM equipo_guía
    WHERE Año = vAño AND Semestre = vSemestre
    LIMIT 1;
    
    RETURN id_result;
END$$
DELIMITER ;


drop procedure if exists getEquipoGuiaByYearSemester;
DELIMITER $$
CREATE PROCEDURE getEquipoGuiaByYearSemester(vAño INT, vSemestre INT)
BEGIN
	select ID from equipo_guía where Año = vAño and Semestre = vSemestre;
END$$
DELIMITER ;

drop procedure if exists getPlanes;
DELIMITER $$
CREATE PROCEDURE getPlanes()
BEGIN
	select * from plan_de_trabajo;
END$$
DELIMITER ;
COMMIT;

drop procedure if exists login;
DELIMITER $$
CREATE PROCEDURE login(IN vusername varchar(45), IN vpassword varchar(45))
BEGIN
	DECLARE check_user bool;
    DECLARE check_student bool;
    select if(count(ID) = 1, true, false) into check_student from usuario where CorreoElectronico = vusername;
    if (check_student)  = true then
		select if(count(ID) = 1, true, false) into check_user from usuario where Contraseña = vpassword AND CorreoElectronico = vusername;
		select check_user;
    else
		select if(count(ID) = 1, true, false) into check_user from usuario where Contraseña = vpassword AND ID = vusername;
		select check_user;
	end if;
END$$
DELIMITER ;

drop procedure if exists check_coordinador;
DELIMITER $$
CREATE PROCEDURE check_coordinador(IN pID varchar(45))
BEGIN
	DECLARE check_user bool;
	select if(count(profeID) = 1, true, false) into check_user from coordinador where profeID = pID;
    select check_user;
END$$
DELIMITER ;

drop procedure if exists check_coordinador_Equipo;
DELIMITER $$
CREATE PROCEDURE check_coordinador_Equipo(IN pID varchar(45), IN pIDE int)
BEGIN
	DECLARE check_user bool;
	select if(count(profeID) = 1, true, false) into check_user from coordinador where profeID = pID AND equipoID = pIDE;
    select check_user;
END$$
DELIMITER ;

drop procedure if exists getNextActividad;
DELIMITER $$
CREATE PROCEDURE getNextActividad(IN pplan int, IN pfewcha datetime)
BEGIN
	select * from actividad where PlanID = pplan AND FechaHora >= pfecha
	ORDER BY FechaHora LIMIT 1;
END$$
DELIMITER ;



drop procedure if exists getAsistencia;
DELIMITER $$
CREATE PROCEDURE getAsistencia(vActividadID int)
BEGIN
	declare evidencia_ID int;
    
    SELECT Evidencia into evidencia_ID from actividad WHERE ID = vActividadID;
    if(evidencia_ID) is not null then
		SELECT * FROM asistencia WHERE EvidenciaID = evidencia_ID;
	end if;
    COMMIT;
END$$

drop procedure if exists check_user;
DELIMITER $$
CREATE PROCEDURE check_user(IN vcorreo varchar(45))
BEGIN
	DECLARE check_user bool;
	select if(count(ID) = 1, true, false) into check_user from usuario where CorreoElectronico = vcorreo;
    select check_user;
END$$
DELIMITER ;

DELIMITER //
DROP PROCEDURE IF EXISTS getNextActividadNotificada; // 
CREATE PROCEDURE getNextActividadNotificada(IN pplan int, IN pfecha datetime)
BEGIN
select * from actividad where PlanID = pplan AND FechaHora >= pfecha AND Estado = "Notificada"
ORDER BY FechaHora LIMIT 1;
commit;
END; // 

DELIMITER //
DROP PROCEDURE IF EXISTS getActividadesANotificar; //
CREATE PROCEDURE getActividadesANotificar()
BEGIN
	SELECT a.ID
    FROM (SELECT * FROM actividad WHERE FechaAPublicar <= DATE(CONVERT_TZ(NOW(),'+00:00','-06:00'))  AND FechaHora > DATE(CONVERT_TZ(NOW(),'+00:00','-06:00')) ) as a
    INNER JOIN dias_recordatorio dr ON a.ID = dr.Actividad
    WHERE DATE(dr.Dia) = DATE(CONVERT_TZ(NOW(),'+00:00','-06:00'));
    COMMIT;
END; //

DELIMITER //
DROP PROCEDURE IF EXISTS getUsuariosANotificar; //
CREATE PROCEDURE getUsuariosANotificar(IN pID INT, IN pTipo ENUM("Actividad","Chat"))
BEGIN
	SELECT uxnr.IDUsuario
    FROM notificador nr
    INNER JOIN usuario_x_notificador uxnr ON nr.ID = uxnr.IDNotificador
    WHERE nr.SujetoID = pID AND nr.Tipo = pTipo;
    COMMIT;
END; //


DELIMITER //
DROP PROCEDURE IF EXISTS getBuzonByUsuario; //
CREATE PROCEDURE getBuzonByUsuario(IN pID VARCHAR(45), IN filtro int)
BEGIN
	if filtro = 2 then 
		SELECT notif.* FROM usuario_x_notificacion uxn
		INNER JOIN notificacion notif ON notif.ID = uxn.IDNotificacion 
		WHERE uxn.IDUsuario = pID 
        ORDER BY notif.FechaHora DESC;
	else
		SELECT notif.* FROM usuario_x_notificacion uxn
		INNER JOIN notificacion notif ON notif.ID = uxn.IDNotificacion 
		WHERE uxn.IDUsuario = pID AND Estado = filtro
		ORDER BY notif.FechaHora DESC;
	end if;
END; //

DELIMITER //
DROP PROCEDURE IF EXISTS getProfesoresANotificar; //
CREATE PROCEDURE getProfesoresANotificar(IN pID INT, IN pTipo ENUM("Actividad","Chat"))
BEGIN
	SELECT uxnr.IDUsuario
    FROM notificador nr
    INNER JOIN usuario_x_notificador uxnr ON nr.ID = uxnr.IDNotificador
    INNER JOIN profesor p ON uxnr.IDUsuario = p.ID
    WHERE nr.IDNotificador = pID AND nr.IDTipo = pTipo;
    COMMIT;
END; //

DELIMITER //
DROP PROCEDURE IF EXISTS getMensajesByChat; //
CREATE PROCEDURE getMensajesByChat(IN pIDChat INT)
BEGIN
	SELECT * FROM mensaje WHERE ChatID = pIDChat;
END; //

DELIMITER //
DROP PROCEDURE IF EXISTS getChatByUser; //
CREATE PROCEDURE getChatByUser(IN pIDUser INT)
BEGIN
	SELECT c.* 
    FROM usuario_x_chat uxc
    INNER JOIN chat c ON c.ID = uxc.IDChat
    WHERE uxc.IDUsuario = pIDUser;
END; //

drop procedure if exists getLastActividadID;
DELIMITER $$
CREATE PROCEDURE getLastActividadID()
BEGIN
	SELECT ID FROM actividad order by ID desc limit 1;
END$$
DELIMITER ;

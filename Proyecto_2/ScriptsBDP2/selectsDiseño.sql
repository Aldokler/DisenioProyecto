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
	select if(count(ID) = 1, true, false) into check_user from usuario where Contraseña = vpassword AND ID = vusername;
    select check_user;
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


DELIMITER $$
CREATE PROCEDURE getComentarios (pID int)
BEGIN
	select b.Mensaje, b.FechaHora, b.Emisor
    from actividad a, comentario b
    where a.ID = pID
    Order by b.FechaHora;
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

DELIMITER $$
CREATE PROCEDURE getActividadesofPlan (pID int)
BEGIN
	select a.Nombre, a.Semana, a.Tipo, a.FechaHora
    from actividad a, plan_de_trabajo b
    where a.PlanID = pID
    Order by a.FechaHora;
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

DELIMITER $$
CREATE PROCEDURE getProfesores ()
BEGIN
	select a.Nombre, a.Apellido1, a.Apellido2, a.CorreoElectronico, b.ID
    from usuario a, profesor b
    where a.ID = b.ID
    Order by a.Sede, a.Apellido1, a.Apellido2, a.Nombre;
END$$
DELIMITER ;

COMMIT;
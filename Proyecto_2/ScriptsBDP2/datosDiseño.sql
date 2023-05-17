#------------------------------ Enums -------------------------
INSERT INTO trol (Rol)
VALUES ('Guia');
INSERT INTO trol (Rol)
VALUES ('Coordinador');

INSERT INTO tmodalidad (Modalidad)
VALUES ('Presencial');
INSERT INTO tmodalidad (Modalidad)
VALUES ('Remota');

INSERT INTO testado (Estado)
VALUES ('Planeada');
INSERT INTO testado (Estado)
VALUES ('Notificada');
INSERT INTO testado (Estado)
VALUES ('Realizada');
INSERT INTO testado (Estado)
VALUES ('Cancelada');

INSERT INTO tindole_actividad (IndoleActividad)
VALUES ('Orientadora');
INSERT INTO tindole_actividad (IndoleActividad)
VALUES ('Motivacional');
INSERT INTO tindole_actividad (IndoleActividad)
VALUES ('Vida Estudiantil');
INSERT INTO tindole_actividad (IndoleActividad)
VALUES ('Técnico');
INSERT INTO tindole_actividad (IndoleActividad)
VALUES ('Recreación');

INSERT INTO tsede (Codigo, Nombre)
VALUES ('CA', 'Campus tecnológico central Cartago');
INSERT INTO tsede (Codigo, Nombre)
VALUES ('SJ', 'Campus tecnológico local San José');
INSERT INTO tsede (Codigo, Nombre)
VALUES ('LI', 'Centro académico de Limón');
INSERT INTO tsede (Codigo, Nombre)
VALUES ('AL', 'Centro académico de Alajuela');
INSERT INTO tsede (Codigo, Nombre)
VALUES ('SC', 'Campus tecnológico local cartago');

#-------------------------- Usuario ------------------------
INSERT INTO usuario (ID, Nombre, Apellido1, Apellido2, CorreoElectronico, Celular, Contraseña, Sede)
VALUES ('2020023569', 'David', 'Pastor', 'Barrientos', 'davidpastor@gmail.com', '+506 1234 5678', 'incorrecta', 'SJ');
INSERT INTO usuario (ID, Nombre, Apellido1, Apellido2, CorreoElectronico, Celular, Contraseña, Sede)
VALUES ('2021008082', 'Bryan', 'Castro', 'Solís', 'bryancastro@gmail.com', '+506 5678 8569', 'si', 'SC');
INSERT INTO usuario (ID, Nombre, Apellido1, Apellido2, CorreoElectronico, Celular, Contraseña, Sede)
VALUES ('2021536038', 'Sharon', 'Chacón', 'Rodríguez', 'sharonchacon@gmail.com', '+506 1234 0658', '1234', 'CA');

INSERT INTO usuario (ID, Nombre, Apellido1, Apellido2, CorreoElectronico, Celular, Contraseña, Sede)
VALUES ('SJ-01', 'Ericka', 'Solano', 'Fernández', 'ericka@gmail.com', '+506 6548 2135', 'asies', 'SJ');
INSERT INTO usuario (ID, Nombre, Apellido1, Apellido2, CorreoElectronico, Celular, Contraseña, Sede)
VALUES ('AL-03', 'Jose', 'Castro', 'Mora', 'jcastro@gmail.com', '+506 8465 7351', 'KHUY9&/FGigFf&fI', 'AL');
INSERT INTO usuario (ID, Nombre, Apellido1, Apellido2, CorreoElectronico, Celular, Contraseña, Sede)
VALUES ('CA-23', 'Adriana', 'Álvarez', 'Figueroa', 'adrian@gmail.com', '+506 5131 8103', 'elnombredemiperro23', 'CA');
INSERT INTO usuario (ID, Nombre, Apellido1, Apellido2, CorreoElectronico, Celular, Contraseña, Sede)
VALUES ('LI-30', 'Francisco', 'Torres', 'Rojas', 'torres@gmail.com', '+506 8649 2378', 'Wind0$Apest4', 'LI');
INSERT INTO usuario (ID, Nombre, Apellido1, Apellido2, CorreoElectronico, Celular, Contraseña, Sede)
VALUES ('CA-15', 'Mauricio', 'Avilés', 'Zoster', 'aviles@gmail.com', '+506 2156 8432', 'Zosterxd', 'CA');
INSERT INTO usuario (ID, Nombre, Apellido1, Apellido2, CorreoElectronico, Celular, Contraseña, Sede)
VALUES ('SJ-40', 'Nelson', 'Cordero', 'Ajedrez', 'cordero@gmail.com', '+506 1234 5746', '100 rated chess, but im a teacher', 'SJ');
INSERT INTO usuario (ID, Nombre, Apellido1, Apellido2, CorreoElectronico, Celular, Contraseña, Sede)
VALUES ('SC-01', 'Eduardo', 'Canessa', 'Montero', 'canefox@gmail.com', '+506 1345 6842', 'el zorro', 'SC');
INSERT INTO usuario (ID, Nombre, Apellido1, Apellido2, CorreoElectronico, Celular, Contraseña, Sede)
VALUES ('SC-02', 'Luis', 'Montoya', 'Poitevien', 'luis@gmail.com', '+506 9543 5432', 'PUUUUUUUUUURA vida', 'SC');

INSERT INTO usuario (ID, Nombre, Apellido1, Apellido2, CorreoElectronico, Celular, Contraseña, Sede)
VALUES ('ADM-01', 'Adolf', 'Hitler', 'Nazi', 'hitler@gmail.com', '+506 6661 6678', 'german rules', 'CA');
INSERT INTO usuario (ID, Nombre, Apellido1, Apellido2, CorreoElectronico, Celular, Contraseña, Sede)
VALUES ('ADM-02', 'Alfredo', 'Gonzalez', 'Flores', 'gonflo@gmail.com', '+506 3154 4473', 'equidad', 'SJ');

INSERT INTO estudiante (ID)
VALUES ('2020023569');
INSERT INTO estudiante (ID)
VALUES ('2021008082');
INSERT INTO estudiante (ID)
VALUES ('2021536038');

INSERT INTO profesor (ID, TelefonoOficina, Rol)
VALUES ('SJ-01', '1548 1354', 'Guia');
INSERT INTO profesor (ID, TelefonoOficina, Rol)
VALUES ('AL-03', '10614 351', 'Guia');
INSERT INTO profesor (ID, TelefonoOficina, Rol)
VALUES ('CA-23', '6481 3546', 'Guia');
INSERT INTO profesor (ID, TelefonoOficina, Rol)
VALUES ('LI-30', '7513 8436', 'Coordinador');
INSERT INTO profesor (ID, TelefonoOficina, Rol)
VALUES ('CA-15', '9436 1346', 'Guia');
INSERT INTO profesor (ID, TelefonoOficina, Rol)
VALUES ('SJ-40', '384 6513 6513', 'Guia');
INSERT INTO profesor (ID, TelefonoOficina, Rol)
VALUES ('SC-01', '94651 3521', 'Guia');
INSERT INTO profesor (ID, TelefonoOficina, Rol)
VALUES ('SC-02', '89543 516', 'Guia');

INSERT INTO administrativo (ID, TelefonoOficina)
VALUES ('ADM-01', '1105 2516');
INSERT INTO administrativo (ID, TelefonoOficina)
VALUES ('ADM-02', '8135 0346');

#--------------------------------- Equipo guia------------------
INSERT INTO equipo_guía (Año, Semestre)
VALUES (1971, 1);
INSERT INTO equipo_guía (Año, Semestre)
VALUES (2022, 1);
INSERT INTO equipo_guía (Año, Semestre)
VALUES (2022, 2);

INSERT INTO equipo_guía_x_profesor (IDEquipoGuia, IDProfesor)
VALUES (1, 'LI-30');
INSERT INTO equipo_guía_x_profesor (IDEquipoGuia, IDProfesor)
VALUES (1, 'SC-02');
INSERT INTO equipo_guía_x_profesor (IDEquipoGuia, IDProfesor)
VALUES (1, 'AL-03');
INSERT INTO equipo_guía_x_profesor (IDEquipoGuia, IDProfesor)
VALUES (2, 'CA-15');
INSERT INTO equipo_guía_x_profesor (IDEquipoGuia, IDProfesor)
VALUES (2, 'CA-23');
INSERT INTO equipo_guía_x_profesor (IDEquipoGuia, IDProfesor)
VALUES (2, 'SJ-01');
INSERT INTO equipo_guía_x_profesor (IDEquipoGuia, IDProfesor)
VALUES (3, 'CA-15');
INSERT INTO equipo_guía_x_profesor (IDEquipoGuia, IDProfesor)
VALUES (3, 'CA-23');
INSERT INTO equipo_guía_x_profesor (IDEquipoGuia, IDProfesor)
VALUES (3, 'LI-30');

#--------------------------------- Plan de trabajo -----------------------
INSERT INTO plan_de_trabajo (Año, Semestre, Creador)
VALUES (1971, 1, 1);
INSERT INTO plan_de_trabajo (Año, Semestre, Creador)
VALUES (2022, 1, 2);
INSERT INTO plan_de_trabajo (Año, Semestre, Creador)
VALUES (2022, 2, 3);

#--------------------------------- evidencia -----------------------
INSERT INTO evidencia (Link)
VALUES ('www.algonosequecuanto.com');
INSERT INTO evidencia (Link)
VALUES ('www.enesteañoniexistíaelinterweb.co.cr');
INSERT INTO evidencia (Link)
VALUES ('www.drive.com/algovaacá');

#--------------------------------- actividad -----------------------
INSERT INTO actividad (Nombre, Semana, FechaHora, DiasAnunciar, Link, Tipo, Modalidad, Estado, PlanID)
VALUES ('Cómo hace Pixar sus películas?', 8, '1971-04-15 3:45:00', 3, 'www.quenoecistelinterweb.com', 'Técnico', 'Presencial', 'Realizada', 1);
INSERT INTO actividad (Nombre, Semana, FechaHora, DiasAnunciar, Link, Tipo, Modalidad, Estado, PlanID)
VALUES ('Charla sobre ensamblador', 14, '1971-05-15 19:00:00', 3, 'www.quenoecistelinterweb.com', 'Técnico', 'Presencial', 'Cancelada', 1);
INSERT INTO actividad (Nombre, Semana, FechaHora, DiasAnunciar, Link, Tipo, Modalidad, Estado, PlanID)
VALUES ('Técnicas de organización del tiempo', 3, '2022-04-15 6:59:59', 14, 'www.puntualidad.com', 'Vida Estudiantil', 'Presencial', 'Realizada', 2);
INSERT INTO actividad (Nombre, Semana, FechaHora, DiasAnunciar, Link, Tipo, Modalidad, Estado, PlanID)
VALUES ('Introducción a D&D', 4, '2022-09-27 3:00:00', 3, 'www.fantasyrpg.com', 'Recreación', 'Remota', 'Realizada', 3);
INSERT INTO actividad (Nombre, Semana, FechaHora, DiasAnunciar, Link, Tipo, Modalidad, Estado, PlanID)
VALUES ('Cómo usar la biblioteca', 1, '2022-08-12 9:00:00', 3, 'www.libtec.com', 'Orientadora', 'Remota', 'Realizada', 3);
INSERT INTO actividad (Nombre, Semana, FechaHora, DiasAnunciar, Link, Tipo, Modalidad, Estado, PlanID)
VALUES ('Charla sobre el feminismo', 12, '2022-10-12 9:00:00', 3, 'www.mequedesinideas.com', 'Motivacional', 'Remota', 'Cancelada', 3);

#--------------------------------- actividadXprofe -----------------------
INSERT INTO actividad_x_profesor (IDActividad, IDProfesor)
VALUES (1, 'LI-30');
INSERT INTO actividad_x_profesor (IDActividad, IDProfesor)
VALUES (2, 'AL-03');
INSERT INTO actividad_x_profesor (IDActividad, IDProfesor)
VALUES (3, 'CA-23');
INSERT INTO actividad_x_profesor (IDActividad, IDProfesor)
VALUES (4, 'CA-15');
INSERT INTO actividad_x_profesor (IDActividad, IDProfesor)
VALUES (5, 'SC-02');
INSERT INTO actividad_x_profesor (IDActividad, IDProfesor)
VALUES (6, 'SJ-01');
INSERT INTO actividad_x_profesor (IDActividad, IDProfesor)
VALUES (6, 'CA-23');

#--------------------------------- dias_recordatorio -----------------------
INSERT INTO dias_recordatorio (Dia, Actividad)
VALUES ('1971-04-15 1:00:00', 1);
INSERT INTO dias_recordatorio (Dia, Actividad)
VALUES ('1971-04-14 1:00:00', 1);
INSERT INTO dias_recordatorio (Dia, Actividad)
VALUES ('1971-04-13 1:00:00', 1);

#--------------------------------- comentario -----------------------
INSERT INTO comentario (Mensaje, FechaHora, Emisor, ActividadID)
VALUES ('Grande Pixar, todavía ni existe, pero grande Pixar', '1971-04-15 6:00:00', 'LI-30', 1);
INSERT INTO comentario (Mensaje, FechaHora, Emisor, ComentarioOriginal)
VALUES ('Qué es Pixar?', '1971-04-15 6:30:00', 'AL-03', 1);
INSERT INTO comentario (Mensaje, FechaHora, Emisor)
VALUES ('Qué es Pixar?', '1971-04-15 6:30:00', 'AL-03');
INSERT INTO comentario (Mensaje, FechaHora, Emisor,ActividadID,ComentarioOriginal)
VALUES ('Qusssé essss ddd?', '1971-04-15 6:30:00', 'AL-03', 1, 1);


INSERT INTO coordinador (equipoID, profeID)
VALUES (1, 'AL-03');

COMMIT;
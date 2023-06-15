drop database if exists proyectodisenio;
CREATE DATABASE proyectodisenio;
USE proyectodisenio;

CREATE TABLE `tsede` (
  `Codigo` varchar(2) NOT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Codigo`),
  UNIQUE KEY `idtsede_UNIQUE` (`Codigo`)
);

CREATE TABLE `trol` (
  `Rol` varchar(45) NOT NULL,
  PRIMARY KEY (`Rol`),
  UNIQUE KEY `idTRol_UNIQUE` (`Rol`)
);

CREATE TABLE `tmodalidad` (
  `Modalidad` varchar(45) NOT NULL,
  PRIMARY KEY (`Modalidad`),
  UNIQUE KEY `idTModalidad_UNIQUE` (`Modalidad`)
);

CREATE TABLE `tindole_actividad` (
  `IndoleActividad` varchar(45) NOT NULL,
  PRIMARY KEY (`IndoleActividad`),
  UNIQUE KEY `idTIndoleActividad_UNIQUE` (`IndoleActividad`)
);

CREATE TABLE `testado` (
  `Estado` varchar(45) NOT NULL,
  PRIMARY KEY (`Estado`),
  UNIQUE KEY `idTEstado_UNIQUE` (`Estado`)
);

CREATE TABLE `equipo_guía` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Año` int NOT NULL,
  `Semestre` int NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `idEquipo_Guía_UNIQUE` (`ID`)
);

CREATE TABLE `evidencia` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Link` varchar(45) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `idEvidencia_UNIQUE` (`ID`)
);

CREATE TABLE `usuario` (
  `ID` varchar(45) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Apellido1` varchar(45) NOT NULL,
  `Apellido2` varchar(45) NOT NULL,
  `CorreoElectronico` varchar(45) NOT NULL,
  `Celular` varchar(45) NOT NULL,
  `Contraseña` varchar(45) NOT NULL,
  `Sede` varchar(2) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `idusuario_UNIQUE` (`ID`),
  KEY `Sede_idx` (`Sede`),
  CONSTRAINT `Sede` FOREIGN KEY (`Sede`) REFERENCES `tsede` (`Codigo`)
);

CREATE TABLE `profesor` (
  `ID` varchar(45) NOT NULL,
  `TelefonoOficina` varchar(45) DEFAULT NULL,
  `Fotografia` longblob,
  `Rol` varchar(45) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `idprofesor_UNIQUE` (`ID`),
  KEY `Rol_idx` (`Rol`),
  CONSTRAINT `Rol` FOREIGN KEY (`Rol`) REFERENCES `trol` (`Rol`)
);

CREATE TABLE `estudiante` (
  `ID` varchar(45) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `idestudiante_UNIQUE` (`ID`),
  CONSTRAINT `ID` FOREIGN KEY (`ID`) REFERENCES `usuario` (`ID`)
);

CREATE TABLE `administrativo` (
  `ID` varchar(45) NOT NULL,
  `TelefonoOficina` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `idadministrativo_UNIQUE` (`ID`)
);

CREATE TABLE `plan_de_trabajo` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Año` int NOT NULL,
  `Semestre` int NOT NULL,
  `Creador` int NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `idplan_de_trabajo_UNIQUE` (`ID`),
  KEY `Creador_idx` (`Creador`),
  CONSTRAINT `Creador` FOREIGN KEY (`Creador`) REFERENCES `equipo_guía` (`ID`)
);


CREATE TABLE `actividad` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) NOT NULL,
  `Semana` int NOT NULL,
  `FechaHora` datetime NOT NULL,
  `DiasAnunciar` int DEFAULT NULL,
  `Link` varchar(45) DEFAULT NULL,
  `Afiche` longblob,
  `FechaCancelacion` date DEFAULT NULL,
  `Observacion` varchar(450) DEFAULT NULL,
  `Evidencia` int DEFAULT NULL,
  `Tipo` varchar(45) NOT NULL,
  `Modalidad` varchar(45) NOT NULL,
  `Estado` varchar(45) NOT NULL,
  `PlanID` int NOT NULL,
  `FechaAPublicar` datetime NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `idActividad_UNIQUE` (`ID`),
  KEY `Evidencia_idx` (`Evidencia`),
  KEY `Tipo_idx` (`Tipo`),
  KEY `Modalidad_idx` (`Modalidad`),
  KEY `Estado_idx` (`Estado`),
  KEY `PlanID_idx` (`PlanID`),
  CONSTRAINT `Estado` FOREIGN KEY (`Estado`) REFERENCES `testado` (`Estado`),
  CONSTRAINT `Evidencia` FOREIGN KEY (`Evidencia`) REFERENCES `evidencia` (`ID`),
  CONSTRAINT `Modalidad` FOREIGN KEY (`Modalidad`) REFERENCES `tmodalidad` (`Modalidad`),
  CONSTRAINT `PlanID` FOREIGN KEY (`PlanID`) REFERENCES `plan_de_trabajo` (`ID`),
  CONSTRAINT `Tipo` FOREIGN KEY (`Tipo`) REFERENCES `tindole_actividad` (`IndoleActividad`)
);

CREATE TABLE `asistencia` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Imagen` longblob NOT NULL,
  `EvidenciaID` int NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `idasistencia_UNIQUE` (`ID`),
  KEY `EvidenciaID_idx` (`EvidenciaID`),
  CONSTRAINT `EvidenciaID` FOREIGN KEY (`EvidenciaID`) REFERENCES `evidencia` (`ID`)
);

CREATE TABLE `comentario` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Mensaje` varchar(500) NOT NULL,
  `FechaHora` datetime NOT NULL,
  `Emisor` varchar(45) NOT NULL,
  `ActividadID` int DEFAULT NULL,
  `ComentarioOriginal` int DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `idcomentario_UNIQUE` (`ID`),
  KEY `Emisor_idx` (`Emisor`),
  KEY `ActividadID_idx` (`ActividadID`),
  KEY `ComentarioOriginal_idx` (`ComentarioOriginal`),
  CONSTRAINT `ActividadID` FOREIGN KEY (`ActividadID`) REFERENCES `actividad` (`ID`),
  CONSTRAINT `ComentarioOriginal` FOREIGN KEY (`ComentarioOriginal`) REFERENCES `comentario` (`ID`),
  CONSTRAINT `Emisor` FOREIGN KEY (`Emisor`) REFERENCES `profesor` (`ID`)
);

CREATE TABLE `dias_recordatorio` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Dia` date NOT NULL,
  `Actividad` int NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `idDias_REcordatORIO_UNIQUE` (`ID`),
  CONSTRAINT `dActividad` FOREIGN KEY (`ID`) REFERENCES `actividad` (`ID`)
);


CREATE TABLE coordinador(
equipoID int,
profeID varchar(45),
primary key(equipoID,profeID),
CONSTRAINT FOREIGN KEY (equipoID) REFERENCES equipo_guía(ID),
CONSTRAINT FOREIGN KEY (profeID) REFERENCES profesor(ID)
);

CREATE TABLE `actividad_x_profesor` (
  `IDActividad` int NOT NULL,
  `IDProfesor` varchar(45) NOT NULL,
  PRIMARY KEY (`IDActividad`,`IDProfesor`),
  KEY `profesor_idx` (`IDProfesor`),
  CONSTRAINT `IDActividad` FOREIGN KEY (`IDActividad`) REFERENCES `actividad` (`ID`),
  CONSTRAINT `IDProfesor` FOREIGN KEY (`IDProfesor`) REFERENCES `profesor` (`ID`)
);
CREATE TABLE `equipo_guía_x_profesor` (
  `IDEquipoGuia` int NOT NULL,
  `IDProfesor` varchar(45) NOT NULL,
  PRIMARY KEY (`IDEquipoGuia`,`IDProfesor`),
  KEY `IDProfesor_idx` (`IDProfesor`),
  CONSTRAINT `IDEquipoGuia` FOREIGN KEY (`IDEquipoGuia`) REFERENCES `equipo_guía` (`ID`),
  CONSTRAINT `IDProfesor_EGXP` FOREIGN KEY (`IDProfesor`) REFERENCES `profesor` (`ID`)
);

CREATE TABLE `numeroprofessede` (
  `numero` int NOT NULL DEFAULT '0',
  `sede` varchar(10) NOT NULL,
  PRIMARY KEY (`numero`,`sede`)
);
COMMIT;

CREATE TABLE `chat` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Host` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID`)
);

CREATE TABLE `mensaje` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Emisor` VARCHAR(45) NOT NULL,
  `FechaHora` DATETIME NOT NULL,
  `Contenido` VARCHAR(300) NOT NULL,
  `ChatID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  CONSTRAINT `mEmisor` FOREIGN KEY (`Emisor`) REFERENCES `usuario`(`ID`),
  CONSTRAINT `ChatID` FOREIGN KEY (`ChatID`) REFERENCES `chat` (`ID`)
);

CREATE TABLE `notificacion` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `IDEmisor` int NOT NULL,
  `EmisorTipo` enum('Actividad','Chat') NOT NULL,
  `FechaHora` datetime NOT NULL,
  `Contenido` varchar(300) NOT NULL,
  `Emisor` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `cEmisor` (`IDEmisor`,`EmisorTipo`),
  CONSTRAINT `cEmisor` FOREIGN KEY (`IDEmisor`, `EmisorTipo`) REFERENCES `notificador` (`SujetoID`, `Tipo`)
);

CREATE TABLE `notificador` (
  `SujetoID` int NOT NULL,
  `Tipo` enum('Actividad','Chat') NOT NULL,
  `Nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`SujetoID`,`Tipo`)
);

CREATE TABLE `usuario_x_chat` (
  `IDUsuario` VARCHAR(45) NOT NULL,
  `IDChat` int NOT NULL,
  PRIMARY KEY (`IDUsuario`,`IDChat`),
  CONSTRAINT `cIDUsuario` FOREIGN KEY (`IDUsuario`) REFERENCES `usuario` (`ID`),
  CONSTRAINT `IDChat` FOREIGN KEY (`IDChat`) REFERENCES `chat` (`ID`)
);

drop table if exists usuario_x_notificacion;
CREATE TABLE `usuario_x_notificacion` (
  `IDUsuario` varchar(45) NOT NULL,
  `IDNotificacion` int NOT NULL,
  `Estado` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`IDUsuario`,`IDNotificacion`),
  KEY `IDNotificacion` (`IDNotificacion`),
  CONSTRAINT `IDNotificacion` FOREIGN KEY (`IDNotificacion`) REFERENCES `notificacion` (`ID`),
  CONSTRAINT `nIDUsuario` FOREIGN KEY (`IDUsuario`) REFERENCES `usuario` (`ID`)
);

CREATE TABLE `usuario_x_notificador` (
  `IDUsuario`  VARCHAR(45) NOT NULL,
  `IDNotificador` int NOT NULL,
  `IDTipo` Enum("Actividad","Chat") NOT NULL,
  PRIMARY KEY (`IDUsuario`,`IDNotificador`,`IDTipo`),
  CONSTRAINT `nrIDUsuario` FOREIGN KEY (`IDUsuario`) REFERENCES `usuario` (`ID`),
  CONSTRAINT `IDNotificador` FOREIGN KEY (`IDNotificador`,`IDTipo`) REFERENCES `notificador` (`SujetoID`,`Tipo`)
);


-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 13-09-2021 a las 00:33:49
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `asistencia_prueba`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admininfo`
--

CREATE TABLE `admininfo` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefono` varchar(30) NOT NULL,
  `id_rol` int(30) NOT NULL,
  `obra_asignada` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `admininfo`
--

INSERT INTO `admininfo` (`id`, `nombre`, `apellido`, `username`, `password`, `email`, `telefono`, `id_rol`, `obra_asignada`) VALUES
(1, 'Pedro', 'Carrasco Artigas', 'admin', 'admin', 'admin@admin.com', '12344', 1, 1),
(4, 'Pedro', 'Carrasco', 'pcarrasco', 'pedro0475', 'p.carrasco1@hotmail.com', '', 1, 1),
(5, 'Moises', 'Pérez', 'moises.perez', 'mperez2021', '', '942715913', 2, 1),
(6, 'Nicolás', 'Pinto', 'nicolas.pinto', 'npinto2021', '', '920749645', 2, 1),
(7, 'Nicolás', 'Cerón', 'nicolas.ceron', 'nceron2021', '', '99999999', 2, 1),
(8, 'Miguel', 'Jimenez', 'miguel.jimenez', 'mjimenez2021', '', '959320914', 2, 1),
(9, 'Jefe', 'Final', 'admin', 'jefe', 'ewiew@jskds.clsd', '999111999', 2, 3),
(10, 'Jhon', 'Gomez', 'jon.gomez', 'joncitogomecito', 'algo@algo.cl', '919191919', 2, 6),
(13, 'PEPEEP', 'ksdskdl', 'pededede', '12345678', 'pedorasd@sdksld.cl', '961439571', 2, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asistencia`
--

CREATE TABLE `asistencia` (
  `tr_id` int(20) NOT NULL,
  `obra` varchar(20) NOT NULL,
  `estado` varchar(20) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `asistencia`
--

INSERT INTO `asistencia` (`tr_id`, `obra`, `estado`, `fecha`) VALUES
(3, '1', 'Licencia', '2021-06-03'),
(4, '1', 'Ausente', '2021-06-03'),
(5, '1', 'Presente', '2021-06-03'),
(1, '2', 'Licencia', '2021-06-03'),
(2, '2', 'Ausente', '2021-06-03'),
(6, '3', 'Presente', '2021-06-03'),
(6, '3', 'Presente', '2021-06-03'),
(3, '1', 'Presente', '2021-06-12'),
(4, '1', 'Ausente', '2021-06-12'),
(5, '1', 'Licencia', '2021-06-12'),
(6, '3', 'Permiso', '2021-06-12'),
(3, '1', 'Ausente', '2021-06-13'),
(4, '1', 'Presente', '2021-06-13'),
(5, '1', 'Licencia', '2021-06-13'),
(1, '2', 'Licencia', '2021-06-13'),
(2, '2', 'Ausente', '2021-06-13'),
(8, '1', 'Presente', '2021-06-13'),
(3, '1', 'Presente', '2021-08-04'),
(4, '1', 'Presente', '2021-08-04'),
(5, '1', 'Presente', '2021-08-04'),
(8, '1', 'Presente', '2021-08-04'),
(3, '1', 'Ausente', '2021-08-05'),
(4, '1', 'Ausente', '2021-08-05'),
(5, '1', 'Licencia', '2021-08-05'),
(8, '1', 'Permiso', '2021-08-05'),
(3, '1', 'Ausente', '2021-08-11'),
(4, '1', 'Ausente', '2021-08-11'),
(5, '1', 'Licencia', '2021-08-11'),
(8, '1', 'Ausente', '2021-08-11'),
(3, '1', 'Presente', '2021-08-12'),
(4, '1', 'Presente', '2021-08-12'),
(5, '1', 'Presente', '2021-08-12'),
(8, '1', 'Presente', '2021-08-12'),
(3, '1', 'Presente', '2021-08-13'),
(4, '1', 'Ausente', '2021-08-13'),
(5, '1', 'Permiso', '2021-08-13'),
(8, '1', 'Presente', '2021-08-13'),
(3, '1', 'Presente', '2021-08-18'),
(4, '1', 'Presente', '2021-08-18'),
(5, '1', 'Presente', '2021-08-18'),
(8, '1', 'Presente', '2021-08-18'),
(3, '1', 'Presente', '2021-08-20'),
(4, '1', 'Ausente', '2021-08-20'),
(5, '1', 'Licencia', '2021-08-20'),
(8, '1', 'Presente', '2021-08-20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `attendance`
--

CREATE TABLE `attendance` (
  `stat_id` int(20) NOT NULL,
  `course` varchar(20) NOT NULL,
  `st_status` varchar(20) NOT NULL,
  `stat_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `attendance`
--

INSERT INTO `attendance` (`stat_id`, `course`, `st_status`, `stat_date`) VALUES
(1, 'networking', 'Absent', '2021-05-10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `obra`
--

CREATE TABLE `obra` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `responsable` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `obras`
--

CREATE TABLE `obras` (
  `id_obra` int(10) NOT NULL,
  `nombre_obra` varchar(20) NOT NULL,
  `direccion_obra` varchar(50) NOT NULL,
  `responsable_obra` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `obras`
--

INSERT INTO `obras` (`id_obra`, `nombre_obra`, `direccion_obra`, `responsable_obra`) VALUES
(1, 'obra1', '', ''),
(2, 'obra2', '', ''),
(3, 'Obra Lago', 'Arza 1021', 'Pedro carrasco'),
(4, 'Obra Lago', 'Arza 1021', 'Pedro carrasco'),
(5, 'Obra Lago', 'Arza 1021', 'Pedro carrasco'),
(6, 'Obra Juanito', 'Serrano #100', 'EL JEFE'),
(7, 'Obra 5', 'Vicuña Mackena #4021', 'Pedro Carrasco'),
(8, 'OBRA MAESTRA', 'arza 102111', 'jefe'),
(9, 'OBRA maquina', 'akdlask', 'pedrito'),
(10, 'obra jsdks', 'dksdl', 'weiopsdkñls'),
(11, 'obra jsdks', 'dksdl', 'weiopsdkñls');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `reportes`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `reportes` (
`tr_id` int(20)
,`tr_nombre` varchar(50)
,`tr_obra` varchar(20)
,`tr_rut` varchar(10)
,`fecha` date
,`estado` varchar(20)
,`obra` varchar(20)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `reports`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `reports` (
`st_id` int(20)
,`st_name` varchar(255)
,`st_dept` varchar(255)
,`st_batch` varchar(255)
,`stat_date` date
,`st_status` varchar(20)
,`course` varchar(20)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `tipo` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `tipo`) VALUES
(1, 'admin'),
(2, 'jefe_obra');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `students`
--

CREATE TABLE `students` (
  `st_id` int(20) NOT NULL,
  `st_name` varchar(255) NOT NULL,
  `st_dept` varchar(255) NOT NULL,
  `st_batch` varchar(255) NOT NULL,
  `st_sem` varchar(255) NOT NULL,
  `st_email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `students`
--

INSERT INTO `students` (`st_id`, `st_name`, `st_dept`, `st_batch`, `st_sem`, `st_email`) VALUES
(1, 'Pedro Carrasco', 'OBRA 1', '1', 'Fall-15', 'pedro@sds.cl'),
(123, 'Pedro Carrasco Artigas', '1', '1', '1', 'pedro.carrasco.artigas@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `teachers`
--

CREATE TABLE `teachers` (
  `tc_id` int(20) NOT NULL,
  `tc_name` varchar(255) NOT NULL,
  `tc_dept` varchar(255) NOT NULL,
  `tc_email` varchar(255) NOT NULL,
  `tc_course` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_sueldo`
--

CREATE TABLE `tipo_sueldo` (
  `id` int(11) NOT NULL,
  `tipo_sueldo` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipo_sueldo`
--

INSERT INTO `tipo_sueldo` (`id`, `tipo_sueldo`) VALUES
(1, 'Diario'),
(2, 'Mensual');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajadores`
--

CREATE TABLE `trabajadores` (
  `tr_id` int(20) NOT NULL,
  `tr_nombre` varchar(50) NOT NULL,
  `tr_obra` varchar(20) NOT NULL,
  `tr_rut` varchar(10) NOT NULL,
  `tr_telefono` int(11) NOT NULL,
  `tr_email` varchar(50) NOT NULL,
  `tr_fecha_nacimiento` date NOT NULL,
  `tr_sexo` varchar(20) NOT NULL,
  `tr_direccion` varchar(50) NOT NULL,
  `tr_cargo` varchar(50) NOT NULL,
  `tr_fecha_ingreso` date NOT NULL,
  `tr_sueldo_pactado` int(11) NOT NULL,
  `tr_tipo_sueldo` int(11) NOT NULL,
  `tr_contratado` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `trabajadores`
--

INSERT INTO `trabajadores` (`tr_id`, `tr_nombre`, `tr_obra`, `tr_rut`, `tr_telefono`, `tr_email`, `tr_fecha_nacimiento`, `tr_sexo`, `tr_direccion`, `tr_cargo`, `tr_fecha_ingreso`, `tr_sueldo_pactado`, `tr_tipo_sueldo`, `tr_contratado`) VALUES
(1, 'Carrasco', '2', '203110340', 343434, 'pedor@dksds.cl', '2021-05-12', 'Masculino', 'Arza 1021', 'Maestro', '2021-12-12', 1000000, 1, 'No'),
(2, 'Alonso Carrasco', '2', '111111-1', 99912392, 'alonso@dfd.cl', '0000-00-00', '', '', '', '0000-00-00', 2982982, 1, ''),
(3, 'Diego Carrasco', '1', '4322-1', 8283921, 'diego@dfs.cl', '0000-00-00', '', '', '', '0000-00-00', 3723892, 1, ''),
(4, 'Juan Perez', '1', '12800260-k', 9999999, 'juan@gmail.com', '0000-00-00', '', '', '', '0000-00-00', 39823, 1, ''),
(5, 'Juancho Pancho', '1', '203110340', 999999999, 'pedor@dkslds.cl', '2021-05-10', 'Masculino', 'Arza 1021', 'Maestro', '2021-01-20', 1000000, 1, 'Si'),
(6, 'Camilo Rodriguez', '3', '20311034-0', 961439571, 'aditigkapadia@gmail.com', '2021-04-28', 'Masculino', 'Arza 1021', 'Maestro', '2021-05-13', 1000000, 1, 'No'),
(7, 'kldajskl', '6', '382389', 961439571, 'dasdas@kdls.cl', '2313-03-12', 'Femenino', 'Arza 1021', 'jefefinal', '2012-03-12', 928392, 1, 'No'),
(8, 'mamama', '1', '2012312', 961439571, 'pedorp2@sdls.cl', '2000-03-12', 'Femenino', 'Arza 1021', 'edoprp', '2021-03-21', 99999, 1, 'No'),
(9, 'wuewieuwi', '6', '823912', 961439571, 'jaklsdas@sjdks.cl', '2021-02-23', 'Masculino', 'Arza 1021', 'pedorpo', '2020-03-12', 131321, 1, 'No');

-- --------------------------------------------------------

--
-- Estructura para la vista `reportes`
--
DROP TABLE IF EXISTS `reportes`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `reportes`  AS  select `trabajadores`.`tr_id` AS `tr_id`,`trabajadores`.`tr_nombre` AS `tr_nombre`,`trabajadores`.`tr_obra` AS `tr_obra`,`trabajadores`.`tr_rut` AS `tr_rut`,`asistencia`.`fecha` AS `fecha`,`asistencia`.`estado` AS `estado`,`asistencia`.`obra` AS `obra` from (`asistencia` join `trabajadores`) where `trabajadores`.`tr_id` = `asistencia`.`tr_id` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `reports`
--
DROP TABLE IF EXISTS `reports`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `reports`  AS  select `students`.`st_id` AS `st_id`,`students`.`st_name` AS `st_name`,`students`.`st_dept` AS `st_dept`,`students`.`st_batch` AS `st_batch`,`attendance`.`stat_date` AS `stat_date`,`attendance`.`st_status` AS `st_status`,`attendance`.`course` AS `course` from (`attendance` join `students`) where `students`.`st_id` = `attendance`.`stat_id` ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `admininfo`
--
ALTER TABLE `admininfo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario-rol` (`id_rol`),
  ADD KEY `obra-usuario` (`obra_asignada`);

--
-- Indices de la tabla `obra`
--
ALTER TABLE `obra`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `obras`
--
ALTER TABLE `obras`
  ADD PRIMARY KEY (`id_obra`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`st_id`);

--
-- Indices de la tabla `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`tc_id`);

--
-- Indices de la tabla `tipo_sueldo`
--
ALTER TABLE `tipo_sueldo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `trabajadores`
--
ALTER TABLE `trabajadores`
  ADD PRIMARY KEY (`tr_id`),
  ADD KEY `tr_tipo_sueldo` (`tr_tipo_sueldo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `admininfo`
--
ALTER TABLE `admininfo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `obra`
--
ALTER TABLE `obra`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `obras`
--
ALTER TABLE `obras`
  MODIFY `id_obra` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tipo_sueldo`
--
ALTER TABLE `tipo_sueldo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `trabajadores`
--
ALTER TABLE `trabajadores`
  MODIFY `tr_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `admininfo`
--
ALTER TABLE `admininfo`
  ADD CONSTRAINT `obra-usuario` FOREIGN KEY (`obra_asignada`) REFERENCES `obras` (`id_obra`),
  ADD CONSTRAINT `usuario-rol` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id`);

--
-- Filtros para la tabla `trabajadores`
--
ALTER TABLE `trabajadores`
  ADD CONSTRAINT `tr_tipo_sueldo` FOREIGN KEY (`tr_tipo_sueldo`) REFERENCES `tipo_sueldo` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

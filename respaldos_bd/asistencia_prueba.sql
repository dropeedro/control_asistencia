-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 23-05-2021 a las 22:57:22
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
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fname` varchar(30) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `type` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `admininfo`
--

INSERT INTO `admininfo` (`username`, `password`, `email`, `fname`, `phone`, `type`) VALUES
('admin', 'admin', 'admin@admin.com', 'Admin', '12344', 'admin'),
('admin', 'admin', 'teacher@teacher.com', 'Teacher', '+8809121', 'teacher'),
('student', 'admin', 'student@student.com', 'Student', '+8809121', 'student');

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
(3, '1', 'Aucente', '2021-05-10'),
(1, '2', 'Presente', '2021-05-10'),
(2, '2', 'Presente', '2021-05-10'),
(1, '2', 'Aucente', '2021-05-10'),
(2, '2', 'Aucente', '2021-05-10'),
(3, '1', 'Aucente', '2021-05-10'),
(3, '1', 'Ausente', '2021-05-10'),
(1, '2', 'Ausente', '2021-05-10'),
(2, '2', 'Presente', '2021-05-10'),
(1, '2', 'Ausente', '2021-05-17'),
(2, '2', 'Presente', '2021-05-17'),
(3, '1', 'Ausente', '2021-05-17'),
(4, '1', 'Licencia', '2021-05-17'),
(1, '2', 'Presente', '2021-05-19'),
(2, '2', 'Presente', '2021-05-19'),
(1, '2', 'Ausente', '2021-05-19'),
(2, '2', 'Presente', '2021-05-19'),
(1, '2', 'Licencia', '2021-05-23'),
(2, '2', 'Ausente', '2021-05-23'),
(6, '2', 'Permiso', '2021-05-23');

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
-- Estructura de tabla para la tabla `obras`
--

CREATE TABLE `obras` (
  `id_obra` int(10) NOT NULL,
  `nombre_obra` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `obras`
--

INSERT INTO `obras` (`id_obra`, `nombre_obra`) VALUES
(1, 'obra1'),
(2, 'obra2');

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
  `tr_contratado` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `trabajadores`
--

INSERT INTO `trabajadores` (`tr_id`, `tr_nombre`, `tr_obra`, `tr_rut`, `tr_telefono`, `tr_email`, `tr_fecha_nacimiento`, `tr_sexo`, `tr_direccion`, `tr_cargo`, `tr_fecha_ingreso`, `tr_sueldo_pactado`, `tr_contratado`) VALUES
(1, 'Carrasco', '2', '203110340', 343434, 'pedor@dksds.cl', '2021-05-12', 'Masculino', 'Arza 1021', 'Maestro', '2021-12-12', 1000000, 'No'),
(2, 'Alonso Carrasco', '2', '111111-1', 99912392, 'alonso@dfd.cl', '0000-00-00', '', '', '', '0000-00-00', 0, ''),
(3, 'Diego Carrasco', '1', '4322-1', 8283921, 'diego@dfs.cl', '0000-00-00', '', '', '', '0000-00-00', 0, ''),
(4, 'Juan Perez', '1', '12800260-k', 9999999, 'juan@gmail.com', '0000-00-00', '', '', '', '0000-00-00', 0, ''),
(5, 'Juancho Pancho', '1', '203110340', 999999999, 'pedor@dkslds.cl', '2021-05-10', 'Masculino', 'Arza 1021', 'Maestro', '2021-01-20', 1000000, 'Si'),
(6, 'Camilo Rodriguez', '2', '20311034-0', 961439571, 'aditigkapadia@gmail.com', '2021-04-28', 'Masculino', 'Arza 1021', 'Maestro', '2021-05-13', 1000000, 'No');

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
  ADD UNIQUE KEY `username` (`username`,`email`);

--
-- Indices de la tabla `obras`
--
ALTER TABLE `obras`
  ADD PRIMARY KEY (`id_obra`);

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
-- Indices de la tabla `trabajadores`
--
ALTER TABLE `trabajadores`
  ADD PRIMARY KEY (`tr_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `obras`
--
ALTER TABLE `obras`
  MODIFY `id_obra` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `trabajadores`
--
ALTER TABLE `trabajadores`
  MODIFY `tr_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

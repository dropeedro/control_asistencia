-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 03-10-2021 a las 22:10:13
-- Versión del servidor: 5.7.31-cll-lve
-- Versión de PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cco66325_asistencia`
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
(1, 'Admin', '', 'admin', 'Pedrito0218', 'admin@admin.com', '12344', 1, 1),
(2, 'Pedro', 'Carrasco', 'pcarrasco', 'pcarrasco0475', 'p.carrasco1@hotmail.com', '', 1, 1),
(3, 'Moises', 'Pï¿½rez', 'moises.perez', 'mperez2021', '', '942715913', 2, 1),
(4, 'Nicolas', 'Pinto', 'nicolas.pinto', 'npinto2021', '', '920749645', 2, 1),
(5, 'Nicolas', 'Ceron', 'nicolas.ceron', 'nceron2021', '', '', 2, 3),
(6, 'Miguel', 'Jimenez', 'miguel.jimenez', 'mjimenez2021', '', '959320914', 2, 2),
(7, 'Prueba', 'Jefe Obra', 'admin_jefe', 'jefecito_pruebas', '', '', 2, 1),
(8, 'Carlos', 'Macias', 'cmacias', 'cmacias2021', '', '5693699 3096', 2, 3);

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
(2, '2', 'Presente', '2021-06-07'),
(3, '2', 'Presente', '2021-06-07'),
(4, '2', 'Presente', '2021-06-07'),
(5, '2', 'Presente', '2021-06-07'),
(6, '2', 'Presente', '2021-06-07'),
(7, '2', 'Presente', '2021-06-07'),
(8, '2', 'Presente', '2021-06-07'),
(9, '2', 'Presente', '2021-06-07'),
(2, '2', 'Presente', '2021-06-08'),
(3, '2', 'Presente', '2021-06-08'),
(4, '2', 'Presente', '2021-06-08'),
(5, '2', 'Presente', '2021-06-08'),
(6, '2', 'Presente', '2021-06-08'),
(7, '2', 'Presente', '2021-06-08'),
(8, '2', 'Presente', '2021-06-08'),
(9, '2', 'Presente', '2021-06-08'),
(10, '2', 'Presente', '2021-06-08'),
(1, '1', 'Presente', '2021-06-08'),
(11, '1', 'Presente', '2021-06-08'),
(12, '1', 'Presente', '2021-06-08'),
(13, '1', 'Presente', '2021-06-08'),
(14, '1', 'Presente', '2021-06-08'),
(15, '1', 'Presente', '2021-06-08'),
(16, '1', 'Presente', '2021-06-08'),
(17, '1', 'Presente', '2021-06-08'),
(18, '1', 'Presente', '2021-06-08'),
(19, '1', 'Presente', '2021-06-08'),
(20, '1', 'Presente', '2021-06-08'),
(21, '1', 'Presente', '2021-06-08'),
(22, '3', 'Presente', '2021-06-08'),
(23, '3', 'Presente', '2021-06-08'),
(24, '3', 'Presente', '2021-06-08'),
(25, '3', 'Presente', '2021-06-08'),
(26, '3', 'Licencia', '2021-06-08'),
(27, '3', 'Presente', '2021-06-08'),
(22, '3', 'Presente', '2021-06-09'),
(23, '3', 'Presente', '2021-06-09'),
(24, '3', 'Presente', '2021-06-09'),
(25, '3', 'Presente', '2021-06-09'),
(26, '3', 'Licencia', '2021-06-09'),
(27, '3', 'Presente', '2021-06-09'),
(1, '1', 'Presente', '2021-06-09'),
(11, '1', 'Presente', '2021-06-09'),
(12, '1', 'Ausente', '2021-06-09'),
(13, '1', 'Presente', '2021-06-09'),
(14, '1', 'Presente', '2021-06-09'),
(15, '1', 'Presente', '2021-06-09'),
(16, '1', 'Presente', '2021-06-09'),
(17, '1', 'Presente', '2021-06-09'),
(18, '1', 'Presente', '2021-06-09'),
(19, '1', 'Ausente', '2021-06-09'),
(20, '1', 'Presente', '2021-06-09'),
(21, '1', 'Presente', '2021-06-09'),
(2, '2', 'Presente', '2021-06-09'),
(3, '2', 'Presente', '2021-06-09'),
(4, '2', 'Presente', '2021-06-09'),
(5, '2', 'Presente', '2021-06-09'),
(6, '2', 'Presente', '2021-06-09'),
(7, '2', 'Presente', '2021-06-09'),
(8, '2', 'Presente', '2021-06-09'),
(9, '2', 'Presente', '2021-06-09'),
(10, '2', 'Presente', '2021-06-09'),
(22, '3', 'Presente', '2021-06-10'),
(23, '3', 'Presente', '2021-06-10'),
(24, '3', 'Presente', '2021-06-10'),
(25, '3', 'Presente', '2021-06-10'),
(26, '3', 'Licencia', '2021-06-10'),
(27, '3', 'Presente', '2021-06-10'),
(2, '2', 'Presente', '2021-06-10'),
(3, '2', 'Presente', '2021-06-10'),
(4, '2', 'Presente', '2021-06-10'),
(5, '2', 'Presente', '2021-06-10'),
(6, '2', 'Presente', '2021-06-10'),
(7, '2', 'Presente', '2021-06-10'),
(8, '2', 'Presente', '2021-06-10'),
(9, '2', 'Presente', '2021-06-10'),
(10, '2', 'Presente', '2021-06-10'),
(1, '1', 'Presente', '2021-06-11'),
(11, '1', 'Presente', '2021-06-11'),
(12, '1', 'Presente', '2021-06-11'),
(13, '1', 'Presente', '2021-06-11'),
(14, '1', 'Presente', '2021-06-11'),
(15, '1', 'Presente', '2021-06-11'),
(16, '1', 'Presente', '2021-06-11'),
(17, '1', 'Presente', '2021-06-11'),
(18, '1', 'Presente', '2021-06-11'),
(19, '1', 'Presente', '2021-06-11'),
(20, '1', 'Presente', '2021-06-11'),
(21, '1', 'Presente', '2021-06-11'),
(2, '2', 'Presente', '2021-06-11'),
(3, '2', 'Presente', '2021-06-11'),
(4, '2', 'Presente', '2021-06-11'),
(5, '2', 'Presente', '2021-06-11'),
(6, '2', 'Presente', '2021-06-11'),
(7, '2', 'Presente', '2021-06-11'),
(8, '2', 'Presente', '2021-06-11'),
(9, '2', 'Presente', '2021-06-11'),
(10, '2', 'Presente', '2021-06-11'),
(22, '3', 'Presente', '2021-06-11'),
(23, '3', 'Presente', '2021-06-11'),
(24, '3', 'Presente', '2021-06-11'),
(25, '3', 'Presente', '2021-06-11'),
(26, '3', 'Presente', '2021-06-11'),
(27, '3', 'Presente', '2021-06-11'),
(1, '1', 'Presente', '2021-06-14'),
(11, '1', 'Presente', '2021-06-14'),
(12, '1', 'Presente', '2021-06-14'),
(13, '1', 'Presente', '2021-06-14'),
(14, '1', 'Presente', '2021-06-14'),
(15, '1', 'Ausente', '2021-06-14'),
(16, '1', 'Presente', '2021-06-14'),
(17, '1', 'Presente', '2021-06-14'),
(18, '1', 'Presente', '2021-06-14'),
(19, '1', 'Presente', '2021-06-14'),
(20, '1', 'Presente', '2021-06-14'),
(21, '1', 'Presente', '2021-06-14'),
(2, '2', 'Presente', '2021-06-14'),
(3, '2', 'Ausente', '2021-06-14'),
(4, '2', 'Presente', '2021-06-14'),
(5, '2', 'Presente', '2021-06-14'),
(6, '2', 'Presente', '2021-06-14'),
(7, '2', 'Presente', '2021-06-14'),
(8, '2', 'Ausente', '2021-06-14'),
(9, '2', 'Presente', '2021-06-14'),
(10, '2', 'Ausente', '2021-06-14'),
(1, '1', 'Presente', '2021-06-15'),
(11, '1', 'Presente', '2021-06-15'),
(12, '1', 'Presente', '2021-06-15'),
(13, '1', 'Presente', '2021-06-15'),
(14, '1', 'Presente', '2021-06-15'),
(15, '1', 'Ausente', '2021-06-15'),
(16, '1', 'Presente', '2021-06-15'),
(17, '1', 'Presente', '2021-06-15'),
(18, '1', 'Presente', '2021-06-15'),
(19, '1', 'Presente', '2021-06-15'),
(20, '1', 'Presente', '2021-06-15'),
(21, '1', 'Presente', '2021-06-15'),
(22, '3', 'Presente', '2021-06-15'),
(23, '3', 'Presente', '2021-06-15'),
(24, '3', 'Presente', '2021-06-15'),
(25, '3', 'Presente', '2021-06-15'),
(1, '1', 'Presente', '2021-06-16'),
(11, '1', 'Presente', '2021-06-16'),
(12, '1', 'Presente', '2021-06-16'),
(13, '1', 'Presente', '2021-06-16'),
(14, '1', 'Presente', '2021-06-16'),
(15, '1', 'Presente', '2021-06-16'),
(16, '1', 'Presente', '2021-06-16'),
(17, '1', 'Licencia', '2021-06-16'),
(18, '1', 'Presente', '2021-06-16'),
(19, '1', 'Presente', '2021-06-16'),
(20, '1', 'Presente', '2021-06-16'),
(21, '1', 'Presente', '2021-06-16'),
(2, '2', 'Presente', '2021-06-16'),
(3, '2', 'Presente', '2021-06-16'),
(4, '2', 'Presente', '2021-06-16'),
(5, '2', 'Presente', '2021-06-16'),
(6, '2', 'Ausente', '2021-06-16'),
(7, '2', 'Ausente', '2021-06-16'),
(8, '2', 'Presente', '2021-06-16'),
(9, '2', 'Presente', '2021-06-16'),
(10, '2', 'Presente', '2021-06-16'),
(22, '3', 'Presente', '2021-06-16'),
(23, '3', 'Presente', '2021-06-16'),
(24, '3', 'Presente', '2021-06-16'),
(25, '3', 'Presente', '2021-06-16'),
(2, '2', 'Presente', '2021-06-18'),
(3, '2', 'Presente', '2021-06-18'),
(4, '2', 'Presente', '2021-06-18'),
(5, '2', 'Presente', '2021-06-18'),
(6, '2', 'Presente', '2021-06-18'),
(7, '2', 'Presente', '2021-06-18'),
(8, '2', 'Presente', '2021-06-18'),
(9, '2', 'Presente', '2021-06-18'),
(10, '2', 'Presente', '2021-06-18'),
(22, '3', 'Presente', '2021-07-05'),
(23, '3', 'Presente', '2021-07-05'),
(24, '3', 'Permiso', '2021-07-05'),
(25, '3', 'Presente', '2021-07-05');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `encargado_obra`
--

CREATE TABLE `encargado_obra` (
  `id` int(11) NOT NULL,
  `obra` int(11) NOT NULL,
  `responsable` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `obras`
--

CREATE TABLE `obras` (
  `id_obra` int(10) NOT NULL,
  `nombre_obra` varchar(20) NOT NULL,
  `direccion_obra` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `obras`
--

INSERT INTO `obras` (`id_obra`, `nombre_obra`, `direccion_obra`) VALUES
(1, 'Casa Ignacio Castro', ''),
(2, 'Casa Lobos', ''),
(3, 'Casa Duarte Molina', 'Arza 1021'),
(4, 'EL OLIVETO', ''),
(5, 'REMODELACION RESTAUR', 'TALAGANTE ');

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
-- Estructura de tabla para la tabla `reports`
--

CREATE TABLE `reports` (
  `st_id` int(20) DEFAULT NULL,
  `st_name` varchar(255) DEFAULT NULL,
  `st_dept` varchar(255) DEFAULT NULL,
  `st_batch` varchar(255) DEFAULT NULL,
  `stat_date` date DEFAULT NULL,
  `st_status` varchar(20) DEFAULT NULL,
  `course` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
-- Estructura de tabla para la tabla `tipo_sueldo`
--

CREATE TABLE `tipo_sueldo` (
  `id` int(11) NOT NULL,
  `tipo_sueldo` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
(1, 'Pedro pablo peÃ±a valenzuela', '1', '186235800', 2147483647, '', '1993-10-12', 'Masculino', 'Teniente merino 1150 las hortencias talagante', 'Jornal', '2020-11-01', 500000, 1, 'Si'),
(2, 'LEONARDO ANDRES ZUÃ‘IGA ESPINOZA', '2', '17229055-8', 945137981, '', '1988-11-14', 'Masculino', 'LA RIVERA PASAJE 2 SUR 272 COLINA', 'ENFIERRADOR', '2021-06-01', 40000, 1, 'No'),
(3, 'HECTOR FELIPE MARQUEZ VARELA', '2', '13676485-3', 0, '', '1979-09-08', 'Masculino', 'CALLE TUCAPEL 079 VILLA LAS AGUILAS COLINA', 'ENFIERRADOR', '2021-06-01', 40000, 1, 'No'),
(4, 'JOEL ANCELMO MARTINEZ BARRIENTOS ', '2', '11497833-7', 957612473, '', '1969-03-12', 'Masculino', 'OSCAR BONILLA 165 COLINA ', 'CARPINTERO', '2021-06-01', 35000, 1, 'Si'),
(5, 'WILSON ANTONIO FERRADA CANALES', '2', '12543148-8', 947015970, '', '1973-11-18', 'Masculino', 'POBLACION OHIGGINS CALLE JAVIERA CARRERA CASA 669', 'CARPINTERO', '2021-06-01', 40000, 1, 'No'),
(6, 'ALBERTO JOSE RODRIGUEZ AROCHA', '2', '25837332-4', 972573427, 'albertoarocha2707@gmail.com', '2001-03-31', 'Masculino', 'CROACIA 1546 MAIPU ', 'AYUDANTE ', '2021-06-01', 500000, 1, 'No'),
(7, 'KEVIN STEVEN SUAREZ ALVAREZ', '2', '940904394 ', 972045376, 'ks7090097@gmail.com', '2001-11-25', 'Masculino', 'CROACIA 1546 MAIPU ', 'AYUDANTE ', '2021-06-01', 400000, 1, 'No'),
(8, 'MANUEL ANGEL SEPULVEDA HENRIQUEZ', '2', '12353232-5', 979540719, '', '1973-06-11', 'Masculino', 'POBLACION OHIGGINS CALLE JAVIERA CARRERA CASA 669', 'CARPINTERO', '2021-06-01', 40000, 1, 'Si'),
(9, 'MIGUEL ANGEL JIMENEZ SEPULVEDA', '2', '15417729-9', 959320914, 'miguel.js7979@gmail.com', '1979-04-11', 'Masculino', 'VILLA LA RIVERA PASAJE 2 SUR 279 COLINA ', 'JEFE DE OBRA', '2021-06-01', 1200000, 1, 'No'),
(10, 'HUGO ISAAC TORRES SOTO', '2', '18813534-k', 959320914, '', '1994-05-23', 'Masculino', 'LAS AGUILAS PASAJE JOSE MIGUEL CARRERA 097 COLINA ', 'CARPINTERO', '2021-06-01', 35000, 1, 'No'),
(11, 'Zabdiel moises perez caprile', '1', '12541932-1', 942715913, 'zabdielcaprile@hotmail.com', '1973-05-10', 'Masculino', 'Av jaime guzmana 409', 'Logistica', '2021-03-01', 800000, 1, 'Si'),
(12, 'Witchel celan', '1', '26362549-9', 2147483647, '', '1992-05-25', 'Masculino', 'El maiten calle caperana 44 la islita', 'Jornal', '2021-03-01', 450000, 1, 'Si'),
(13, 'Pedro pablo peÃ±a valenzuela', '1', '18623580-0', 2147483647, '', '1993-10-12', 'Masculino', 'Teniente merino 1150 las hortencias talagante', 'Jornal', '0000-00-00', 500000, 1, 'Si'),
(14, 'Hector onell abarca', '1', '13557984-k', 2147483647, '', '1978-11-27', 'Masculino', 'Villa los poetas psj nicanor parra 1875 el monte', 'Maestro carpintero', '2021-03-01', 1000000, 1, 'Si'),
(15, 'Eduardo willi nina calderon', '1', '26315451-k', 2147483647, '', '1969-10-13', 'Masculino', 'Poblacion 14 de diciembre psj el belloto 1279 meli', 'Enfierrador', '0000-00-00', 750000, 1, 'Si'),
(16, 'Carlos jose macias varela', '1', '27136623-k', 2147483647, '', '1974-07-27', 'Masculino', 'Teniente merino 1059 talagante', 'Maestro', '2021-03-01', 750000, 1, 'Si'),
(17, 'Wisly causeme', '1', '26651512-k', 2147483647, '', '1993-02-14', 'Masculino', 'Lo herrera 366 isla de maipo', 'Jornal', '0000-00-00', 650000, 1, 'Si'),
(18, 'Guillermo nicolas pinto bravo', '1', '17957196-k', 2147483647, '', '1991-04-23', 'Masculino', 'Villa galilea psj franz liszt 201 melipilla', 'Jefe de obra', '2021-04-01', 1200000, 1, 'Si'),
(19, 'Roberson sainvilus', '1', '26392506-8', 2147483647, '', '1991-02-21', 'Masculino', 'Vista hermosa 4033 la islita', 'Jornal', '2021-03-01', 450000, 1, 'Si'),
(20, 'Witchel celan', '1', '26362549-9', 2147483647, '', '1992-05-25', 'Masculino', 'El maiten calle caperana 44 la islita', 'Jornal', '2021-03-01', 450000, 1, 'Si'),
(21, 'Wisly causeme', '1', '26651512-k', 2147483647, '', '1993-04-14', 'Masculino', 'Lo herrera 366 isla de maipo', 'Jornal', '0000-00-00', 750000, 1, 'Si'),
(22, 'francisco junior VerdÃº Manrique', '3', '100461169', 940506799, 'jverdu411@gmail.com', '1996-10-09', 'Masculino', 'santa ana 85', 'ayudante de maestro', '2021-01-04', 520000, 1, 'no'),
(23, 'Nicolas Gabriel Ceron Vega', '3', '184486822', 961192375, 'nicolasceronv@gmail.com', '1993-10-12', 'Masculino', 'padre alonso de ovalle 884', 'jefe de obra', '2020-12-01', 1200000, 1, 'Si'),
(24, 'Ignacio Antonio Gonzalez Vielma', '3', '271242034', 940001899, 'qlqperu@gmail.com', '1999-12-03', 'Masculino', 'edison 4342', 'ayudante maestro', '2020-10-12', 500000, 1, 'Si'),
(25, 'ramiro prado quiÃ±onez', '3', '', 972415216, '', '1966-10-20', 'Masculino', 'roberto espinoza 1433', 'ayudante de maestro', '2021-02-02', 550000, 1, 'No'),
(26, 'claudio antonio troncoso zamora', '3', '13185627k', 957380582, 'catztron@gmail.com', '1976-01-22', 'Masculino', 'combate de chipana 1655', 'carpintero', '2020-12-07', 800000, 2, 'Si'),
(27, 'adrian hernan garcia', '3', '263994183', 994912620, 'adrianhernangarcia@outlook.com', '1985-09-21', 'Masculino', 'emilio sanchez sandoval 73', 'maestro exacta', '2021-03-01', 620000, 0, 'No'),
(28, 'kevin walter gutierrez rodriguez', '3', '958141293', 920221263, 'kg556916@gmail.com', '1997-06-16', 'Masculino', 'maipu croacia 1546', 'ayudante avanzado exacta', '2021-06-14', 700000, 2, 'No'),
(29, 'adrian hernan garcia', '3', '263994183', 994912620, 'adrianhernangarcia@outlook.com', '1985-09-21', 'Masculino', 'emilio sanchez sandoval 73', 'maestro exacta', '2021-03-01', 640000, 2, 'No');

-- --------------------------------------------------------

--
-- Estructura para la vista `reportes`
--
DROP TABLE IF EXISTS `reportes`;

CREATE ALGORITHM=UNDEFINED DEFINER=`cco66325`@`localhost` SQL SECURITY DEFINER VIEW `reportes`  AS  select `trabajadores`.`tr_id` AS `tr_id`,`trabajadores`.`tr_nombre` AS `tr_nombre`,`trabajadores`.`tr_obra` AS `tr_obra`,`trabajadores`.`tr_rut` AS `tr_rut`,`asistencia`.`fecha` AS `fecha`,`asistencia`.`estado` AS `estado`,`asistencia`.`obra` AS `obra` from (`asistencia` join `trabajadores`) where (`trabajadores`.`tr_id` = `asistencia`.`tr_id`) ;

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
-- Indices de la tabla `encargado_obra`
--
ALTER TABLE `encargado_obra`
  ADD PRIMARY KEY (`id`),
  ADD KEY `obra_obra` (`obra`),
  ADD KEY `responsable_responsable` (`responsable`);

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
-- Indices de la tabla `tipo_sueldo`
--
ALTER TABLE `tipo_sueldo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `trabajadores`
--
ALTER TABLE `trabajadores`
  ADD PRIMARY KEY (`tr_id`),
  ADD KEY `trabajador-obra` (`tr_obra`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `admininfo`
--
ALTER TABLE `admininfo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `encargado_obra`
--
ALTER TABLE `encargado_obra`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `obras`
--
ALTER TABLE `obras`
  MODIFY `id_obra` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `tipo_sueldo`
--
ALTER TABLE `tipo_sueldo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `trabajadores`
--
ALTER TABLE `trabajadores`
  MODIFY `tr_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `admininfo`
--
ALTER TABLE `admininfo`
  ADD CONSTRAINT `usuario-rol` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id`);

--
-- Filtros para la tabla `encargado_obra`
--
ALTER TABLE `encargado_obra`
  ADD CONSTRAINT `obra_obra` FOREIGN KEY (`obra`) REFERENCES `obras` (`id_obra`),
  ADD CONSTRAINT `responsable_responsable` FOREIGN KEY (`responsable`) REFERENCES `admininfo` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

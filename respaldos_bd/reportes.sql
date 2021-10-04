-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 24-05-2021 a las 00:09:40
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
-- Estructura para la vista `reportes`
--

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `reportes`  AS  select `trabajadores`.`tr_id` AS `tr_id`,`trabajadores`.`tr_nombre` AS `tr_nombre`,`trabajadores`.`tr_obra` AS `tr_obra`,`trabajadores`.`tr_rut` AS `tr_rut`,`asistencia`.`fecha` AS `fecha`,`asistencia`.`estado` AS `estado`,`asistencia`.`obra` AS `obra` from (`asistencia` join `trabajadores`) where `trabajadores`.`tr_id` = `asistencia`.`tr_id` ;

--
-- VIEW `reportes`
-- Datos: Ninguna
--

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 05, 2018 at 08:29 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `masterdetails`
--

-- --------------------------------------------------------

--
-- Table structure for table `employeetable`
--

CREATE TABLE IF NOT EXISTS `employeetable` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` text NOT NULL,
  `Designation` text NOT NULL,
  `Company` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=45 ;

--
-- Dumping data for table `employeetable`
--

INSERT INTO `employeetable` (`ID`, `Name`, `Designation`, `Company`) VALUES
(27, 'Serena', 'BA', 'OLC'),
(39, 'Blair', 'BA', 'DFZ'),
(41, 'Dan', 'Developer', 'Google'),
(42, 'John', 'Manager', 'Amazon'),
(43, 'Doe', 'BA', 'Microsoft'),
(44, 'Alex', 'Developer', 'Facebook');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 27, 2018 at 10:05 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mini_tododb`
--

-- --------------------------------------------------------

--
-- Table structure for table `todos`
--

CREATE TABLE `todos` (
  `id` int(11) NOT NULL,
  `_id` varchar(200) NOT NULL,
  `task` varchar(200) NOT NULL,
  `order` int(10) UNSIGNED NOT NULL,
  `completed` enum('false','true') NOT NULL DEFAULT 'false',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `todos`
--

INSERT INTO `todos` (`id`, `_id`, `task`, `order`, `completed`, `timestamp`) VALUES
(1, 'dogPzIz8', 'Make a ginger tea', 1, 'true', '2018-08-21 10:16:03'),
(2, 'a4vhAoFG', 'Feed a dog, Tails', 2, 'false', '2018-08-21 10:16:03'),
(5, '2WEKaVNO', 'Walk a hedgehog, Sonic', 3, 'false', '2018-08-21 10:16:03'),
(6, 'nYrnfYEv', 'complete Task', 4, 'false', '2018-08-21 10:16:03'),
(10, '2TEKa23XYO', 'Make a cup of coffee', 0, 'false', '2018-09-10 22:11:59'),
(11, '2TEKa3g23XYO', 'Make some Tea', 5, 'false', '2018-09-23 20:47:55');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `todos`
--
ALTER TABLE `todos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `todos`
--
ALTER TABLE `todos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

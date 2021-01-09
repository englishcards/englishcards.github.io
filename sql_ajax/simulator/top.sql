-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Янв 09 2021 г., 09:29
-- Версия сервера: 10.4.11-MariaDB
-- Версия PHP: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `sqltrainer`
--

-- --------------------------------------------------------

--
-- Структура таблицы `top`
--

CREATE TABLE `top` (
  `id` int(2) NOT NULL,
  `name` varchar(25) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `sport` varchar(15) DEFAULT NULL,
  `nation` char(2) DEFAULT NULL,
  `total` decimal(4,1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `top`
--

INSERT INTO `top` (`id`, `name`, `birthday`, `sport`, `nation`, `total`) VALUES
(1, 'Floyd Mayweather', '1977-02-24', 'boxing', 'us', '698.3'),
(2, 'Cristiano Ronaldo', '1985-02-05', 'football', 'pt', '610.5'),
(3, 'Lionel Messi', '1987-06-24', 'football', 'ar', '572.4'),
(4, 'LeBron James', '1984-12-30', 'basketball', 'us', '518.9'),
(5, 'Roger Federer', '1981-08-08', 'tennis', 'ch', '488.3'),
(6, 'Tiger Woods', '1975-12-30', 'golf', 'us', '469.2'),
(7, 'Phil Mickelson', '1970-06-16', 'golf', 'us', '366.2'),
(8, 'Manny Pacquiao', '1978-12-17', 'boxing', 'ph', '331.9'),
(9, 'Kevin Durant', '1988-09-29', 'basketball', 'us', '324.2'),
(10, 'Lewis Hamilton', '1985-01-07', 'racing', 'gb', '305.2');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `top`
--
ALTER TABLE `top`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `top`
--
ALTER TABLE `top`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

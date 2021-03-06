-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Янв 09 2021 г., 10:19
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
-- База данных: `sql_tutorial`
--

-- --------------------------------------------------------

--
-- Структура таблицы `key_sql`
--

CREATE TABLE `key_sql` (
  `id` int(1) NOT NULL,
  `key_value` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `key_sql`
--

INSERT INTO `key_sql` (`id`, `key_value`) VALUES
(1, '1');

-- --------------------------------------------------------

--
-- Структура таблицы `quiz`
--

CREATE TABLE `quiz` (
  `id` int(5) NOT NULL,
  `test_1` int(3) DEFAULT NULL,
  `test_2` int(3) DEFAULT NULL,
  `test_time` int(3) DEFAULT NULL,
  `test_practice` int(3) DEFAULT NULL,
  `test_practice_2` int(3) DEFAULT NULL,
  `id_users` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `quiz`
--

INSERT INTO `quiz` (`id`, `test_1`, `test_2`, `test_time`, `test_practice`, `test_practice_2`, `id_users`) VALUES
(1, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `token_sql`
--

CREATE TABLE `token_sql` (
  `id` int(5) NOT NULL,
  `token` varchar(80) DEFAULT NULL,
  `id_users` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `token_sql`
--

INSERT INTO `token_sql` (`id`, `token`, `id_users`) VALUES
(1, NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(5) NOT NULL,
  `first_name` varchar(20) DEFAULT NULL,
  `last_name` varchar(20) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `task_1` char(1) NOT NULL DEFAULT '-',
  `task_2` char(1) NOT NULL DEFAULT '-',
  `password` varchar(40) DEFAULT NULL,
  `date_create` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `task_1`, `task_2`, `password`, `date_create`) VALUES
(1, NULL, NULL, NULL, '-', '-', NULL, '2021-01-09 09:19:16');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `key_sql`
--
ALTER TABLE `key_sql`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `token_sql`
--
ALTER TABLE `token_sql`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `key_sql`
--
ALTER TABLE `key_sql`
  MODIFY `id` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `quiz`
--
ALTER TABLE `quiz`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `token_sql`
--
ALTER TABLE `token_sql`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Июн 27 2020 г., 09:51
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
-- База данных: `words`
--

-- --------------------------------------------------------

--
-- Структура таблицы `words`
--

CREATE TABLE `words` (
  `id` int(10) NOT NULL,
  `english` varchar(100) NOT NULL,
  `transcription` varchar(100) NOT NULL,
  `russian` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `words`
--

INSERT INTO `words` (`id`, `english`, `transcription`, `russian`) VALUES
(1, 'Carol', 'ˈkærəl', 'Колядка'),
(2, 'How come?', 'haʊ kʌm', 'Как так?'),
(3, 'Go caroling', 'ˈkærəl', 'Колядовать'),
(4, 'Recall', 'ˈrɪˈkɔːl', 'Вспоминать'),
(5, 'Recall', 'ˈrɪˈkɔːl', 'Отзывать'),
(6, 'Carol', 'ˈkærəl', 'Отзывать'),
(7, 'Straighten out', 'ˈˈstreɪtn aʊt', 'Приводить в порядок'),
(8, 'Assemble', 'ˈəˈsembl', 'Собирать'),
(9, 'Get rid of', 'ˈɡet rɪd', 'Избавиться от'),
(10, 'Forge', 'ˈfɔːrdʒ', 'Подделывать'),
(11, 'Forge', 'ˈfɔːrdʒ', 'Кузница'),
(12, 'Falsify', 'ˈfɔːlsɪfaɪ', 'Подделывать'),
(13, 'In person', 'ɪn ˈpɜːrsn', 'Лично'),
(14, 'Sue', 'suː', 'Предъявлять иск'),
(15, 'Chuckle', 'ˈtʃʌkl', 'Хихикать'),
(16, 'Giggle', 'ˈɡɪɡl', 'Хихикать'),
(17, 'My condolence', 'maɪ kənˈdoʊləns', 'Примите моё соболезнование'),
(18, 'Put behind bars', 'pʊt bɪˈhaɪnd bɑːrz', 'Посадить за решётку'),
(19, 'Smother', 'ˈsmʌðər', 'Душить'),
(20, 'Suffocate', 'ˈsʌfəkeɪt', 'Душить'),
(21, 'Fishy', 'ˈfɪʃi', 'Подозрительно'),
(22, 'Superficial', 'ˌsuːpərˈfɪʃl', 'Поверхностный, неглубокий'),
(23, 'Suffocation', 'ˌsʌfəˈkeɪʃən', 'Удушение'),
(24, 'Strangle', 'ˈstræŋɡl', 'Удавить'),
(25, 'Coward', 'ˈkaʊərd', 'Трус'),
(26, 'Brew', 'bruː', 'Заваривать'),
(27, 'Convicted', 'kənˈvɪktəd', 'Осужденный'),
(28, 'Convicted on fraud charges', 'kənˈvɪktəd', 'Обвинен в мошенничестве'),
(29, 'Convicted of doing something ', 'kənˈvɪktəd', 'Обвинение за действия'),
(30, 'See off', 'ˈsiː ˈɒf', 'Провожать'),
(31, 'Pathetic', 'pəˈθetɪk', 'Жалкий'),
(32, 'Do it on purpose', 'ɑːn ˈpɜːrpəs', 'Сделать нарочно, специально'),
(33, 'Milk a cow', 'mɪlk ə kaʊ', 'Доить корову'),
(34, 'Do pull-ups', 'duː pʊl ʌps', 'Подтягиваться'),
(35, 'Do squats', 'duː skwɑːts', 'Делать приседания'),
(36, 'Squat', 'skwɑːt', 'Сидение на корточках'),
(37, 'Lift weights', 'lɪft ˈweɪts', 'Поднимать штангу'),
(38, 'Do yoga', 'duː ˈjoʊɡə', 'Заниматься йогой'),
(39, 'Diaper', 'ˈdaɪpər', 'Подгузник(us)'),
(40, 'Nappy', 'ˈnæpi', 'Подгузник(br) '),
(41, 'Look on the bright side', 'lʊk ɑːn braɪt saɪd', 'Смотреть на вещи оптимистически'),
(42, 'Make yourself at home', 'meɪk jɔːrˈself ət hoʊm', 'Чувствуйте себя как дома'),
(43, 'Slur', 'slɜːr', 'Запятнать, испортить репутацию'),
(44, 'Slur', 'slɜːr', 'Говорить невнятно'),
(45, 'Get hectic', 'ɡet ˈhektɪk', 'Напряженные дни (много всего)'),
(46, 'Anticipate', 'ænˈtɪsɪpeɪt', 'Ожидать, ждать с нетерпением'),
(47, 'Expect', 'ɪkˈspekt', 'Ожидать'),
(48, 'Formerly', 'ˈfɔːrmərli', 'Прежде'),
(49, 'Former', 'ˈfɔːrmər', 'Бывший, прежний'),
(50, 'Go over', 'ˈɡoʊ ˈoʊvr̩', 'Повторять, внимательно перечитывать'),
(51, 'Review', 'rɪˈvjuː', 'Рассмотрение, пересмотр'),
(52, 'Look over', 'ˈlʊk ˈoʊvr', 'Просмотреть'),
(53, 'Read up on', 'riːd ʌp ɑːn', 'Углубить свои знания'),
(54, 'Call on', 'ˈkɒl ɑːn', 'Призывать'),
(55, 'Call on', 'ˈkɒl ɑːn', 'Вызвать. например, ученика на ответ'),
(56, 'Call on', 'ˈkɒl ɑːn', 'Навестить'),
(57, 'Moving on', 'ˈmuːvɪŋ ɑːn', 'Двигаемся дальше'),
(58, 'Turn in', 'ˈtɝːn ɪn', 'Отдавать (сдавать работу в школе)'),
(59, 'Turn in', 'ˈtɝːn ɪn', 'Идти спать'),
(60, 'It\'s a matter of life and death', 'ˈmætər', 'Это вопрос жизни и смерти'),
(61, 'it\'s a matter of custom', 'ˈmætər ˈkʌstəm', 'Это вопрос привычки'),
(62, 'It is only a matter of time', 'ˈmætər', 'Это только вопрос времени'),
(63, 'Atomic bomb', 'əˈtɑːmɪk bɑːm', 'Атомная бомба'),
(64, 'Psychiatry', 'saɪˈkaɪətri', 'Психиатрия'),
(65, 'Psychiatrist', 'saɪˈkaɪətrɪst', 'Психиатр'),
(66, 'Psychology', 'saɪˈkɑːlədʒi', 'Психология'),
(67, 'Psychologist', 'saɪˈkɑːlədʒɪst', 'Психолог'),
(68, 'Swell', 'swel', 'Раздуваться, набухать'),
(69, 'Swell', 'swel', 'Шикарно, замечательно'),
(70, 'Rattle', 'ˈrætl', 'Погремушка'),
(71, 'Rattle', 'ˈrætl', 'Дребезжать'),
(72, 'Rattlesnake ', 'ˈrætlsneɪk', 'Гремучая змея'),
(73, 'Incline', 'ɪnˈklaɪn', 'Склоняться'),
(74, 'Incline', 'ɪnˈklaɪn', 'Наклоняться'),
(75, 'Mold', 'moʊld', 'Плесень'),
(76, 'Mold', 'moʊld', 'Формировать'),
(77, 'Fuzzy', 'ˈfʌzi', 'Неясный'),
(78, 'Fuzzy', 'ˈfʌzi', 'Размытый'),
(79, 'Blurred', 'blɜːrd', 'Расплывчатый'),
(80, 'Stroke', 'stroʊk', 'Гладить'),
(81, 'Stroke', 'stroʊk', 'Инсульт'),
(82, 'Бактерия', 'bækˈtɪəriə', 'Бактерия'),
(83, 'Sufficient', 'səˈfɪʃnt', 'Достаточный'),
(84, 'Insufficient', 'ɪnsəˈfɪʃnt', 'Недостаточный'),
(85, 'Manufacture', 'ˌmænjuˈfæktʃər', 'Производство, изготовлять'),
(86, 'Suppress', 'səˈpres', 'Подавлять, пресекать'),
(87, 'Suppress tears (yawn)', 'jɔːn', 'Сдерживать слёзы (зевок)'),
(88, 'Suppress laughter  ', 'ˈlæftər', 'Сдерживать смех'),
(89, 'Essentially', 'ɪˈsenʃəli', 'По существу, по сути'),
(90, 'Essential ', 'ɪˈsenʃl', 'Необходимый'),
(91, 'Pave the way', 'peɪv ðə weɪ', 'Прокладывать путь'),
(92, 'Pave', 'peɪv', 'Вымостить'),
(93, 'Immune system', 'ɪˈmjuːn ˈsɪstəm', 'Иммунная система'),
(94, 'Immunity', 'ɪˈmjuːnəti', 'Иммунитет'),
(95, 'Quarantine', 'ˈkwɔːrəntiːn', 'Карантин'),
(96, 'Lockdown', 'ˈlɑːkdaʊn', 'Строгая изоляция'),
(97, 'Corpse', 'kɔːrps', 'Труп,мертвое тело (мед. термин)'),
(98, 'Dead body', 'ded ˈbɑːdi', 'Труп'),
(99, 'Overuse', 'ˌoʊvərˈjuːs', 'Злоупотребление, чрезмерное использовать'),
(100, 'Lifespan', 'ˈlaɪfspæn', 'Продолжительность жизни'),
(101, 'Span', 'spæn', 'Охватывать, перекрывать'),
(102, 'Pneumonia', 'nuːˈmoʊniə', 'Пневмония');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `words`
--
ALTER TABLE `words`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `words`
--
ALTER TABLE `words`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

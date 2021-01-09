const quizAnswers = [
{
	test: 'one',
	questions: `<li class="question-item"> <p class="question__text">1. Что такое <span class="sea-color">sql</span>?</p>
	<label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-1"
	value="a"> <span class="answer__text"> <span class="answer__btn"></span> <span>язык структурированных запросов</span>
	</span> </label>	 <label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio"
	name="question-1" value="b"> <span class="answer__text"> <span class="answer__btn"></span> <span>язык гипертекстовой
	разметки</span> </span> </label>	 <label class="answer"> <span class="answer__circle"></span> <input
	class="answer__input" type="radio" name="question-1" value="c"> <span class="answer__text"> <span
	class="answer__btn"></span> <span>система управления базами данных</span> </span> </label>	 </li> <li
	class="question-item"> <p class="question__text">2. Какой тип данных используют для чисел с плавающей точкой?</p>
	<label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-2"
	value="a"> <span class="answer__text"> <span class="answer__btn"></span> <span>int</span> </span> </label>	 <label
	class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-2"
	value="b"> <span class="answer__text"> <span class="answer__btn"></span> <span>char</span> </span> </label>	 <label
	class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-2"
	value="c"> <span class="answer__text"> <span class="answer__btn"></span> <span>dec</span> </span> </label>	 </li> <li
	class="question-item"> <p class="question__text">3. В каких случаях используют оператор&nbsp;<span
	class="sea-color">and</span>?</p> <label class="answer"> <span class="answer__circle"></span> <input
	class="answer__input" type="radio" name="question-3" value="a"> <span class="answer__text"> <span
	class="answer__btn"></span> <span>при выборке данных, где все условия выполняются</span> </span> </label>	 <label
	class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-3"
	value="b"> <span class="answer__text"> <span class="answer__btn"></span> <span>при выборке данных, где хотя бы одно из
	условий выполняется</span> </span> </label>	 <label class="answer"> <span class="answer__circle"></span> <input
	class="answer__input" type="radio" name="question-3" value="c"> <span class="answer__text"> <span
	class="answer__btn"></span> <span>выборка данных для объединения всех множеств</span> </span> </label>	 </li> <li
	class="question-item"> <p class="question__text">4. Как получить выборку со значением&nbsp;<span
	class="sea-color">null</span>?</p> <label class="answer"> <span class="answer__circle"></span> <input
	class="answer__input" type="radio" name="question-4" value="a"> <span class="answer__text"> <span
	class="answer__btn"></span> <span>select * from people where hobby = null;</span> </span> </label>	 <label
	class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-4"
	value="b"> <span class="answer__text"> <span class="answer__btn"></span> <span>select * from people where hobby as
	null;</span> </span> </label>	 <label class="answer"> <span class="answer__circle"></span> <input class="answer__input"
	type="radio" name="question-4" value="c"> <span class="answer__text"> <span class="answer__btn"></span> <span>select *
	from people where hobby is null;</span> </span> </label>	 </li> <li class="question-item"> <p class="question__text">5.
	Какой оператор позволяет вывести указанное число строк из таблицы?</p> <label class="answer"> <span
	class="answer__circle"></span> <input class="answer__input" type="radio" name="question-5" value="a"> <span
	class="answer__text"> <span class="answer__btn"></span> <span>distinct</span> </span> </label>	 <label class="answer">
	<span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-5" value="b"> <span
	class="answer__text"> <span class="answer__btn"></span> <span>limit</span> </span> </label>	 <label class="answer">
	<span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-5" value="c"> <span
	class="answer__text"> <span class="answer__btn"></span> <span>in</span> </span> </label> </li> <li
	class="question-item"> <p class="question__text">6. Какая команда написана верно?</p> <label class="answer"> <span
	class="answer__circle"></span> <input class="answer__input" type="radio" name="question-6" value="a"> <span
	class="answer__text"> <span class="answer__btn"></span> <span>select name, avg(price) from shop<br> having name =
	'tv'<br> order by name;</span> </span> </label>	 <label class="answer"> <span class="answer__circle"></span> <input
	class="answer__input" type="radio" name="question-6" value="b"> <span class="answer__text"> <span
	class="answer__btn"></span> <span>select name, avg(price) from shop<br> having name = 'tv'<br> group by name;</span>
	</span> </label>	 <label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio"
	name="question-6" value="c"> <span class="answer__text"> <span class="answer__btn"></span> <span>select name,
	avg(price) from shop<br> group by name<br> having name = 'tv';</span> </span> </label>	 </li> <li
	class="question-item"> <p class="question__text">7. Какое ключевое слово используется вместе с оператором <span
	class="sea-color"> update</span>  для изменения данных?</p> <label class="answer"> <span class="answer__circle"></span>
	<input class="answer__input" type="radio" name="question-7" value="a"> <span class="answer__text"> <span
	class="answer__btn"></span> <span>rename</span> </span> </label>	 <label class="answer"> <span
	class="answer__circle"></span> <input class="answer__input" type="radio" name="question-7" value="b"> <span
	class="answer__text"> <span class="answer__btn"></span> <span>set</span> </span> </label>	 <label class="answer"> <span
	class="answer__circle"></span> <input class="answer__input" type="radio" name="question-7" value="c"> <span
	class="answer__text"> <span class="answer__btn"></span> <span>add</span> </span> </label>	 </li> <li
	class="question-item"> <p class="question__text">8. Какой оператор позволяет осуществить объединение множеств
	(запросов)?</p> <label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio"
	name="question-8" value="a"> <span class="answer__text"> <span class="answer__btn"></span> <span>union</span> </span>
	</label>	 <label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio"
	name="question-8" value="b"> <span class="answer__text"> <span class="answer__btn"></span> <span>intersect</span>
	</span> </label>	 <label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio"
	name="question-8" value="c"> <span class="answer__text"> <span class="answer__btn"></span> <span>distinct</span>
	</span> </label>	 </li> <li class="question-item"> <p class="question__text">9. Что такое внешний ключ?</p> <label
	class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-9"
	value="a"> <span class="answer__text"> <span class="answer__btn"></span> <span>идентификатор для значений текущей
	таблицы</span> </span> </label>	 <label class="answer"> <span class="answer__circle"></span> <input
	class="answer__input" type="radio" name="question-9" value="b"> <span class="answer__text"> <span
	class="answer__btn"></span> <span>идентификатор, что ссылается на первичный ключ другой таблицы</span> </span>
	</label>	 <label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio"
	name="question-9" value="c"> <span class="answer__text"> <span class="answer__btn"></span> <span>идентификатор
	агрегатной функции</span> </span> </label>	 </li> <li class="question-item"> <p class="question__text">10. Что такое
	внутреннее соединение таблиц?</p> <label class="answer"> <span class="answer__circle"></span> <input
	class="answer__input" type="radio" name="question-10" value="a"> <span class="answer__text"> <span
	class="answer__btn"></span> <span>вывод данных, где значение одной таблицы связано со значением другой таблицы
	посредством внешнего ключа</span> </span> </label>	 <label class="answer"> <span class="answer__circle"></span> <input
	class="answer__input" type="radio" name="question-10" value="b"> <span class="answer__text"> <span
	class="answer__btn"></span> <span>вывод всех данных одной таблицы и подбор для них значений из другой таблицы
	посредством внешнего ключа</span> </span> </label>	 <label class="answer"> <span class="answer__circle"></span> <input
	class="answer__input" type="radio" name="question-10" value="c"> <span class="answer__text"> <span
	class="answer__btn"></span> <span>вывод данных, где каждая строка одной таблицы соединяется с каждой строкой в другой
	таблице</span> </span> </label>	 </li>`,
},

{
	test: 'two',
	questions: `<li class="question-item"> <p class="question__text">1. Что это за тип данных:&nbsp;<span
	class="sea-color">'1522ae-1'</span>?</p> <label class="answer"> <span class="answer__circle"></span> <input
	class="answer__input" type="radio" name="question-1" value="a"> <span class="answer__text"> <span
	class="answer__btn"></span> <span>date</span> </span> </label>	 <label class="answer"> <span
	class="answer__circle"></span> <input class="answer__input" type="radio" name="question-1" value="b"> <span
	class="answer__text"> <span class="answer__btn"></span> <span>int</span> </span> </label>	 <label class="answer"> <span
	class="answer__circle"></span> <input class="answer__input" type="radio" name="question-1" value="c"> <span
	class="answer__text"> <span class="answer__btn"></span> <span>varchar</span> </span> </label>	 </li> <li
	class="question-item"> <p class="question__text">2. Какой тип данных написан верно?</p> <label class="answer"> <span
	class="answer__circle"></span> <input class="answer__input" type="radio" name="question-2" value="a"> <span
	class="answer__text"> <span class="answer__btn"></span> <span>'2000-31-12 23-59-59'</span> </span> </label>	 <label
	class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-2"
	value="b"> <span class="answer__text"> <span class="answer__btn"></span> <span>'31-12-2000 23:59:59'</span> </span>
	</label>	 <label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio"
	name="question-2" value="c"> <span class="answer__text"> <span class="answer__btn"></span> <span>'2000-12-31
	23:59:59'</span> </span> </label>	 </li> <li class="question-item"> <p class="question__text">3. Какой оператор
	позволит сделать выборку в диапазоне от меньшего значения к большему?</p> <label class="answer"> <span
	class="answer__circle"></span> <input class="answer__input" type="radio" name="question-3" value="a"> <span
	class="answer__text"> <span class="answer__btn"></span> <span>in</span> </span> </label>	 <label class="answer"> <span
	class="answer__circle"></span> <input class="answer__input" type="radio" name="question-3" value="b"> <span
	class="answer__text"> <span class="answer__btn"></span> <span>between</span> </span> </label>	 <label class="answer">
	<span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-3" value="c"> <span
	class="answer__text"> <span class="answer__btn"></span> <span>like</span> </span> </label>	 </li> <li
	class="question-item"> <p class="question__text">4. Как получить выборку уникальных значений столбца &nbsp;<span
	class="sea-color">name</span>?</p> <label class="answer"> <span class="answer__circle"></span> <input
	class="answer__input" type="radio" name="question-4" value="a"> <span class="answer__text"> <span
	class="answer__btn"></span> <span>select distinct name from people;</span> </span> </label>	 <label class="answer">
	<span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-4" value="b"> <span
	class="answer__text"> <span class="answer__btn"></span> <span>select name from people where name is distinct;</span>
	</span> </label>	 <label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio"
	name="question-4" value="c"> <span class="answer__text"> <span class="answer__btn"></span> <span>select distinct(name)
	from people;</span> </span> </label>	 </li> <li class="question-item"> <p class="question__text">5. Какой запрос с
	оператором&nbsp;<span class="sea-color">like</span> написан верно?</p> <label class="answer"> <span
	class="answer__circle"></span> <input class="answer__input" type="radio" name="question-5" value="a"> <span
	class="answer__text"> <span class="answer__btn"></span> <span>select * from friends where name like 'va%';</span>
	</span> </label>	 <label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio"
	name="question-5" value="b"> <span class="answer__text"> <span class="answer__btn"></span> <span>select * from friends
	like name = 'va%';</span> </span> </label>	 <label class="answer"> <span class="answer__circle"></span> <input
	class="answer__input" type="radio" name="question-5" value="c"> <span class="answer__text"> <span
	class="answer__btn"></span> <span>select * from friends where name like('va%');</span> </span> </label> </li> <li
	class="question-item"> <p class="question__text">6. Какой оператор позволит выстроить значения в столбце по
	алфавиту?</p> <label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio"
	name="question-6" value="a"> <span class="answer__text"> <span class="answer__btn"></span> <span>group by</span>
	</span> </label>	 <label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio"
	name="question-6" value="b"> <span class="answer__text"> <span class="answer__btn"></span> <span>order by</span>
	</span> </label>	 <label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio"
	name="question-6" value="c"> <span class="answer__text"> <span class="answer__btn"></span> <span>limit</span> </span>
	</label>	 </li> <li class="question-item"> <p class="question__text">7. Какая агрегатная функция позволяет посчитать
	количество записей (строк) в таблице?</p> <label class="answer"> <span class="answer__circle"></span> <input
	class="answer__input" type="radio" name="question-7" value="a"> <span class="answer__text"> <span
	class="answer__btn"></span> <span>sum</span> </span> </label>	 <label class="answer"> <span
	class="answer__circle"></span> <input class="answer__input" type="radio" name="question-7" value="b"> <span
	class="answer__text"> <span class="answer__btn"></span> <span>max</span> </span> </label>	 <label class="answer"> <span
	class="answer__circle"></span> <input class="answer__input" type="radio" name="question-7" value="c"> <span
	class="answer__text"> <span class="answer__btn"></span> <span>count</span> </span> </label>	 </li> <li
	class="question-item"> <p class="question__text">8. Какой это тип связей: "университет и преподаватели"?</p> <label
	class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-8"
	value="a"> <span class="answer__text"> <span class="answer__btn"></span> <span>один-к-одному</span> </span> </label>	
	<label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-8"
	value="b"> <span class="answer__text"> <span class="answer__btn"></span> <span>один-ко-многим</span> </span> </label>	
	<label class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-8"
	value="c"> <span class="answer__text"> <span class="answer__btn"></span> <span>многие-ко-многим</span> </span>
	</label>	 </li> <li class="question-item"> <p class="question__text">9. Какой запрос для &nbsp;<span
	class="sea-color">inner join</span> написан верно?</p> <label class="answer"> <span class="answer__circle"></span>
	<input class="answer__input" type="radio" name="question-9" value="a"> <span class="answer__text"> <span
	class="answer__btn"></span> <span>select staff.name, birth.year<br>from staff inner join birth<br>on staff.id_birth =
	birth.id;</span> </span> </label>	 <label class="answer"> <span class="answer__circle"></span> <input
	class="answer__input" type="radio" name="question-9" value="b"> <span class="answer__text"> <span
	class="answer__btn"></span> <span>select staff.name, birth.year<br>from staff inner join birth<br>where staff.id_birth
	= birth.id;</span> </span> </label>	 <label class="answer"> <span class="answer__circle"></span> <input
	class="answer__input" type="radio" name="question-9" value="c"> <span class="answer__text"> <span
	class="answer__btn"></span> <span>select staff.name, birth.year<br>from staff inner join birth<br>as staff.id_birth =
	birth.id;</span> </span> </label>	 </li> <li class="question-item"> <p class="question__text">10. Какую команду нужно
	применить, чтобы вывести все данные из таблицы&nbsp;<span class="sea-color">people</span> и подобрать для них значения
	из таблицы&nbsp;<span class="sea-color">city</span>?</p> <label class="answer"> <span class="answer__circle"></span>
	<input class="answer__input" type="radio" name="question-10" value="a"> <span class="answer__text"> <span
	class="answer__btn"></span> <span>inner join</span> </span> </label>	 <label class="answer"> <span
	class="answer__circle"></span> <input class="answer__input" type="radio" name="question-10" value="b"> <span
	class="answer__text"> <span class="answer__btn"></span> <span>left outer join</span> </span> </label>	 <label
	class="answer"> <span class="answer__circle"></span> <input class="answer__input" type="radio" name="question-10"
	value="c"> <span class="answer__text"> <span class="answer__btn"></span> <span>union</span> </span> </label>	 </li>`,
}

];
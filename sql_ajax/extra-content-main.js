const tabs = [
{},
{
	name: 'select',
	content: `<div class="choose-table-tab">
	<h2 class="main-title">Выборка значений из таблицы</h2>
	<h3 class="main-subtitle" id="choose-link_first">Select * (все столбцы)</h3>
	<div class="query">
		<div class="query__code">
			<code class="sql-code">SELECT * FROM friends;</code>
		</div>
		<table class="table_main table-small">
			<tr>
				<th>id</th>
				<th>name</th>
				<th>age</th>
				<th>birth</th>
				<th>job</th>
			</tr>
			<tr>
				<td>1</td>
				<td>ross</td>
				<td>27</td>
				<td>1967-10-18</td>
				<td>paleontologist</td>
			</tr>
			<tr>
				<td>2</td>
				<td>monica</td>
				<td>24</td>
				<td>null</td>
				<td>cook</td>
			</tr>
			<tr>
				<td>3</td>
				<td>rachel</td>
				<td>24</td>
				<td>1970-05-05</td>
				<td>waitress</td>
			</tr>
			<tr>
				<td>4</td>
				<td>chandler</td>
				<td>26</td>
				<td>1968-04-08</td>
				<td>copywriter</td>
			</tr>
			<tr>
				<td>5</td>
				<td>joey</td>
				<td>26</td>
				<td>1968-01-09</td>
				<td>actor</td>
			</tr>
			<tr>
				<td>6</td>
				<td>phoebe</td>
				<td>28</td>
				<td>null</td>
				<td>musician</td>
			</tr>
		</table>
	</div><hr>
	<h3 class="main-subtitle" id="choose-link_second">Select (отдельные столбцы)</h3>
	<div class="query">
		<div class="query__code">
			<code class="sql-code">SELECT name, job FROM friends;</code>
		</div>
		<table class="table_main table-small">
			<tr>
				<th>name</th>
				<th>job</th>
			</tr>
			<tr>
				<td>ross</td>
				<td>paleontologist</td>
			</tr>
			<tr>
				<td>monica</td>
				<td>cook</td>
			</tr>
			<tr>
				<td>rachel</td>
				<td>waitress</td>
			</tr>
			<tr>
				<td>chandler</td>
				<td>copywriter</td>
			</tr>
			<tr>
				<td>joey</td>
				<td>actor</td>
			</tr>
			<tr>
				<td>phoebe</td>
				<td>musician</td>
			</tr>
		</table>
	</div><hr>
	<h3 class="main-subtitle" id="choose-link_third">Ключевое слово where</h3>
	<div class="query">
		<div class="query__code">
			<code class="sql-code">SELECT * FROM friends<br>WHERE name = 'phoebe';</code>
		</div>
		<table class="table_main">
			<tr>
				<th>id</th>
				<th>name</th>
				<th>age</th>
				<th>birth</th>
				<th>job</th>
			</tr>
			<tr>
				<td>6</td>
				<td>phoebe</td>
				<td>28</td>
				<td>null</td>
				<td>musician</td>
			</tr>
		</table>
	</div><hr>
	<h3 class="main-subtitle" id="choose-link_fourth">Оператор and</h3>
	<div class="query">
		<div class="query__code">
			<code class="sql-code">SELECT * FROM friends<br>WHERE id = 2<br>AND name = 'monica';<span class="sql-code-comment">При <span class="sea-color_comment">AND</span> все условия должны выполняться. Если бы мы вместо 'monica' написали 'janice', таблица не выдала бы нам никаких данных (даже при наличии в таблице 'id = 2'). Так как два условия не были выполнены.</span></code>
		</div>
		<table class="table_main">
			<tr>
				<th>id</th>
				<th>name</th>
				<th>age</th>
				<th>birth</th>
				<th>job</th>
			</tr>
			<tr>
				<td>2</td>
				<td>monica</td>
				<td>24</td>
				<td>null</td>
				<td>cook</td>
			</tr>
		</table>
	</div><hr>
	<h3 class="main-subtitle" id="choose-link_fifth">Оператор or</h3>
	<div class="query">
		<div class="query__code">
			<code class="sql-code">SELECT * FROM friends<br>WHERE name = 'chandler'<br>OR age = 24;<span class="sql-code-comment">При <span class="sea-color_comment">OR</span> должно выполниться хотя бы одно условие.</span></code>	
		</div>
		<table class="table_main">
			<tr>
				<th>id</th>
				<th>name</th>
				<th>age</th>
				<th>birth</th>
				<th>job</th>
			</tr>
			<tr>
				<td>2</td>
				<td>monica</td>
				<td>24</td>
				<td>null</td>
				<td>cook</td>
			</tr>
			<tr>
				<td>3</td>
				<td>rachel</td>
				<td>24</td>
				<td>1970-05-05</td>
				<td>waitress</td>
			</tr>
			<tr>
				<td>4</td>
				<td>chandler</td>
				<td>26</td>
				<td>1968-04-08</td>
				<td>copywriter</td>
			</tr>
		</table>
	</div><hr>
	<h3 class="main-subtitle" id="choose-link_sixth">Оператор between</h3>
	<div class="query">
		<div class="query__code">
			<code class="sql-code">SELECT * FROM friends<br>WHERE age BETWEEN 27 AND 30;<span class="sql-code-comment">Меньшее число должно указываться первым</span></code>
		</div>
		<table class="table_main">
			<tr>
				<th>id</th>
				<th>name</th>
				<th>age</th>
				<th>birth</th>
				<th>job</th>
			</tr>
			<tr>
				<td>1</td>
				<td>ross</td>
				<td>27</td>
				<td>1967-10-18</td>
				<td>paleontologist</td>
			</tr>
			<tr>
				<td>6</td>
				<td>phoebe</td>
				<td>28</td>
				<td>null</td>
				<td>musician</td>
			</tr>
		</table>
	</div><hr>
	<h3 class="main-subtitle" id="choose-link_seventh">Условие in</h3>
	<div class="query">
		<div class="query__code">
			<code class="sql-code">SELECT * FROM friends<br>WHERE name IN ('chandler', 'ross', 'joey');<span class="sql-code-comment">Более короткая запись <span class="sea-color_comment">OR</span></span></code>
		</div>
		<table class="table_main">
			<tr>
				<th>id</th>
				<th>name</th>
				<th>age</th>
				<th>birth</th>
				<th>job</th>
			</tr>
			<tr>
				<td>1</td>
				<td>ross</td>
				<td>27</td>
				<td>1967-10-18</td>
				<td>paleontologist</td>
			</tr>
			<tr>
				<td>4</td>
				<td>chandler</td>
				<td>26</td>
				<td>1968-04-08</td>
				<td>copywriter</td>
			</tr>
			<tr>
				<td>5</td>
				<td>joey</td>
				<td>26</td>
				<td>1968-01-09</td>
				<td>actor</td>
			</tr>
		</table>
	</div><hr>
	<h3 class="main-subtitle" id="choose-link_eighth">Вывод значений null</h3>
	<div class="query">
		<div class="query__code">
			<code class="sql-code">SELECT * FROM friends<br>WHERE birth IS NULL;<span class="sql-code-comment">Если нужны значения "не null", используем команду: <br><code class="sea-color_comment">SELECT * FROM friends WHERE birth IS NOT NULL;</code></span></code>
		</div>
		<table class="table_main">
			<tr>
				<th>id</th>
				<th>name</th>
				<th>age</th>
				<th>birth</th>
				<th>job</th>
			</tr>
			<tr>
				<td>2</td>
				<td>monica</td>
				<td>24</td>
				<td>null</td>
				<td>cook</td>
			</tr>
			<tr>
				<td>6</td>
				<td>phoebe</td>
				<td>28</td>
				<td>null</td>
				<td>musician</td>
			</tr>
		</table>
	</div><hr>
	<h3 class="main-subtitle" id="choose-link_nineth">Операторы сравнения</h3>
	<div class="query">
		<div class="query__code">
			<code class="sql-code">SELECT * FROM friends<br>WHERE age > 24;<span class="sql-code-comment">Можно использовать следующие операторы:</span></code>
			<ul>
				<li class="sql-code-item">Больше: <span class="sea-color">&#62;</span></li>
				<li class="sql-code-item">Меньше: <span class="sea-color">&#60;</span></li>
				<li class="sql-code-item">Больше или равно: <span class="sea-color">&#62; =</span></li>
				<li class="sql-code-item">Меньше или равно: <span class="sea-color">&#60; =</span></li>
				<li class="sql-code-item">Не равно: <span class="sea-color">&#60;&#62;</span></li>
			</ul>
		</div>
		<table class="table_main">
			<tr>
				<th>id</th>
				<th>name</th>
				<th>age</th>
				<th>birth</th>
				<th>job</th>
			</tr>
			<tr>
				<td>1</td>
				<td>ross</td>
				<td>27</td>
				<td>1967-10-18</td>
				<td>paleontologist</td>
			</tr>
			<tr>
				<td>4</td>
				<td>chandler</td>
				<td>26</td>
				<td>1968-04-08</td>
				<td>copywriter</td>
			</tr>
			<tr>
				<td>5</td>
				<td>joey</td>
				<td>26</td>
				<td>1968-01-09</td>
				<td>actor</td>
			</tr>
			<tr>
				<td>6</td>
				<td>phoebe</td>
				<td>28</td>
				<td>null</td>
				<td>musician</td>
			</tr>
		</table>
	</div><hr>
	<h3 class="main-subtitle" id="choose-link_tenth">Ключевое слово like</h3>
	<div class="query">
		<div class="query__code">
			<code class="sql-code">SELECT * FROM friends<br>WHERE name LIKE 'ph%';<span class="sql-code-comment">Несколько важных моментов:</span></code>
			<ul>
				<li class="sql-code-item">знак процента можно ставить в любой части слова</li>
				<li class="sql-code-item">кавычки обязательны (даже для чисел)</li>
			</ul>
		</div>
		<table class="table_main">
			<tr>
				<th>id</th>
				<th>name</th>
				<th>age</th>
				<th>birth</th>
				<th>job</th>
			</tr>
			<tr>
				<td>6</td>
				<td>phoebe</td>
				<td>28</td>
				<td>null</td>
				<td>musician</td>
			</tr>
		</table>
	</div><hr>
	<h3 class="main-subtitle" id="choose-link_eleventh">Order by и limit</h3>
	<div class="query">
		<div class="query__code">
			<code class="sql-code">SELECT * FROM friends<br>ORDER BY age<br>LIMIT 3;</code>
			<ul>
				<li class="sql-code-item"><span class="sea-color_comment">ORDER BY</span> - группирует значения в алфавитном порядке (от А до Я) и цифры по возрастанию</li>
				<li class="sql-code-item">Можно поменять направление через слово <span class="sea-color_comment">DESC</span>. Например, от большего к меньшему:<br> <span class="sea-color_comment">SELECT * FROM friends<br>ORDER BY age DESC;</span></li>
				<li class="sql-code-item"><span class="sea-color_comment">LIMIT</span> - ограничивает число записей. На данном примере только 3 строки отображены</li>
			</ul>
		</div>
		<table class="table_main">
			<tr>
				<th>id</th>
				<th>name</th>
				<th>age</th>
				<th>birth</th>
				<th>job</th>
			</tr>
			<tr>
				<td>2</td>
				<td>monica</td>
				<td>24</td>
				<td>null</td>
				<td>cook</td>
			</tr>
			<tr>
				<td>3</td>
				<td>rachel</td>
				<td>24</td>
				<td>1970-05-05</td>
				<td>waitress</td>
			</tr>
			<tr>
				<td>4</td>
				<td>chandler</td>
				<td>26</td>
				<td>1968-04-08</td>
				<td>copywriter</td>
			</tr>
		</table>
	</div><hr>
	<h3 class="main-subtitle" id="choose-link_twelfth">Агрегатные функции</h3>
	<div class="query">
		<div class="query__code">
			<code class="sql-code">SELECT MAX(age) FROM friends;<span class="sql-code-comment">Можно использовать следующие функции:</span></code>
			<ul>
				<li class="sql-code-item"><span class="sea-color">MAX</span> - максимальное значение</li>
				<li class="sql-code-item"><span class="sea-color">MIN</span> - минимальное значение</li>
				<li class="sql-code-item"><span class="sea-color">AVG</span> - среднее  значение для числового столбца</li>
				<li class="sql-code-item"><span class="sea-color">SUM</span> - сумма числовых значений</li>
				<li class="sql-code-item"><span class="sea-color">COUNT(*)</span> - количество записей в столбце</li>
			</ul>
		</div>
		<table class="table_main table-small_dt">
			<tr>
				<th>MAX(age)</th>
			</tr>
			<tr>
				<td>28</td>
			</tr>
		</table>
	</div><hr>
	<h3 class="main-subtitle" id="choose-link_thirteenth">Group by и having</h3>
	<div class="query">
		<table class="table_main table-small">
			<tr>
				<th>id</th>
				<th>name</th>
				<th>marriage</th>
				<th>year</th>
			</tr>
			<tr>
				<td>1</td>
				<td>ross</td>
				<td>1</td>
				<td>1994</td>
			</tr>
			<tr>
				<td>2</td>
				<td>ross</td>
				<td>1</td>
				<td>1998</td>
			</tr>
			<tr>
				<td>3</td>
				<td>rachel</td>
				<td>1</td>
				<td>1999</td>
			</tr>
			<tr>
				<td>4</td>
				<td>ross</td>
				<td>1</td>
				<td>1999</td>
			</tr>
		</table>
		<p class="sql-code-comment sql-code-comment_normal">Посчитаем количество браков у ross с помощью группирования значений в столбце name и агрегатной функции SUM</p>	
		<div class="query__code">
			<code class="sql-code">SELECT name, SUM(marriage) FROM friends_marriage<br>GROUP BY name<br>HAVING name = 'ross';</code>
			<ul>
				<li class="sql-code-item"><span class="sea-color_comment">GROUP BY</span> - позволяет сгруппировать все строки с одинаковым значением в столбце и выполнить определенное действие</li>
				<li class="sql-code-item"><span class="sea-color_comment">HAVING</span> - для вывода сгруппированных данных с выбранным условием (аналог Where). Работает только с Group by</li>
			</ul>
		</div>
		<table class="table_main table-small">
			<tr>
				<th>name</th>
				<th>SUM(marriage)</th>
			</tr>
				<td>ross</td>
				<td>3</td>
			</tr>
		</table>
	</div><hr>
	<h3 class="main-subtitle" id="choose-link_fourteenth">Оператор distinct</h3>
	<div class="query">
		<div class="query__code">
			<code class="sql-code">SELECT DISTINCT age FROM friends;<span class="sql-code-comment">Позволяет сделать выборку уникальных данных. Т.е. если столбец содержит несколько одинаковых значений, в выборке оно будет представлено всего один раз</span></code>
		</div>
		<table class="table_main table-small_dt">
			<tr>
				<th>age</th>
			</tr>
			<tr>
				<td>27</td>
			</tr>
			<tr>
				<td>24</td>
			</tr>
			<tr>
				<td>26</td>
			</tr>
			<tr>
				<td>28</td>
			</tr>
		</table>
	</div>
</div>`,
},
{
	name: 'update',
	content: `<div class="change-table-tab">
	<h2 class="main-title">Изменение таблицы</h2>
	<h3 class="main-subtitle" id="change-link_first">Изменение данных в таблице (одна строка)</h3>
	<div class="query">
		<div class="query__code">
			<code class="sql-code">UPDATE friends<br>SET job = 'manager'<br>WHERE name = 'rachel';</code><span class="check-code">Просмотреть данные таблицы:<br> <code class="check-code_blue">SELECT * FROM friends WHERE name = 'rachel';</code></span>
		</div>
		<table class="table_main">
			<tr>
				<th>id</th>
				<th>name</th>
				<th>age</th>
				<th>birth</th>
				<th>job</th>
			</tr>
			<tr>
				<td>3</td>
				<td>rachel</td>
				<td>24</td>
				<td>1970-05-05</td>
				<td>manager</td>
			</tr>
		</table>
	</div><hr>
	<h3 class="main-subtitle" id="change-link_second">Изменение данных в таблице (несколько строк)</h3>
	<div class="query">
		<div class="query__code">
			<code class="sql-code">UPDATE friends<br>SET name = 'joe',<br>age = 27,<br>job = 'waiter'<br>WHERE id = 5;</code><span class="check-code">Просмотреть данные таблицы:<br> <code class="check-code_blue">SELECT * FROM friends WHERE id = 5;</code></span>
		</div>
		<table class="table_main">
			<tr>
				<th>id</th>
				<th>name</th>
				<th>age</th>
				<th>birth</th>
				<th>job</th>
			</tr>
			<tr>
				<td>5</td>
				<td>joe</td>
				<td>27</td>
				<td>1970-05-05</td>
				<td>waiter</td>
			</tr>
		</table>
	</div><hr>
	<h3 class="main-subtitle" id="change-link_third">Изменение структуры таблицы</h3>
	<div class="query">
		<div class="query__code">
			<code class="sql-code">ALTER TABLE friends<br>ADD COLUMN email varchar(15); <span class="sql-code-comment">Можно использовать следующие команды:</span></code>
			<ul>
				<li class="sql-code-item"><span class="sea-color_comment">ADD COLUMN</span> - добавить столбец</li>
				<li class="sql-code-item"><span class="sea-color_comment">DROP COLUMN</span> - удалить столбец</li>
				<li class="sql-code-item"><span class="sea-color_comment">CHANGE COLUMN</span> - изменить имя и тип данных столбца</li>
				<li class="sql-code-item"><span class="sea-color_comment">MODIFY COLUMN</span> - изменить только тип данных столбца</li>
			</ul>
			<span class="check-code">Просмотреть структуру таблицы: <code class="check-code_blue"> DESC friends;</code></span>
		</div>
		<table class="table_main table-small table-small_dt">
			<tr>
				<th>field</th>
				<th>type</th>
				<th>null</th>
				<th>Key</th>
				<th>Extra</th>
			</tr>
			<tr>
				<td>id</td>
				<td>int</td>
				<td>no</td>
				<td>pri</td>
				<td>auto_increment</td>
			</tr>
			<tr>
				<td>name</td>
				<td>varchar(10)</td>
				<td>yes</td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>age</td>
				<td>int</td>
				<td>yes</td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>birth</td>
				<td>date</td>
				<td>yes</td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>job</td>
				<td>varchar(16)</td>
				<td>yes</td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>email</td>
				<td>varchar(15)</td>
				<td>yes</td>
				<td></td>
				<td></td>
			</tr>
		</table>
	</div><hr>
	<h3 class="main-subtitle" id="change-link_fourth">Удаление строки</h3>
	<div class="query">
		<div class="query__code">
			<code class="sql-code">DELETE FROM friends<br>WHERE id = 5;</code><span class="check-code">Просмотреть данные таблицы:<br> <code class="check-code_blue">SELECT * FROM friends;</code></span>
		</div>
		<table class="table_main table-small">
			<tr>
				<th>id</th>
				<th>name</th>
				<th>age</th>
				<th>birth</th>
				<th>job</th>
			</tr>
			<tr>
				<td>1</td>
				<td>ross</td>
				<td>27</td>
				<td>1967-10-18</td>
				<td>paleontologist</td>
			</tr>
			<tr>
				<td>2</td>
				<td>monica</td>
				<td>24</td>
				<td>null</td>
				<td>cook</td>
			</tr>
			<tr>
				<td>3</td>
				<td>rachel</td>
				<td>24</td>
				<td>1970-05-05</td>
				<td>waitress</td>
			</tr>
			<tr>
				<td>4</td>
				<td>chandler</td>
				<td>26</td>
				<td>1968-04-08</td>
				<td>copywriter</td>
			</tr>
			<tr>
				<td>6</td>
				<td>phoebe</td>
				<td>28</td>
				<td>null</td>
				<td>musician</td>
			</tr>
		</table>
	</div><hr>
	<h3 class="main-subtitle" id="change-link_fifth">Удаление таблицы</h3>
	<div class="query">
		<div class="query__code">
			<code class="sql-code">DROP TABLE friends;<br><span class="sql-code-comment">Будьте осторожны с этой командой, так как вернуть таблицу уже будет невозможно</span></code>
		</div>
	</div>
</div>`,
},
{
	name: 'join',
	content: `<div class="join-table-tab">
	<h2 class="main-title">Соединение таблиц</h2>
	<h3 class="main-subtitle" id="join-link_first">Внутреннее соединение таблиц</h3>
	<p class="sql-code-comment sql-code-comment_normal">У нас уже есть "главная" таблица friends. Создадим еще одну таблицу hobby, внешний ключ которой будет связан с первичным ключом таблицы friends.</p>
	<div class="query">
		<div class="query__code">
			<code class="sql-code">CREATE TABLE hobby (<br>id int auto_increment not null PRIMARY KEY,<br>interest varchar(10),<br> id_friends int,<br>CONSTRAINT fk_friends_id<br>FOREIGN KEY (id_friends)<br>REFERENCES friends (id)<br>);
			<span class="sql-code-comment">Просмотреть структуру таблицы: <code class="check-code_blue"> DESC hobby;</code></span></code>
		</div>
		<table class="table_main table-small table-small_dt">
			<tr>
				<th>field</th>
				<th>type</th>
				<th>null</th>
				<th>Key</th>
				<th>Extra</th>
			</tr>
			<tr>
				<td>id</td>
				<td>int</td>
				<td>no</td>
				<td>pri</td>
				<td>auto_increment</td>
			</tr>
			<tr>
				<td>interest</td>
				<td>varchar(10)</td>
				<td>yes</td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>id_friends</td>
				<td>int</td>
				<td>yes</td>
				<td>mul</td>
				<td></td>
			</tr>
		</table>
	</div>
	<p class="sql-code-comment sql-code-comment_normal">Добавим данные в таблицу хобби</p>
	<div class="query">
		<div class="query__code">
			<code class="sql-code">INSERT INTO hobby (interest, id_friends)<br>VALUES ('science', 1),<br>('order', 2),<br>('fashion', 3),<br>('jokes', 4),<br>('food', 5),<br>('nature', 6);</code>
			<span class="sql-code-comment">Просмотреть данные таблицы: <code class="check-code_blue">SELECT * FROM friends;</code></span>
		</div>
		<table class="table_main table-small">
			<tr>
				<th>id</th>
				<th>interest</th>
				<th>id_friends</th>
			</tr>
			<tr>
				<td>1</td>
				<td>science</td>
				<td>1</td>
			</tr>
			<tr>
				<td>2</td>
				<td>order</td>
				<td>2</td>
			</tr>
			<tr>
				<td>3</td>
				<td>fashion</td>
				<td>3</td>
			</tr>
			<tr>
				<td>4</td>
				<td>jokes</td>
				<td>4</td>
			</tr>
			<tr>
				<td>5</td>
				<td>food</td>
				<td>5</td>
			</tr>
			<tr>
				<td>6</td>
				<td>nature</td>
				<td>6</td>
			</tr>
		</table>
	</div>	
	<div class="table_inner">
		<p class="sql-code-comment sql-code-comment_normal">У нас две таблицы, которые связаны друг с другом первичным и внешним ключом.</p>
		<table class="table_main table-small">
			<tr>
				<th class="column_bold">id</th>
				<th>name</th>
				<th>age</th>
				<th>birth</th>
				<th>job</th>
			</tr>
			<tr>
				<td class="column_bold">1</td>
				<td>ross</td>
				<td>27</td>
				<td>1967-10-18</td>
				<td>paleontologist</td>
			</tr>
			<tr>
				<td class="column_bold">2</td>
				<td>monica</td>
				<td>24</td>
				<td>null</td>
				<td>cook</td>
			</tr>
			<tr>
				<td class="column_bold">3</td>
				<td>rachel</td>
				<td>24</td>
				<td>1970-05-05</td>
				<td>waitress</td>
			</tr>
			<tr>
				<td class="column_bold">4</td>
				<td>chandler</td>
				<td>26</td>
				<td>1968-04-08</td>
				<td>copywriter</td>
			</tr>
			<tr>
				<td class="column_bold">5</td>
				<td>joey</td>
				<td>26</td>
				<td>1968-01-09</td>
				<td>actor</td>
			</tr>
			<tr>
				<td class="column_bold">6</td>
				<td>phoebe</td>
				<td>28</td>
				<td>null</td>
				<td>musician</td>
			</tr>
		</table>
		<table class="table_main table-small">
			<tr>
				<th>id</th>
				<th>interest</th>
				<th class="column_bold">id_friends</th>
			</tr>
			<tr>
				<td>1</td>
				<td>science</td>
				<td class="column_bold">1</td>
			</tr>
			<tr>
				<td>2</td>
				<td>order</td>
				<td class="column_bold">2</td>
			</tr>
			<tr>
				<td>3</td>
				<td>fashion</td>
				<td class="column_bold">3</td>
			</tr>
			<tr>
				<td>4</td>
				<td>jokes</td>
				<td class="column_bold">4</td>
			</tr>
			<tr>
				<td>5</td>
				<td>food</td>
				<td class="column_bold">5</td>
			</tr>
			<tr>
				<td>6</td>
				<td>nature</td>
				<td class="column_bold">6</td>
			</tr>
		</table>
	</div>
	<p class="sql-code-comment sql-code-comment_normal">Выведем имена из таблицы friends и соединим с интересами из таблицы hobby.</p>	
	<div class="query">
		<div class="query__code">
			<code class="sql-code">SELECT friends.name, hobby.interest<br>FROM friends<br>INNER JOIN hobby<br>ON friends.id = hobby.id_friends;</code>
		</div>
		<table class="table_main table-small">
			<tr>
				<th>name</th>
				<th>interest</th>
			</tr>
			<tr>
				<td>ross</td>
				<td>science</td>
			</tr>
			<tr>
				<td>monica</td>
				<td>order</td>
			</tr>
			<tr>
				<td>rachel</td>
				<td>fashion</td>
			</tr>
			<tr>
				<td>chandler</td>
				<td>jokes</td>
			</tr>
			<tr>
				<td>joey</td>
				<td>food</td>
			</tr>
			<tr>
				<td>phoebe</td>
				<td>nature</td>
			</tr>
		</table>
	</div><hr>
	<h3 class="main-subtitle" id="join-link_second">Внутреннее соединение с where</h3>
	<div class="query">
		<div class="query__code">
			<code class="sql-code">SELECT friends.name, hobby.interest<br>FROM friends<br>INNER JOIN hobby<br>ON friends.id = hobby.id_friends<br>WHERE friends.name = 'ross'<br> OR friends.name = 'rachel';</code>
		</div>
		<table class="table_main">
			<tr>
				<th>name</th>
				<th>interest</th>
			</tr>
			<tr>
				<td>ross</td>
				<td>science</td>
			</tr>
			<tr>
				<td>rachel</td>
				<td>fashion</td>
			</tr>
			</tr>
		</table>
	</div><hr>
	<h3 class="main-subtitle" id="join-link_third">Внешнее соединение</h3>
	<div class="query">
		<p class="sql-code-comment sql-code-comment_normal">Таблицы friends и dob связаны друг с другом первичным и внешним ключом. Во второй таблице есть значения null.</p>
		<table class="table_main table-small">
			<tr>
				<th class="column_bold">id</th>
				<th>name</th>
			</tr>
			<tr>
				<td class="column_bold">1</td>
				<td>ross</td>
			</tr>
			<tr>
				<td class="column_bold">2</td>
				<td>monica</td>
			</tr>
			<tr>
				<td class="column_bold">3</td>
				<td>rachel</td>
			</tr>
			<tr>
				<td class="column_bold">4</td>
				<td>chandler</td>
			</tr>
			<tr>
				<td class="column_bold">5</td>
				<td>joey</td>
			</tr>
			<tr>
				<td class="column_bold">6</td>
				<td>phoebe</td>
			</tr>
		</table>
		<table class="table_main table-small">
			<tr>
				<th>id</th>
				<th>date</th>
				<th class="column_bold">id_friends</th>
			</tr>
			<tr>
				<td>1</td>
				<td>1967-10-18</td>
				<td class="column_bold">1</td>
			</tr>
			<tr>
				<td>2</td>
				<td>null</td>
				<td class="column_bold">2</td>
			</tr>
			<tr>
				<td>3</td>
				<td>1970-05-05</td>
				<td class="column_bold">3</td>
			</tr>
			<tr>
				<td>4</td>
				<td>1968-04-08</td>
				<td class="column_bold">4</td>
			</tr>
			<tr>
				<td>5</td>
				<td>1968-01-09</td>
				<td class="column_bold">5</td>
			</tr>
			<tr>
				<td>6</td>
				<td>null</td>
				<td class="column_bold">6</td>
			</tr>
		</table>
	</div>
	<p class="sql-code-comment sql-code-comment_normal">Выведем <span class="check-code_blue">все</span> имена из таблицы friends и соединим с датой рождения из таблицы dob.</p>	
	<div class="query">
		<div class="query__code">
			<code class="sql-code">SELECT friends.name, dob.date<br>FROM friends<br>LEFT OUTER JOIN dob<br>ON friends.id = dob.id_friends;</code>
			<span class="sql-code-comment"><span class="sea-color">INNER JOIN</span> соединяет только те строки таблиц, значения которых не равны null. <br><span class="sea-color">OUTER JOIN</span> выводит весь список одной таблицы и уже для нее подбирает значения других таблиц (в т. ч. null)</span>
			<ul>
				<li class="sql-code-item"><span class="sea-color">LEFT OUTER JOIN</span> - выводит весь список значений таблицы, которая до OUTER JOIN (слева)</li>
				<li class="sql-code-item"><span class="sea-color">RIGHT OUTER JOIN</span> - выводит весь список значений таблицы, которая после OUTER JOIN (справа)</li>
			</ul>
		</div>
		<table class="table_main table-small">
			<tr>
				<th>name</th>
				<th>date</th>
			</tr>
			<tr>
				<td>ross</td>
				<td>1967-10-18</td>
			</tr>
			<tr>
				<td>monica</td>
				<td>null</td>
			</tr>
			<tr>
				<td>rachel</td>
				<td>1970-05-05</td>
			</tr>
			<tr>
				<td>chandler</td>
				<td>1968-04-08</td>
			</tr>
			<tr>
				<td>joey</td>
				<td>1968-01-09</td>
			</tr>
			<tr>
				<td>phoebe</td>
				<td>null</td>
			</tr>
		</table>
	</div><hr>
	<h3 class="main-subtitle" id="join-link_fourth">Объединение запросов</h3>
	<div class="query">
		<table class="table_main table-small">
			<tr>
				<th>id</th>
				<th>name</th>
			</tr>
			<tr>
				<td>1</td>
				<td>ross</td>
			</tr>
			<tr>
				<td>2</td>
				<td>rachel</td>
			</tr>
			<tr>
				<td>3</td>
				<td>chandler</td>
			</tr>
		</table>
		<table class="table_main table-small">
			<tr>
				<th>id</th>
				<th>name</th>
			</tr>
			<tr>
				<td>1</td>
				<td>janice</td>
			</tr>
			<tr>
				<td>2</td>
				<td>gunther</td>
			</tr>
			<tr>
				<td>3</td>
				<td>marcel</td>
			</tr>
		</table>
		<p class="sql-code-comment sql-code-comment_normal">В отдельной таблице выведем все значения friends, а затем others</p>	
		<div class="query__code">
			<code class="sql-code">SELECT * FROM friends<br>UNION<br>SELECT * FROM others;</code>
			<span class="sql-code-comment">Все запросы должны иметь одинаковое количество столбцов и тип данных</span>
		</div>
		<table class="table_main table-small">
			<tr>
				<th>id</th>
				<th>name</th>
			</tr>
			<tr>
				<td>1</td>
				<td>ross</td>
			</tr>
			<tr>
				<td>2</td>
				<td>rachel</td>
			</tr>
			<tr>
				<td>3</td>
				<td>chandler</td>
			</tr>
			<tr>
				<td>1</td>
				<td>janice</td>
			</tr>
			<tr>
				<td>2</td>
				<td>gunther</td>
			</tr>
			<tr>
				<td>3</td>
				<td>marcel</td>
			</tr>
		</table>
	</div><hr>
	<h3 class="main-subtitle" id="join-link_fifth">Вложенные запросы (подзапросы)</h3>
	<div class="query">
		<table class="table_main table-small">
			<tr>
				<th>id</th>
				<th>name</th>
				<th>age</th>
			</tr>
			<tr>
				<td>1</td>
				<td>ross</td>
				<td>27</td>
			</tr>
			<tr>
				<td>2</td>
				<td>rachel</td>
				<td>24</td>
			</tr>
			<tr>
				<td>3</td>
				<td>chandler</td>
				<td>26</td>
			</tr>
		</table>
		<table class="table_main table-small">
			<tr>
				<th>id</th>
				<th>name</th>
				<th>age</th>
			</tr>
			<tr>
				<td>1</td>
				<td>janice</td>
				<td>30</td>
			</tr>
			<tr>
				<td>2</td>
				<td>gunther</td>
				<td>32</td>
			</tr>
			<tr>
				<td>3</td>
				<td>marcel</td>
				<td>9</td>
			</tr>
		</table>
		<p class="sql-code-comment sql-code-comment_normal">Сделаем выборку значений из таблицы others, где возраст будет больше возраста ross из таблицы friends</p>	
		<div class="query__code">
			<code class="sql-code">SELECT * FROM others<br>WHERE age > (SELECT age FROM friends<br>WHERE name = 'ross');</code>
		</div>
		<table class="table_main table-small">
			<tr>
				<th>id</th>
				<th>name</th>
				<th>age</th>
			</tr>
				<td>1</td>
				<td>janice</td>
				<td>30</td>
			</tr>
			<tr>
				<td>2</td>
				<td>gunther</td>
				<td>32</td>
			</tr>
		</table>
	</div>
</div>`,
},
{
	name: 'files',
	content: `<div class="change-table-tab">
	<h2 class="main-title">Полезные ссылки</h2>
	<h3 class="main-subtitle" id="task-link_seventh">Домашнее задание - 1</h3>
	<div class="table_inner">
		<ol class="hometask-list">
			<li class="hometask-item hometask-home"><a target="_blank" href="download/home_task_1.pdf" download>home_task_1.pdf</a></li>
			<li class="hometask-item"><a target="_blank" href="download/continents.sql" download>continents.sql</a></li>
			<li class="hometask-item hometask-video"><a target="_blank" href="https://youtu.be/lbmeRDpl55k">Видеоинструкция (ссылка на YouTube)</a></li>
		</ol>
	</div><hr>
	<h3 class="main-subtitle" id="task-link_eighth">Домашнее задание - 2</h3>
	<div class="table_inner">
		<ol class="hometask-list">
			<li class="hometask-item hometask-home"><a target="_blank" href="download/home_task_2.pdf" download>home_task_2.pdf</a></li>
			<li class="hometask-item"><a target="_blank" href="download/film.sql" download>film.sql</a></li>
			<li class="hometask-item"><a target="_blank" href="download/director.sql" download>director.sql</a></li>
		</ol>
	</div><hr>
	<h3 class="main-subtitle" id="task-link_tenth">Тесты</h3>
	<div class="table_inner">
		<ol class="hometask-list">
			<li class="hometask-item hometask-pen"><a href="quiz/test/test.php">Вариант - 1</a></li>
			<li class="hometask-item hometask-pen"><a href="quiz/test/test_2.php">Вариант - 2</a></li>
			<li class="hometask-item hometask-pen"><a href="quiz/test-time/quick-test.php">Тест на время</a></li>
			<li class="hometask-item hometask-pen"><a href="quiz/practice/practice.php">Практические задания (лёгкий уровень)</a></li>
			<li class="hometask-item hometask-pen"><a href="quiz/practice_2/practice_2.php">Практические задания (сложный уровень)</a></li>
		</ol>
	</div><hr>
	<h3 class="main-subtitle" id="task-link_eleventh">Тренажёр</h3>
	<div class="table_inner">
		<ol class="hometask-list">
			<li class="hometask-item hometask-barbell"><a href="http://f934340c.beget.tech/" target="_blank">Select - команды</a></li>
			<li class="hometask-item hometask-barbell"><a href="#" >Join - команды</a></li>
		</ol>
	</div><hr>
	<h3 class="main-subtitle" id="task-link_twelfth">Видеоуроки (ссылки на YouTube)</h3>
	<div class="table_inner">
		<ol class="hometask-list">
			<li class="hometask-item hometask-video"><a target="_blank" href="https://youtu.be/vuisTw450p4">Как работает База данных</a></li>
			<li class="hometask-item hometask-video"><a target="_blank" href="https://youtu.be/e_UBAV82xLs">Установка XAMPP и phpMyAdmin</a></li>
			<li class="hometask-item hometask-video"><a target="_blank" href="https://youtu.be/JYPWf_tcmtg">Знакомство с phpMyAdmin</a></li>
			<li class="hometask-item hometask-video"><a target="_blank" href="https://youtu.be/3Y69cVhowHU">Знакомство с MySQL Workbench</a></li>
			<li class="hometask-item hometask-video"><a target="_blank" href="https://youtu.be/TO5NFxtxDXs">Операторы Rollback и Commit</a></li>
		</ol>
	</div>
</div>`,
},
]
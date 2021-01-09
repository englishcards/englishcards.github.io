const questionArr = [
'Сделайте выборку значений столбца value в таблице country',
'Выведите все значения из таблицы singer, где возраст = 45 и выше',
'Выведите строку со всеми значениями, где имя = Iglesias и возраст = 77',
'Сделайте выборку уникальных значений в столбце name и упорядочьте их по возрасту в порядке убывания',
'Добавьте команду для выборки стран, которые начинаются с буквы C',
'Какой самый большой возраст представлен в таблице singer',
'Посчитайте средний возраст для певцов Iglesias',
'Измените возраст для Zibrov с 63 на 64',
'Выведите значения столбцов name и value, где возраст певцов будет меньше 70 и будет информация по странам для них',
'Сделайте выборку всех певцов и их стран (даже если данных по стране нет)'
];

const questionFieldArr = [`<p class="answer-field"><span
class="answer-field_empty"></span> name <span
class="answer-field_empty"></span> country;<span class="sign-answer
sign-field" hidden=""></span></p>`,

`<p class="answer-field"><span
class="answer-field_empty"></span> * FROM singer<br><span
class="answer-field_empty"></span> age &#160;<span
class="answer-field_empty" style="text-align:center;"></span> 45;<span class="sign-answer
sign-field" hidden=""></span></p>`,

`<p class="answer-field">SELECT * <span
class="answer-field_empty"></span> singer<br><span
class="answer-field_empty"></span> name = 'Iglesias'<br><span
class="answer-field_empty"></span> age = 77;<span class="sign-answer
sign-field" hidden=""></span></p>`,

`<p class="answer-field">SELECT <span
class="answer-field_empty"></span> <span
class="answer-field_empty"></span> FROM singer<br><span
class="answer-field_empty"></span> age <span
class="answer-field_empty" style="margin-right:2px;"></span>;<span class="sign-answer
sign-field" hidden=""></span></p>`,

`<p class="answer-field"><span
class="answer-field_empty"></span> value FROM  country<br><span
class="answer-field_empty"></span> value <span
class="answer-field_empty" style="text-align: center"></span> 'C%';<span class="sign-answer
sign-field" hidden=""></span></p>`,

`<p class="answer-field">SELECT <span
class="answer-field_empty" style="text-align: center"></span>( <span
class="answer-field_empty" style="text-align: center"></span>) FROM  singer;<span class="sign-answer
sign-field" hidden=""></span></p>`,

`<p class="answer-field">SELECT <span
class="answer-field_empty" style="text-align: center"></span>(age) FROM  singer<br><span
class="answer-field_empty"></span> <span
class="answer-field_empty"></span><br><span
class="answer-field_empty"></span> name = 'Iglesias';<span class="sign-answer
sign-field" hidden=""></span></p>`,

`<p class="answer-field"><span
class="answer-field_empty"></span> singer<br><span
class="answer-field_empty"></span> <span
class="answer-field_empty"></span> = 64<br><span
class="answer-field_empty"></span> id = 5;<span class="sign-answer
sign-field" hidden=""></span></p>`,

`<p class="answer-field"><span
class="answer-field_empty"></span> singer.name, country.value FROM singer<br><span
class="answer-field_empty"></span> country<br><span
class="answer-field_empty"></span> singer.id = country.<span
class="answer-field_empty"></span><br>WHERE singer.age <span
class="answer-field_empty" style="text-align: center"></span>70;<span class="sign-answer
sign-field" hidden=""></span></p>`,

`<p class="answer-field"><span
class="answer-field_empty"></span> singer.name, country.value FROM singer<br><span
class="answer-field_empty"></span> country<br><span
class="answer-field_empty"></span> singer.<span
class="answer-field_empty" style="min-width:30px;"></span> = country.<span
class="answer-field_empty"></span>;<span class="sign-answer
sign-field" hidden=""></span></p>`
];

const answerArr = [
`<div class="answer-wrap answer-show">SELECT value FROM country;</div>`,
`<div class="answer-wrap answer-show">SELECT * FROM singer<br>WHERE age >= 45;</div>`,
`<div class="answer-wrap answer-show">SELECT * FROM singer<br>WHERE name = 'Iglesias'<br>AND age = 77;</div>`,
`<div class="answer-wrap answer-show">SELECT DISTINCT name FROM singer<br>ORDER BY age DESC;</div>`,
`<div class="answer-wrap answer-show">SELECT value FROM country<br>WHERE value LIKE 'C%';</div>`,
`<div class="answer-wrap answer-show">SELECT MAX(age) FROM singer;</div>`,
`<div class="answer-wrap answer-show">SELECT AVG(age) FROM singer<br>GROUP BY name<br>HAVING name = 'Iglesias';</div>`,
`<div class="answer-wrap answer-show">UPDATE singer<br>SET age = 64<br>WHERE id = 5;</div>`,
`<div class="answer-wrap answer-show">SELECT singer.name, country.value FROM singer<br>JOIN country<br>ON singer.id = country.id_singer<br> WHERE singer.age < 70;</div>`,
`<div class="answer-wrap answer-show">SELECT singer.name, country.value FROM singer<br>LEFT JOIN country<br>ON singer.id = country.id_singer;</div>`
];

const resultArr = [ `<table class="table_main table_answer"><tr><th
class="column_bold">value</th></tr><tr><td>Italy</td></tr><tr><td>USA</td></tr><tr><td>Ukraine</td></tr><tr><td>Spain</td></tr><tr><td>England</td></tr><tr><td>Canada</td></tr></table>`,

`<table class="table_main table_answer"><tr><th
class="column_bold">id</th><th>name</th><th>age</th></tr><tr><td
class="column_bold">1</td><td>Iglesias</td><td>77</td></tr><tr><td
class="column_bold">2</td><td>Chelentano</td><td>82</td></tr><tr><td
class="column_bold">4</td><td>Dion</td><td>52</td></tr><tr><td
class="column_bold">5</td><td>Zibrov</td><td>63</td></tr><tr><td
class="column_bold">6</td><td>Iglesias</td><td>45</td></tr></table>`,

`<table class="table_main table_answer"><tr><th
class="column_bold">id</th><th>name</th><th>age</th></tr><tr><td
class="column_bold">1</td> <td>Iglesias</td> <td>77</td></tr>
</table>`,

`<table class="table_main table_answer"><tr><th>name</th></tr><tr>
<td>Chelentano</td></tr><tr><td>Iglesias</td></tr><tr>
<td>Zibrov</td></tr><tr><td>Dion</td></tr><tr><td>Sheeran</td>
</tr></table>`,

`<table class="table_main table_answer"><tr><th>value</th></tr><tr><td>Canada</td></tr></table>`,

`<table class="table_main table_answer"><tr><th>MAX(age)</th></tr><tr><td>82</td></tr></table>`,

`<table class="table_main table_answer"><tr><th>AVG(age)</th></tr><tr><td>61</td></tr></table>`,

`<table class="table_main table_answer"><tr><th
class="column_bold">id</th><th>name</th><th>age</th></tr> <tr><td
class="column_bold">1</td><td>Iglesias</td><td>77</td></tr><tr><td
class="column_bold">2</td><td>Chelentano</td> <td>82</td></tr><tr><td
class="column_bold">3</td><td>Sheeran</td><td>29</td></tr><tr><td
class="column_bold">4</td> <td>Dion</td><td>52</td></tr><tr><td
class="column_bold">5</td><td>Zibrov</td><td>64</td></tr><tr><td
class="column_bold">6</td> <td>Iglesias</td><td>45</td></tr></table>`,

`<table class="table_main table_answer"><tr><th style="width:50%;">name</th><th>value</th></tr><tr><td>Sheeran</td><td>England</td></tr><tr>
<td>Dion</td><td>Canada</td></tr><tr><td>Zibrov</td><td>Ukraine</td></tr></table>`,


`<table class="table_main table_answer"><tr><th style="width:50%;">name</th><th>value</th></tr><tr><td>Iglesias</td><td>Spain</td></tr><tr>
<td>Chelentano</td><td>Italy</td></tr><tr><td>Sheeran</td><td>England</td></tr><tr><td>Dion</td><td>Canada</td></tr>
<tr><td>Zibrov</td><td>Ukraine</td></tr><tr><td>Iglesias</td><td>NULL</td></tr></table>`
];

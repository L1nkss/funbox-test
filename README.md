[ДЕМО](https://l1nkss.github.io/funbox-test/)

#### 1. Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения
- пользователя;
- менеджера проекта;
- дизайнера;
- верстальщика;
- клиентского программиста;
- серверного программиста.

##### Ответ


- Для пользователя сайт должен быть в первую очередь понятен и удобен в использовании. Чтобы ему не приходилось разбиваться как сделать то, или иное действие. Так же сайт должен отображаться корректно на различных браузер(даже в IE11 в некоторых случаях) и разных расширениях экрана. Хороший дизайн, так же влияет на точку зрения пользователя

- Для менеджера проекта главное, чтобы задача была выполнена в срок и без ошибок

- Мне кажется дизайнерам самое главное, чтобы сайт смотрелся также, как и на макете

- С точки зрения верстальщика, хорошая верстка это когда не использованы костыли в разметке и стилях. Использованы правильные семантические теги. Верстка корректно отображается в разных браузерах и различных расширениях экрана(аналогично как с пользователем)

- Клиентскому программисту, как мне кажется главное, чтобы разметку было легко перенести в скажем jsx код и также легко навесить логику. Возможно кому-то, так же важно чтобы все отображалось корректно(аналогично с пользователем и верстальщиком)

- Серверному программисту самое главное, чтобы можно было получить данные с разметки путем обработки скажем form. Поэтому верстальщику также необходимо правильно расставлять id, чтобы можно было получить правильные данные

* * *
#### 2. Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки. Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.

##### Ответ
Для работы с крупными многостраничными сайтами используют такие методологии как БЭМ. БЭМ помогает создавать отдельные блоки, которые можно переиспользовать на сайте. На моей работе мы применяем БЭМ, и так же у нас написан свой мини аналог bootstrap.
Так же мы используем предпроцессоры для автоматизации, у нас используется Stylus.

* * *
#### 3. Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.

##### Ответ
Для того, чтобы сайт отображался одинаково на различных устройствах и браузер, в работе используется autoprefixer, который добавляет префиксы для свойств css, чтобы они поддерживались в различных браузерах. В работе так же используется сайт [can i use](https://caniuse.com/), который помогает определить, поддерживается ли свойство конкретным браузером. Для тестирования сайта используется [browserstack](https://www.browserstack.com/) который позволяет эмулировать работу сайта на различных устройствах.
Chrome dev tools тоже хорошо помогает тестировать верстку.

* * *
#### 4. Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.

##### Ответ
В работе помогает gulp или webpack. Из предпроцессоров scss или stylus(использую на работе).
Для работы с js/react использую eslint и в последнее время пробую typescript
* * *
#### 5.Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике? 

##### Ответ
 Я бы посмотрел код в браузере, посмотрел из-за чего может возникать некорректное отображение. Потом на сайте Can I use посмотрел свойства, которые используются в этих блоках и возможно какое то из них, не поддерживается. Если проблема все ещё не понятно, то можно попытаться найти ответ на [stackoverflow](https://stackoverflow.com/)
 На практике приходилось с таким сталкиваться. В основном проблема была с горячо любимым IE11. Почти всегда проблема решалась добавлением парой дополнительных свойства.
* * *
#### 6. Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?

##### Ответ
Я бы спросил у дизайнера, какой должен быть эффект при наведении. Если такой возможности нет, то смотрел бы на похожии случаи на сайте и сделал бы в таком же стиле.
* * *
#### 7. Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). Какое направление развития вам более близко: JS-программирование, HTML/CSSверстка или и то, и другое? Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?

##### Ответ
В последнее время изучаю js и react. В основном информацию беру из следующих ресурсов:
<br>
[habr](https://habr.com/ru/feed/)
<br>
[medium](https://medium.com/)
<br>
[learn.javascript](https://learn.javascript.ru/)
<br>
Так же на Youtube можно найти много интересных видео
<br>
Более интересно js программирование, но стараюсь поддерживать уровень и по верстке тоже.
<br>
Помимо знаний программирования, мне было бы интересно попробовать изучить дизайн, хотя бы поверхностно, чтобы понимать как лучше должно отображаться та, или иная информация на сайте

* * *
#### 8. Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.
##### Ответ
Нравится решать интересные задачи и находить решение на них. Люблю путешествовать, особенно люблю посещать европейские музыкальные фестивали.
Если есть свободное время, то могу сыграть во что нибудь с друзьями.

<br>
Из последних работ, могу выделить работы, которые делал для изучения typescript'a и ректа
<br>
Todo-list написанны в 2х различных варианта:
<br>

[todo-list-hooks](https://github.com/L1nkss/todo-list-hooks)
<br>

[todo-list](https://github.com/L1nkss/todo-list)
<br>

Сейчас делаю pet проект по фильмам [Movie-app](https://github.com/L1nkss/Movie-app)
<br>

Так же проходил курсы от HTML Academy

[Гитхаб](https://github.com/L1nkss).

---
title: Posts list? Or what?
url: /posts
contributors:
  - MurichAJ
metaTags: 
  - {name: application-name, content: "Static Site Generation Example"}
  - {name: viewport, content: "width=device-width, initial-scale=1.0"}
  - {name: description, content: "Study Web Development"}
  - {name: keywords, content: "study,Stencil,JavaScript,TypeScript,HTML,SSG"}
  - {name: autor, content: "Murich Alexandr"}
---

# Try Markdown
## Quote
> Данный текст будет заключен в HTML-теги <blockquote>Quote in Quote</blockquote>

## Lists
<!-- * list
- first el
- second el -->
* элемент маркированного списка
- ещё один элемент ненумерованного списка
+ буллеты элементов могут быть разными

Вложенные пункты создаются четырьмя пробелами перед маркером пункта:

* элемент 1
* элемент 2
    * вложенный элемент 2.1
    * вложенный элемент 2.2
* элемент ...

1. Элемент нумерованного списка
2. Элемент №2 того же списка
9. Элемент №3 списка — элементы нумеруются по порядку, цифра в начале строки не имеет значения

## Cancel
необходимо сделать ~~одну вещь~~ другую вещь

## Program Code
Пример кода внутри строки (inline) `Hello world!`


## Text highlighting
*выделение* (например, курсив)  
_выделение_ (например, курсив)  
__сильное выделение__ (например, полужирное начертание)  
**сильное выделение** (например, полужирное начертание)  
***Жирный и курсивный текст***

## Code Block
Ниже начинается многострочный блок кода

    <!doctype html>
    <html>
        <head>
            <!-- Заголовок документа -->
        </head>
        <body>
            <!-- Тело документа -->
        </body>
    </html>

Блок кода  
завершился

Ниже начинается многострочный блок кода
```
<!doctype html>
<html>
    <head>
        <!-- Заголовок документа -->
    </head>
    <body>
        <!-- Тело документа -->
    </body>
</html>
```

Блок кода  
завершился

## Headers
# Заголовок первого уровня
...
### Заголовок третьего уровня
...
###### Заголовок шестого уровня
Заголовок первого уровня
========================

Заголовок второго уровня
------------------------

## Links
[Текст ссылки](http://example.com/ "Необязательный заголовок ссылки")

Где то среди текста встречается [текст ссылки][example].

Также ссылка повторяется [пример адреса][Example].

Ссылка на [второй][Foo] также [bar][] ресурсы.

[example]: http://example.com/ "==Необязательный заголовок ссылки"
[foo]: http://example.net/ '..Необязательный заголовок ссылки'
[Bar]: http://example.edu/ (!!Необязательный заголовок ссылки)

## Images
![Alt-текст](/assets/images/Unknown.jpg "Заголовок изображения")

Some header
---
Some header
===
Some header
***
***
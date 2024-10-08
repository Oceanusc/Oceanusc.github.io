---
title: 输入和输出
icon: IO
author: 廖雪峰
date: 2020-05-20
category: Python
---

一个脚本语言少不了与用户进行交互，就一定涉及到输入输出。

<!-- more -->

## 输出

用 `print()` 在括号中加上字符串，就可以向屏幕上输出指定的文字。比如输出 `'hello, world'`，用代码实现如下:

```py
>>> print('hello, world')
```

`print()` 函数也可以接受多个字符串，用逗号 “,” 隔开，就可以连成一串输出:

```py
>>> print('The quick brown fox', 'jumps over', 'the lazy dog')
The quick brown fox jumps over the lazy dog
```

`print()` 会依次打印每个字符串，遇到逗号“,”会输出一个空格。

`print()` 也可以打印整数，或者计算结果:

```py
>>> print(300)
300
>>> print(100 + 200)
300
```

因此，我们可以把计算 `100 + 200` 的结果打印得更漂亮一点:

```py
>>> print('100 + 200 =', 100 + 200)
100 + 200 = 300
```

注意，对于 `100 + 200`，Python 解释器自动计算出结果 300，但是，`'100 + 200 ='` 是字符串而非数学公式，Python 把它视为字符串，请自行解释上述打印结果。

## 输入

如果需要用户从电脑输入一些字符，Python 提供了一个 `input()`，可以让用户输入字符串，并存放到一个变量里。比如输入用户的名字:

```py
>>> name = input()
oceanusc
```

当您输入 `name = input()` 并按下回车后，Python 交互式命令行就在等待您的输入了。这时，您可以输入任意字符，然后按回车后完成输入。

输入完成后，不会有任何提示，Python 交互式命令行又回到 `>>>` 状态了。那我们刚才输入的内容到哪去了? 答案是存放到 `name` 变量里了。可以直接输入 `name` 查看变量内容:

```py
>>> name
'oceanusc'
```

::: tip 变量

请回忆初中数学所学的代数基础知识:

设正方形的边长为 $a$ ，则正方形的面积为 $a \times a$ 。把边长 $a$ 看做一个变量，我们就可以根据 $a$ 的值计算正方形的面积，比如:

若 $a = 2$ ，则面积为 $a \times a = 2 \times 2 = 4$ ；

若 $a = 3.5$，则面积为 $a \times a = 3.5 \times 3.5 = 12.25$ 。

在计算机程序中，变量不仅可以为整数或浮点数，还可以是字符串，因此，`name` 作为一个变量就是一个字符串。

要打印出 `name` 变量的内容，除了直接写 `name` 然后按回车外，还可以用 `print()` 函数:

```py
>>> print(name)
oceanusc
```

:::

有了输入和输出，我们就可以把上次打印 `'hello, world'` 的程序改成有点意义的程序了:

```py
name = input()
print('hello,', name)
```

运行上面的程序，第一行代码会让用户输入任意字符作为自己的名字，然后存入 `name` 变量中；第二行代码会根据用户的名字向用户说 `hello`，比如输入 `oceanusc`

```sh
C:/Workspace> python hello.py
oceanusc
hello, oceanusc
```

但是程序运行的时候，没有任何提示信息告诉用户:“嘿，赶紧输入您的名字”，这样显得很不友好。所以 `input()` 可以让您显示一个字符串来提示用户，于是我们把代码改成:

```py
name = input('please enter your name: ')
print('hello,', name)
```

再次运行这个程序，您会发现，程序一运行，会首先打印出 `please enter your name:`，这样，用户就可以根据提示，输入名字后，得到 `hello, xxx` 的输出:

```sh
C:/Workspace> python hello.py
please enter your name: oceanusc
hello, oceanusc
```

每次运行该程序，根据用户输入的不同，输出结果也会不同。

在命令行下，输入和输出就是这么简单。

## 小结

任何计算机程序都是为了执行一个特定的任务，有了输入，用户才能告诉计算机程序所需的信息，有了输出，程序运行后才能告诉用户任务的结果。

输入是 Input，输出是 Output，因此，我们把输入输出统称为 Input/Output，或者简写为 IO。

`input()` 和 `print()` 是在命令行下面最基本的输入和输出，但是，用户也可以通过其他更高级的图形界面完成输入和输出，比如，在网页上的一个文本框输入自己的名字，点击“确定”后在网页上看到输出信息。

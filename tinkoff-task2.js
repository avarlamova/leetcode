/*Николай решил придумать себе псевдоним. Он считает, что в красивых никнеймах гласные и согласные буквы чередуются. Например «megabos» — красивый, а «nikolay» — нет.


По заданному никнейму проверьте, является ли он красивым. Буквы ‘a’, ‘e’, ‘i’, ‘o’, ‘u’, ‘y’ являются гласными. Остальные - согласные.


Формат входных данных


Единственная строка входных данных содержит строку ﻿ss﻿, состоящую из маленьких латинских букв (﻿1\le |s| \le1001≤∣s∣≤100﻿) — никнейм, который необходимо проверить.


Формат выходных данных


Если никнейм является красивым, выведите «YES» (без кавычек), иначе «NO» (без кавычек).*/

function isAwesome(name) {
    let res = name.split('');
    let vowels = ['a', 'e' , 'i', 'o', 'u', 'y']
    let count = 0;
    let answer;
    for (let i = 0; i<res.length;i++){
    if (vowels.includes(res[i])&&!vowels.includes(res[i+1])) 
    count++
    if (!vowels.includes(res[i])&&vowels.includes(res[i+1])) 
    count++
    }
    if (count===res.length) answer = 'YES'
    else answer = 'NO'
    console.log(answer)
}

isAwesome('nikolay')
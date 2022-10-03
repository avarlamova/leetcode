// 1) всегда начинаться с одного "/"

// 2) любые две вложенные директории разделяются ровно одним знаком "/"

// 3) путь не заканчивается "/" (за исключением корневой директории, состоящего только из символа "/")

// 4) в каноническом пути есть только директории, т.е. нет ни одного вхождения "." или ".." как соответствия текущей или родительской директории


const getCanonicalPath = (str) => {
    if (str[0]==='/') {
        str = str.substr(1)
    }
    if (str[str.length-1]=='/' && str!=='/') {
        str = str.substr(0,str.length-1)
    }
    let newStr =str.replace(/\./g,'')
    newStr = '/'+newStr

    let pathsArr = newStr.split('/').filter(el=>el!=='')
    let res = '/'
    for (let i = 0; i < pathsArr.length; i++) {
        res+=pathsArr[i]+'/'
    }

    if (res[res.length-1]=='/' && res!=='/') {
        res = res.substr(0,res.length-1)
    }

    return res
}


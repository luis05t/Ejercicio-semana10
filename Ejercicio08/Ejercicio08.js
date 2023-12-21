'use strict'
    let computadora = "LAB2#B";
    let letter = computadora.indexOf("#")+1;
    let codeAscii = computadora.codePointAt(letter)+1;
    alert(String.fromCodePoint(codeAscii));
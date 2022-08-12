// ([(]{)})
// [()()(){[][]}{([]{})}]
let sentence="([]()[]{}()(){})"
let signs={
    '(':')',
    '[':']',
    '{':'}'
}
let cont=[]
console.log(sentence)
sentence=sentence.split("")
for(let i=0;i<sentence.length;i++){
    if(i==0){
        cont.push(sentence[i])
        continue;
    }
    if(sentence[i]==signs[cont[cont.length-1]]){
        cont.pop()
    }else{
        cont.push(sentence[i])
    }
}
if (cont.length==0){
    document.write(`${sentence.join("")} ---> CORRECTO`)
}else{
    document.write(`${sentence.join("")} ---> INCORRECTO`)
}


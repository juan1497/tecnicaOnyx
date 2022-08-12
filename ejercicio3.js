let sentence =prompt("Escribe una frase").toLocaleLowerCase();
// hello world , big WoRld ?
sentence=sentence.split(" ");
let not=[',','.',';',':','(',')','!','¡','?','¿','=']
let res={}
for (let i=0;i<sentence.length;i++){
    let cont=0;
    if(!not.includes(sentence[i])){
        for(let j=0;j<sentence.length;j++){
            if (sentence[i]===sentence[j]){
                cont++;
            }
        }
        res[sentence[i]]=cont;
    }
}
document.write(`${sentence.join(" ")} <br>`)
for (let key in res){
    document.write(`${key}: ${res[key]} <br>`)
}


 
// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  lista = [];
  for (let clave in objeto){
    lista.push([clave, objeto[clave]]);
  }
  return lista;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  miObjeto =  {};
//  for(let i=0; i<string.length; i++){
//    if(string[i] in miObjeto == false){
//      let cont = 1;
//      for(let j=i+1; j<string.length; j++){
//        if(string[j]==string[i]){
//          cont = cont + 1;
//        }
//      }
//      miObjeto[string[i]] = cont;
//    }
// 
//  }
//  return miObjeto;
  for(let i=0; i<string.length; i++){
    if(Object.keys(miObjeto).includes(string[i])){
      miObjeto[string[i]] = miObjeto[string[i]] + 1
    }
    else{
      miObjeto[string[i]] = 1
    }
  }
  return miObjeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let minus='';
  let mayus='';
  
  for(let i=0; i<s.length; i++){
    if(s[i]==s[i].toUpperCase()){
      mayus=mayus + s[i];
    }
    else{
      minus = minus + s[i];
    }
  }
  let resul = mayus + minus;
  return resul;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  
//MI CODIGO
//  array=str.split(' ');
//  newStr='';
//  for(i=0; i<array.length; i++){
//    for(j=array[i].length-1; j>=0; j--){
//      newStr=newStr + array[i][j];
//    }
//    newStr=newStr + ' ';
//  }
//  newStr= newStr.trimEnd()
//  return newStr;

// RESOLUCION TUTO
    let fraseEspejo = str.split(' ').map(function(palabra){
      return palabra.split('').reverse().join('') // esta funcion que està dentro de map recibe una palabra y la da vuelta 
                                                  // ej 'Hola' --> 'aloH'
                                                  // el split es solo para tratarla como array y luego uso el join para volver
                                                  // a unirla en un string.
    }).join(' ') // con str.split(' ') separamos cada palabra. Con .map() tomamos cada palabra y aplicamos la función explicada arriba
                 // con el último .join(' ') volvemos a unir el array en un único string separado por espacios.

    return fraseEspejo;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numero = numero.toString()
  let nuevoNum = numero.split('').reverse().join('');
  if(numero==nuevoNum){
    return 'Es capicua';
  } else {
    return 'No es capicua';
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let nuevaCadena = cadena.split('').map(function(caracter){
    if(caracter=='a' || caracter == 'b' || caracter == 'c' ){
      caracter = '';
      return caracter;
    }
    else{
      return caracter;
    }
  }).join('');

  return nuevaCadena;

  // OTRA FORMA
  // cadena = cadena.replace('a','');
  // cadena = cadena.replace('b','');
  // cadena = cadena.replace('c','');
  // return cadena;

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let newArray = arr.sort(function(a,b){
    return a.length - b.length
  });

  return newArray;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  let intersec = [];
  for(i=0; i<arreglo1.length ; i++){
    for(j=0; j<arreglo2.length; j++){
      if(arreglo1[i]==arreglo2[j]){
        intersec.push(arreglo1[i]);
      }
    }
  }
  return intersec; 
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};


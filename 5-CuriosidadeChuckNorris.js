var  curiosidades_chuck_norris = [ // o array curiosidades_chuck_norris armazena fatos curiosos sobre Chuck Norris
  // cada curiosidade contida nesse array possui um título e um contéudo 

  { titulo: "Cuidados com a higiene bucal",           conteudo: "Chuck Norris usa arame farpado como fio dental."},     
  { titulo: "Fórmula para maratonar séries",          conteudo: "Chuck Norris pode assistir um episódio de 60 minutos em 22 segundos."},     
  { titulo: "Suicida que não morre",                  conteudo: "Chuck Norris foi homem-bomba 34 vezes."},     
  { titulo: "Olhos que tudo veem",                    conteudo: "Chuck Norris já viu o homem invisível."},     
  { titulo: "Manipulando o tempo",                    conteudo: "Chuck Norris não usa relógio. Ele decide que horas são."},     
  { titulo: "Praticando esportes radicais",           conteudo: "Chuck Norris faz bungee jump sem corda."},     
  { titulo: "Não vale chorar",                        conteudo: "Chuck Norris faz cebolas chorarem."},     
  { titulo: "Tempero de fogo",                        conteudo: "Chuck Norris usa pólvora como tempero."},     
  { titulo: "Extinção dos dinossauros",               conteudo: "Chuck Norris encarou os dinossauros uma vez, apenas uma."},     
  { titulo: "Contando sem parar",                     conteudo: "Chuck Norris contou até o infinito. Duas vezes."} 
]; 

var  tamanho_colecao = curiosidades_chuck_norris.length;  // obtemos o total de objetos da coleção e armazenamos na variável o tamanho_coleção 

var numero_sorteado = Math.floor(Math.random() * tamanho_colecao); // aqui estamos usando duas funções Math.random() e Math.floor()
//Math.random()  ==> números que podem ser retornados
// Math.floor()  ==> é usado para arredondar o número para o menor número inteiro mais próximo

var curiosidade_escolhida = curiosidades_chuck_norris
[numero_sorteado]; 
//var curiosidade_escolhida ==> com isso, foi armazenada na variável curiosidades_escolhida um objeto da coleção, que contém fatos curiosos sobre Chuck Norris
//curiosidades_chuck_norris [numero_sorteado] ==> essa var é utilizada como índice na coleção, o que nos permite acessar um objeto dentro do array

var titulo_curiosidade = curiosidade_escolhida.titulo; // os dados sobre a curiosidade selecionada  são armazenadas em variáveis
var conteudo_curiosidade = curiosidade_escolhida.conteudo; // os dados sobre a curiosidade selecionada  são armazenadas em variáveis

console.log("CURIOSIDADE SOBRE CHUCK NORRIS"); 
console.log("Título: " + titulo_curiosidade); 
console.log("Conteúdo: " + conteudo_curiosidade);
// no final são impressos fatos curiosos sobre Chuck Norris exibindo um título e um contéudo sobre a curiosidade 
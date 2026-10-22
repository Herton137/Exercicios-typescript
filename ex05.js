// 2. Criando o array com as leituras das capitais
const leituras = [
    ['Porto Velho', 34],
    ['Curitiba', 12],
    ['Manaus', 31],
    ['Porto Alegre', 9],
    ['Natal', 29]
];
// 3. Função extremos que devolve [mínima, máxima]
function extremos(temps) {
    const minima = Math.min(...temps);
    const maxima = Math.max(...temps);
    return [minima, maxima];
}
const temperaturasApenas = leituras.map(l => l[1]);
const [minima, maxima] = extremos(temperaturasApenas);
const mediaGeral = temperaturasApenas.reduce((acc, t) => acc + t, 0) / temperaturasApenas.length;
// 4. Percorrendo as leituras com for...of e desestruturação
for (const [cidade, temp] of leituras) {
    console.log(`${cidade}: ${temp}°C`);
}
const contatoComEmail = ['Ana', '(69) 99999-1111', 'ana@imprensa.com'];
const contatoSemEmail = ['Carlos', '(69) 98888-2222'];
const historicoPortoVelho = ['Porto Velho', 32, 33, 34, 31, 35, 33, 34];
// 7. Tupla oficial com readonly
const capitalOficial = ['RO', 'Porto Velho'];
// capitalOficial[0] = 'AC'; // Cannot assign to '0' because it is a read-only property.
console.log(`Mínima: ${minima}°C | Máxima: ${maxima}°C | Média: ${mediaGeral.toFixed(1)}°C`);
export {};

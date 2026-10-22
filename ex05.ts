export {};

// 1. Representando cada leitura como uma tupla nomeada
type LeituraClima = [cidade: string, temperatura: number];

// 2. Criando o array com as leituras das capitais
const leituras: LeituraClima[] = [
  ['Porto Velho', 34],
  ['Curitiba', 12],
  ['Manaus', 31],
  ['Porto Alegre', 9],
  ['Natal', 29]
];

// 3. Função extremos que devolve [mínima, máxima]
function extremos(temps: number[]): [number, number] {
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

// 5. Tupla de contatos de imprensa com e-mail opcional
type ContatoImprensa = [nome: string, telefone: string, email?: string];
const contatoComEmail: ContatoImprensa = ['Ana', '(69) 99999-1111', 'ana@imprensa.com'];
const contatoSemEmail: ContatoImprensa = ['Carlos', '(69) 98888-2222'];

// 6. Histórico semanal usando elemento rest
type HistoricoSemanal = [string, ...number[]];
const historicoPortoVelho: HistoricoSemanal = ['Porto Velho', 32, 33, 34, 31, 35, 33, 34];

// 7. Tupla oficial com readonly
const capitalOficial: readonly [string, string] = ['RO', 'Porto Velho'];
// capitalOficial[0] = 'AC'; // Cannot assign to '0' because it is a read-only property.

console.log(`Mínima: ${minima}°C | Máxima: ${maxima}°C | Média: ${mediaGeral.toFixed(1)}°C`);
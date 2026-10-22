// 1. Nome digitado pelo operador do caixa (com espaços extras e letras minúsculas)
const nomeDigitado = ' maria da silva ';
// 2. Função para formatar o nome corretamente
function formatarNome(nome) {
    const excecoes = ['da', 'de', 'do'];
    return nome
        .trim()
        .split(/\s+/) // divide a string por qualquer quantidade de espaços
        .map((palavra, index) => {
        const min = palavra.toLowerCase();
        // Mantém as exceções em minúsculo, exceto se forem a primeira palavra do nome
        if (excecoes.includes(min) && index !== 0) {
            return min;
        }
        return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
    })
        .join(' ');
}
// 3. Conversões de string para number
const precoLido = Number('12.40');
const quantidadeLida = parseInt('3un', 10); // o parseInt ignora o 'un' no final
// 4. Cliente fidelidade (garante 5% de desconto)
const clienteFidelidade = true;
const subtotal = precoLido * quantidadeLida;
const desconto = clienteFidelidade ? subtotal * 0.05 : 0;
const total = subtotal - desconto;
// 5. Formatando o número do cupom com padStart para ter 6 dígitos (42 vira 000042)
const numeroCupom = String(42).padStart(6, '0');
// Montagem do cupom usando uma única template string multilinha
const cupom = `CUPOM Nº ${numeroCupom}
Cliente: ${formatarNome(nomeDigitado)}
Item: ${quantidadeLida} x R$ ${precoLido.toFixed(2)}
Subtotal: R$ ${subtotal.toFixed(2)}
Desconto fidelidade: R$ ${desconto.toFixed(2)}
TOTAL: R$ ${total.toFixed(2)}`;
console.log(cupom);
export {};

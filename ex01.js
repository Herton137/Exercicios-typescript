// 1. variáveis com anotação explícita de tipo
const nomeProduto1 = 'Pão francês';
const precoUnitario1 = 0.75;
const quantidade1 = 12;
const nomeProduto2 = 'Bolo de cenoura';
const precoUnitario2 = 18.5;
const quantidade2 = 2;
// 2. variável declarada sem anotação
// passei o mouse no VS Code e o tipo inferido foi: boolean
const aberta = true;
// 3. cálculos de subtotal e total
const subtotal1 = precoUnitario1 * quantidade1;
const subtotal2 = precoUnitario2 * quantidade2;
const total = subtotal1 + subtotal2;
// 4. número com separadores numéricos
const paesVendidosAno = 1250000;
// 5. código hexadecimal para categoria
const categoriaPanificacao = 0x1A;
// 6. provocando erro de tipo ao atribuir string para number:
// quantidade1 = 'doze'; // Type 'string' is not assignable to type 'number'.
// saída exata conforme a especificação da atividade
console.log(`${nomeProduto1}: ${quantidade1} x R$ ${precoUnitario1.toFixed(2)} = R$ ${subtotal1.toFixed(2)}`);
console.log(`${nomeProduto2}: ${quantidade2} x R$ ${precoUnitario2.toFixed(2)} = R$ ${subtotal2.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Padaria aberta? ${aberta}`);
console.log(`Pães vendidos no ano: ${paesVendidosAno}`);
console.log(`Categoria: ${categoriaPanificacao}`);
export {};

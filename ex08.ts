export {};

// 1. Código do cliente aceitando number ou string, com estreitamento via typeof
function formatarCodigo(c: number | string): string {
  if (typeof c === 'number') {
    return `CLI-${String(c).padStart(4, '0')}`;
  }
  return c;
}

// 2. Tipo literal para o tamanho da camiseta
type TamanhoCamiseta = 'P' | 'M' | 'G' | 'GG';
const camiseta: TamanhoCamiseta = 'M';
// const erroTamanho: TamanhoCamiseta = 'XG'; // Type '"XG"' is not assignable to type 'TamanhoCamiseta'.

// 3. Função calcularFrete com regiões literais e seus respectivos valores
type Regiao = 'norte' | 'nordeste' | 'centro-oeste' | 'sudeste' | 'sul';

function calcularFrete(regiao: Regiao): number {
  switch (regiao) {
    case 'norte': return 25;
    case 'nordeste': return 20;
    case 'centro-oeste': return 18;
    case 'sudeste': return 12;
    case 'sul': return 15;
  }
}

// 4. Campo complemento aceitando string ou null
const complemento: string | null = null;
const textoComplemento = complemento !== null ? complemento : '(sem complemento)';

// 5. Função limparTelefone que aceita string ou number e remove caracteres não numéricos
function limparTelefone(tel: string | number): string {
  const texto = typeof tel === 'number' ? String(tel) : tel;
  return texto.replace(/\D/g, '');
}

/*
6. Reflexão sobre inferência de literais:
- `const r = 'sul'` infere o tipo literal exato `'sul'`, porque o valor é constante e nunca vai mudar. 
  Por isso, ele casa perfeitamente com o parâmetro restrito de `calcularFrete`.
- Já `let r2 = 'sul'` infere o tipo amplo `string`, pois variáveis com `let` podem receber novos valores depois. 
  Como `string` é mais genérico do que o tipo `Regiao`, o compilador bloqueia a passagem direta.
- Para corrigir o caso do `let`, basta especificar o tipo explicitamente: `let r2: Regiao = 'sul';`
*/

const r = 'sul';

// Saída exata conforme a especificação da atividade
console.log(`Cliente: ${formatarCodigo(42)} | Camiseta: ${camiseta}`);
console.log(`Entrega: Rua das Flores, 100 - ${textoComplemento}`);
console.log(`Frete para o sul: R$ ${calcularFrete(r).toFixed(2)}`);
console.log(`Telefone: ${limparTelefone('(69) 99999-0000')}`);
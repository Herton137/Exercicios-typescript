export {};

const respostaOk = '{"cidade":"Porto Velho","temperatura":34,"umidade":0.62}';
const respostaQuebrada = '{"cidade":"Porto Velho","temperatura":"quente"}';
const respostaInvalida = '{ cidade: Porto Velho ';

// 1. Versão com any (para demonstrar o problema)
function lerComAny(json: string): void {
  const dados: any = JSON.parse(json);
  console.log(dados.temperatura.toFixed(1));
}
/*
Nota sobre o any:
Ao rodar lerComAny(respostaQuebrada), o TypeScript aceita o código sem nenhum aviso na compilação.
Porém, em tempo de execução, ele estoura um erro:
TypeError: dados.temperatura.toFixed is not a function
Isso acontece porque a propriedade temperatura veio como a string "quente" em vez de um número, 
e o any nos deu uma falsa sensação de segurança.
*/

// 3. Função falhar que retorna never e lança um Error
function falhar(mensagem: string): never {
  throw new Error(mensagem);
}

// 2. Versão segura com unknown e estreitamento de tipos (type narrowing)
function lerClima(json: string): { cidade: string; temperatura: number } {
  let parsed: unknown;

  try {
    parsed = JSON.parse(json);
  } catch {
    // Dica da atividade: JSON.parse lança um SyntaxError para JSON malformado.
    // Capturamos aqui e usamos a função falhar.
    falhar('JSON malformado');
  }

  if (
    typeof parsed === 'object' &&
    parsed !== null &&
    'cidade' in parsed &&
    'temperatura' in parsed
  ) {
    const obj = parsed as Record<string, unknown>;

    if (typeof obj.cidade === 'string' && typeof obj.temperatura === 'number') {
      return { cidade: obj.cidade, temperatura: obj.temperatura };
    }
  }

  falhar('campo "temperatura" inválido');
}

// 4 e 5. Testando as três respostas com try/catch e verificação erro instanceof Error
const respostas = [respostaOk, respostaQuebrada, respostaInvalida];

for (const resp of respostas) {
  try {
    const dados = lerClima(resp);
    console.log(`${dados.cidade}: ${dados.temperatura.toFixed(1)}°C`);
  } catch (erro: unknown) {
    if (erro instanceof Error) {
      console.log(`Erro: ${erro.message}`);
    }
  }
}
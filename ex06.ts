export {};

// 1. Enum numérico com início em 1
enum StatusPedido {
  Recebido = 1,
  EmPreparo,
  SaiuParaEntrega,
  Entregue,
  Cancelado
}

// 2. Enum de string para forma de pagamento
enum FormaPagamento {
  PIX = 'PIX',
  CARTAO = 'CARTAO',
  DINHEIRO = 'DINHEIRO'
}

// 3. Função mensagem usando switch
function mensagem(status: StatusPedido): string {
  switch (status) {
    case StatusPedido.Recebido:
      return 'Recebemos seu pedido!';
    case StatusPedido.EmPreparo:
      return 'Seu pedido está sendo preparado 🍳';
    case StatusPedido.SaiuParaEntrega:
      return 'O entregador está a caminho 🛵';
    case StatusPedido.Entregue:
      return 'Pedido entregue. Bom apetite!';
    case StatusPedido.Cancelado:
      return 'Pedido cancelado.';
  }
}

// 4. Função para avançar de etapa (pedido entregue ou cancelado não muda)
function avancar(status: StatusPedido): StatusPedido {
  if (status === StatusPedido.Entregue || status === StatusPedido.Cancelado) {
    return status;
  }
  return status + 1;
}

// 5 e 6. Simulação do pedido do início ao fim usando mapeamento reverso (StatusPedido[2])
let statusAtual: StatusPedido = StatusPedido.Recebido;

while (statusAtual <= StatusPedido.Entregue) {
  const nomeEtapa = StatusPedido[statusAtual]; // Mapeamento reverso
  console.log(`[${statusAtual} - ${nomeEtapa}] ${mensagem(statusAtual)}`);

  if (statusAtual === StatusPedido.Entregue) {
    break;
  }
  statusAtual = avancar(statusAtual);
}

// 7. Tentativa de atribuir string diretamente a um enum de string:
// const pagamentoInvalido: FormaPagamento = 'PIX'; 
// Type '"PIX"' is not assignable to type 'FormaPagamento'.
/*
Explicação: Diferente dos enums numéricos, os enums de string no TypeScript exigem que você use 
o membro do próprio enum (ex: FormaPagamento.PIX). O compilador não aceita uma string bruta diretamente, 
mesmo que o texto seja idêntico.
*/

const pagamento: FormaPagamento = FormaPagamento.PIX;
console.log(`Pagamento: ${pagamento}`);
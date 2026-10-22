// 4. Enum para a situação do ticket
var SituacaoTicket;
(function (SituacaoTicket) {
    SituacaoTicket["Aberto"] = "ABERTO";
    SituacaoTicket["Pago"] = "PAGO";
})(SituacaoTicket || (SituacaoTicket = {}));
// 6. Cálculo da tarifa com verificação exaustiva no default usando never
function calcularTarifa(v, horas) {
    const h = Math.max(1, horas); // todo veículo paga pelo menos 1 hora
    switch (v.tipo) {
        case 'carro':
            return 8.00 + (h > 1 ? (h - 1) * 5.00 : 0);
        case 'moto':
            return 4.00 + (h > 1 ? (h - 1) * 2.00 : 0);
        case 'caminhao':
            return 15.00 + (h > 1 ? (h - 1) * 10.00 : 0);
        default: {
            const _naoTratado = v;
            return _naoTratado;
        }
    }
}
/*
O que o `never` garantiu: se no futuro criarmos um novo tipo de veículo (como 'Van') e esquecermos
de tratá-lo no switch, o TypeScript impede a compilação apontando que o tipo não é atribuível a `never`.
*/
// 7. Fechar o ticket calculando horas, desconto do selo e imutabilidade com spread
function fecharTicket(t) {
    const [entrada, saida] = t.periodo;
    const horas = saida - entrada;
    let valorFinal = calcularTarifa(t.veiculo, horas);
    if (t.selo) {
        valorFinal *= 0.5; // 50% de desconto para clientes com selo
    }
    return {
        ...t,
        situacao: SituacaoTicket.Pago,
        valor: valorFinal
    };
}
// 8. Registrador de mensagens
function registrar(msg) {
    console.log(msg);
}
// 9. Função never para auxiliar nos erros de leitura externa
function falhar(mensagem) {
    throw new Error(mensagem);
}
// Entrada externa com unknown e estreitamento de tipos
function lerVeiculo(json) {
    let parsed;
    try {
        parsed = JSON.parse(json);
    }
    catch {
        falhar('JSON malformado');
    }
    if (typeof parsed === 'object' && parsed !== null && 'placa' in parsed && 'tipo' in parsed) {
        const obj = parsed;
        const tipo = obj.tipo;
        if (tipo === 'carro')
            return obj;
        if (tipo === 'moto')
            return obj;
        if (tipo === 'caminhao')
            return obj;
        falhar(`tipo "${String(tipo)}" desconhecido`);
    }
    falhar('formato inválido');
}
// Dados de teste fornecidos na atividade
const ticketsIniciais = [
    {
        veiculo: { placa: 'ABC1D23', tipo: 'carro', portas: 4 },
        periodo: [8, 11],
        selo: false,
        situacao: SituacaoTicket.Aberto
    },
    {
        veiculo: { placa: 'MOT0A12', tipo: 'moto', cilindradas: 160 },
        periodo: [9, 10],
        selo: false,
        situacao: SituacaoTicket.Aberto
    },
    {
        veiculo: { placa: 'CAM9Z99', tipo: 'caminhao', eixos: 3 },
        periodo: [7, 12],
        selo: false,
        situacao: SituacaoTicket.Aberto
    },
    {
        veiculo: { placa: 'XYZ4E56', tipo: 'carro', portas: 2 },
        periodo: [14, 16],
        selo: true,
        situacao: SituacaoTicket.Aberto
    }
];
// Fechando os tickets usando map
const ticketsFechados = ticketsIniciais.map(fecharTicket);
// 10. Relatórios usando map, filter e reduce
ticketsFechados.forEach(t => {
    const [entrada, saida] = t.periodo;
    const horas = saida - entrada;
    const seloTexto = t.selo ? ' (selo -50%)' : '';
    registrar(`[${t.situacao}] ${t.veiculo.placa} (${t.veiculo.tipo}) - ${horas}h - R$ ${(t.valor ?? 0).toFixed(2)}${seloTexto}`);
});
// Faturamento total
const faturamentoTotal = ticketsFechados.reduce((acc, t) => acc + (t.valor ?? 0), 0);
console.log(`Faturamento: R$ ${faturamentoTotal.toFixed(2)}`);
// Contagem de entradas por tipo de veículo
const contagemTipos = ticketsFechados.reduce((acc, t) => {
    acc[t.veiculo.tipo] = (acc[t.veiculo.tipo] || 0) + 1;
    return acc;
}, { carro: 0, moto: 0, caminhao: 0 });
console.log(`Entradas: carro=${contagemTipos.carro}, moto=${contagemTipos.moto}, caminhao=${contagemTipos.caminhao}`);
// Testando a leitura de um veículo inválido externo
try {
    lerVeiculo('{"placa":"BIKE123","tipo":"bicicleta"}');
}
catch (e) {
    if (e instanceof Error) {
        console.log(`Erro ao ler veículo: ${e.message}`);
    }
}
export {};

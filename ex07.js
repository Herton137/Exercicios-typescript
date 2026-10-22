// 2. Implementando os três notificadores
const porEmail = (destinatario, mensagem) => {
    console.log(`[E-MAIL] para ${destinatario}: ${mensagem}`);
};
const porSms = (destinatario, mensagem) => {
    // 4. Return antecipado quando a mensagem passar de 160 caracteres
    if (mensagem.length > 160) {
        console.log('SMS ignorado: mensagem longa');
        return;
    }
    console.log(`[SMS] para ${destinatario}: ${mensagem}`);
};
const porApp = (destinatario, mensagem) => {
    console.log(`[APP] para ${destinatario}: ${mensagem}`);
};
// 3. Função notificarTodos usando forEach
function notificarTodos(destinatarios, mensagem, enviar) {
    destinatarios.forEach(dest => enviar(dest, mensagem));
}
// 5. Provocando o erro ao tentar retornar valor em função void:
// function teste(): void {
//   return 10; // Type 'number' is not assignable to type 'void'.
// }
// Testando as chamadas conforme a saída esperada
notificarTodos(['ana@escola.com'], 'Reunião de pais sexta às 19h', porEmail);
notificarTodos(['joao.resp'], 'Reunião de pais sexta às 19h', porApp);
const mensagemLonga = 'Esta é uma mensagem de aviso bem longa criada propositalmente para ultrapassar o limite máximo de cento e sessenta caracteres que o sistema de SMS aceita disparar.';
notificarTodos(['(69) 99999-0000'], mensagemLonga, porSms);
export {};
/*
6. Reflexão:
Um notificador que retorna um número (por exemplo, `const contar: Notificador = (d, m) => m.length;`) é aceito
porque no TypeScript, quando o tipo de função define o retorno como `void`, a função real implementada
pode sim retornar um valor, e o retorno simplesmente vai ser ignorado/descartado pelo contexto que a chama.
*/ 

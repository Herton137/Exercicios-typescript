// 1 e 2. Declarando os pacientes com o tipo de objeto escrito diretamente na anotação
const paciente1 = {
    cpf: '123.456.789-00',
    nome: 'Ana Souza',
    idade: 34,
    plano: true,
    alergias: ['dipirona', 'lactose'],
    contatoEmergencia: { nome: 'Carlos Souza', telefone: '(69) 98888-1111' }
};
const paciente2 = {
    cpf: '987.654.321-11',
    nome: 'Carlos Lima',
    idade: 61,
    plano: false
};
// 3. Função resumo que trata o caso onde as alergias não existem
function resumo(p) {
    const alergiasTexto = p.alergias && p.alergias.length > 0
        ? `Alergias: ${p.alergias.join(', ')}`
        : 'Sem alergias registradas';
    return `${p.nome}, ${p.idade} anos. ${alergiasTexto}`;
}
// 4. Provocando os dois erros pedidos (comentados com a mensagem do compilador ao lado):
// paciente1.cpf = '000.000.000-00'; // Cannot assign to 'cpf' because it is a read-only property.
// paciente1.peso = 70; // Property 'peso' does not exist on type '{ readonly cpf: string; nome: string; idade: number; plano: boolean; alergias?: string[] | undefined; contatoEmergencia?: { nome: string; telefone: string; } | undefined; }'.
console.log(resumo(paciente1));
console.log(resumo(paciente2));
export {};
/*
5. Reflexões:
- `let dados: object = paciente1; dados.nome;` dá erro porque o tipo `object` genérico
  apenas garante que a variável não é um valor primitivo, mas ele não tem ideia de quais
  propriedades existem lá dentro. Por isso o TS bloqueia o acesso direto a `.nome`.
- `let x: {} = 10;` é aceito porque o tipo `{}` (objeto vazio) aceita praticamente qualquer
  valor que não seja null ou undefined (incluindo números primitivos).
  Já `let y: object = 10;` dá erro porque o tipo `object` exige explicitamente um valor
  não-primitivo, e o número 10 é um primitivo.
*/ 

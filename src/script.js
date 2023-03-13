const data = `Como o incidente é detectado?

O ataque Man in the Middle pode ser detectado por meio de análises de tráfego de rede, observando se há alterações no tráfego normal. Além disso, os usuários podem relatar problemas de conexão ou erros de certificado ao acessar sites ou aplicativos.
Após detectado qual o tempo para iniciar o primeiro procedimento?

O primeiro procedimento deve ser iniciado imediatamente após a detecção do incidente, para impedir que o invasor obtenha informações confidenciais ou realize outras atividades maliciosas.
Quem são as pessoas que irão executar os procedimentos?

A equipe de segurança da informação e a equipe de rede são responsáveis por executar os procedimentos.
Qual o primeiro procedimento que precisa ser executado?

O primeiro procedimento é identificar os pontos de acesso da rede em que o ataque está ocorrendo. A equipe deve usar ferramentas de monitoramento de rede para identificar os nós envolvidos no ataque Man in the Middle.
Quais os demais procedimentos e em que ordem de prioridade precisam ser executados?

Em seguida, a equipe deve tomar medidas para impedir o ataque, como bloquear os endereços IP dos nós maliciosos e atualizar os filtros de segurança da rede. Além disso, a equipe deve notificar os usuários afetados sobre o incidente e fornecer orientações sobre como evitar serem vítimas de ataques Man in the Middle.
Qual o tempo para executar cada procedimento?

O tempo para executar cada procedimento depende da gravidade do ataque e do número de nós envolvidos. No entanto, o primeiro procedimento deve ser executado o mais rápido possível, em questão de minutos.
Se um procedimento não foi efetivo, qual o próximo procedimento a ser executado?

Se um procedimento não foi efetivo, a equipe deve revisar o procedimento e identificar o que pode ter falhado. Em seguida, a equipe deve executar o próximo procedimento de acordo com a ordem de prioridade.
O que fazer depois do incidente ser resolvido?

Após o incidente ser resolvido, a equipe deve realizar uma análise pós-incidente para identificar como a vulnerabilidade de injeção SQL ocorreu, como foi resolvida e quais medidas preventivas podem ser tomadas para evitar futuros ataques. Além disso, a equipe deve garantir que os usuários afetados tenham recebido as informações e orientações necessárias para proteger suas informações e evitar futuros ataques.
`
    .split('\n')
    .filter(Boolean)
    .reduce((acc, cur, i, arr) => {
        if (i % 2 === 0) {
            acc.push([cur, arr[i + 1]]);
        }
        return acc;
    }, [])

const object = data.map(array => { return { subtitle: array[0], description: array[1] } })

console.log(object)
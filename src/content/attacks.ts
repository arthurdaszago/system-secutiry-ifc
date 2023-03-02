export type Playbook = {
    title: string;
    description: string;
}

export type Attacks = {
    name: string;
    content: string[]
    playbook: Playbook[]
}

export const attacks = [
    {
        name: '',
        content: [''],
        playbook: [{
            subtitle: 'Como o incidente é detectado?',
            description: 'Normalmente é detectado o ataque no “dia zero” ou nos primeiros dias em que aplicações são colocadas em produção, por meio da indisponibilidade deles. Ou ainda, por meio da identificação de  scripts suspeitos injetados por meio das vulnerabilidades.'
        }, {
            subtitle: 'Após detectado qual o tempo para iniciar o primeiro procedimento?',
            description: 'Logo aṕos a descoberta do ataque, pois desenvolvedores detêm de zero dias para contornar a situação, ou seja, em questão de minutos.'
        }, {
            subtitle: 'Quem são as pessoas que irão executar os procedimentos?',
            description: 'Desenvolvedores e administradores de sistemas e o pessoal da equipe de segurança da informação.'
        }, {
            subtitle: 'Qual o primeiro procedimento que precisa ser executado?',
            description: 'O primeiro procedimento a ser feito é temporariamente suspender o serviço e encontrar as vulnerabilidades utilizadas e outras possíveis, por meio de uma bateria de testes.'
        }, {
            subtitle: 'Quais os demais procedimentos e em que ordem de prioridade precisam ser executados?',
            description: 'Recomenda-se que a equipe avise os usuários que baixaram os possíveis malwares e que notifique eles de que devem remover imediatamente tais scripts. Camadas de segurança também devem ser implementadas, no caso em que existem seríssimas vulnerabilidades, pelos desenvolvedores e administradores de sistemas.'
        }, {
            subtitle: 'Qual o tempo para executar cada procedimento?',
            description: 'Depende da gravidade do ataque e da complexidade/tamanho do ecossistema da aplicação. Para o primeiro procedimento, o tempo para executar é imediatamente, o mais rápido possível. Para notificar os usuários que baixaram os malwares, independente da quantidade deles, deve ser o mais rápido possível. A aplicação de camadas de segurança é bem variável, a depender de quantas forem necessárias. '
        }, {
            subtitle: 'Se um procedimento não foi efetivo, qual o próximo procedimento a ser executado?',
            description: 'Primeiro deve-se revisar o procedimento e identificar o que pode ter falhado. Na sequência, a equipe deve executar os demais procedimentos de acordo com a ordem de prioridade. '
        }, {
            subtitle: 'O que fazer depois do incidente ser resolvido?',
            description: 'O que deve ser feito é uma análise identificando como o incidente ocorreu, como foi resolvido e quais medidas preventivas devem ser tomadas em eventuais eventos de zero day exploit.'
        },
        ]
    }
]

const playbooks = {
    keylogger: [{
        subtitle: 'Como o incidente é detectado?',
        description: 'A dificuldade para detectar keyloggers é complicada, muitos keyloggers permanecem no escuro por muito tempo sem ser identificado por scanners de malwares pois por vezes falham, considerando que keyloggers na maioria das vezes não deixam problemas perceptíveis.'
    }, {
        subtitle: 'Após detectado qual o tempo para iniciar o primeiro procedimento?',
        description: 'Deve ser iniciado imediatamente.'
    }, {
        subtitle: 'Quem são as pessoas que irão executar os procedimentos?',
        description: 'Administradores de sistemas e a equipe de tecnologia da informação.'
    }, {
        subtitle: 'Qual o primeiro procedimento que precisa ser executado?',
        description: 'Remover todos os programas suspeitos instalados.'
    }, {
        subtitle: 'Quais os demais procedimentos e em que ordem de prioridade precisam ser executados?',
        description: 'Fazer backup de arquivos e reinstalar o sistema.'
    }, {
        subtitle: 'Qual o tempo para executar cada procedimento?',
        description: 'Dependendo do tamanho do malware, se pequeno se resolve em questão de minutos e em grande tamanho até horas.'
    }, {
        subtitle: 'Se um procedimento não foi efetivo, qual o próximo procedimento a ser executado?',
        description: 'Se o primeiro procedimento falhar, o procedimento recomendável na sequência é fazer backup de arquivos, posteriormente fazer a instalação de todo o sistema novamente.'
    }, {
        subtitle: 'O que fazer depois do incidente ser resolvido?',
        description: 'Fazer uso de ferramentas que possibilitem com maior assertividade identificar ataques de keylogger.'
    },
    ],
    zeroDayExploit: [{
        subtitle: 'Como o incidente é detectado?',
        description: 'Normalmente é detectado o ataque no “dia zero” ou nos primeiros dias em que aplicações são colocadas em produção, por meio da indisponibilidade deles. Ou ainda, por meio da identificação de  scripts suspeitos injetados por meio das vulnerabilidades.'
    }, {
        subtitle: 'Após detectado qual o tempo para iniciar o primeiro procedimento?',
        description: 'Logo aṕos a descoberta do ataque, pois desenvolvedores detêm de zero dias para contornar a situação, ou seja, em questão de minutos.'
    }, {
        subtitle: 'Quem são as pessoas que irão executar os procedimentos?',
        description: 'Desenvolvedores e administradores de sistemas e o pessoal da equipe de segurança da informação.'
    }, {
        subtitle: 'Qual o primeiro procedimento que precisa ser executado?',
        description: 'O primeiro procedimento a ser feito é temporariamente suspender o serviço e encontrar as vulnerabilidades utilizadas e outras possíveis, por meio de uma bateria de testes.'
    }, {
        subtitle: 'Quais os demais procedimentos e em que ordem de prioridade precisam ser executados?',
        description: 'Recomenda-se que a equipe avise os usuários que baixaram os possíveis malwares e que notifique eles de que devem remover imediatamente tais scripts. Camadas de segurança também devem ser implementadas, no caso em que existem seríssimas vulnerabilidades, pelos desenvolvedores e administradores de sistemas.'
    }, {
        subtitle: 'Qual o tempo para executar cada procedimento?',
        description: 'Depende da gravidade do ataque e da complexidade/tamanho do ecossistema da aplicação. Para o primeiro procedimento, o tempo para executar é imediatamente, o mais rápido possível. Para notificar os usuários que baixaram os malwares, independente da quantidade deles, deve ser o mais rápido possível. A aplicação de camadas de segurança é bem variável, a depender de quantas forem necessárias. '
    }, {
        subtitle: 'Se um procedimento não foi efetivo, qual o próximo procedimento a ser executado?',
        description: 'Primeiro deve-se revisar o procedimento e identificar o que pode ter falhado. Na sequência, a equipe deve executar os demais procedimentos de acordo com a ordem de prioridade. '
    }, {
        subtitle: 'O que fazer depois do incidente ser resolvido?',
        description: 'O que deve ser feito é uma análise identificando como o incidente ocorreu, como foi resolvido e quais medidas preventivas devem ser tomadas em eventuais eventos de zero day exploit.'
    },
    ],
    trojanHorse: [{
        subtitle: 'Como o incidente é detectado?',
        description: 'Normalmente um cavalo de tróia aparece em um sistema por meio da exibição de um erro de DLL, arquivos perdidos, remoção de firewalls ou sistemas falhando.'
    }, {
        subtitle: 'Após detectado qual o tempo para iniciar o primeiro procedimento?',
        description: 'O primeiro procedimento deve ser iniciado imediatamente.'
    }, {
        subtitle: 'Quem são as pessoas que irão executar os procedimentos?',
        description: 'Normalmente ataques de cavalo de tróia ocorrem em computadores pessoais ou em computadores empresariais, logo donos de computadores pessoais e técnicos da tecnologia da informação, respectivamente, devem exercer procedimento neles.'
    }, {
        subtitle: 'Qual o primeiro procedimento que precisa ser executado?',
        description: 'Remover imediatamente o vírus, seja de forma automática por meio de ferramentas antivírus que removam malwares ou remover de forma manual, por mais que seja difícil.'
    }, {
        subtitle: 'Quais os demais procedimentos e em que ordem de prioridade precisam ser executados?',
        description: 'É altamente recomendável fazer verificações periódicas com scanner e ferramentas que detectam malwares de trojan horse para ter ciência de que não existem softwares com malwares.'
    }, {
        subtitle: 'Qual o tempo para executar cada procedimento?',
        description: 'Se feito de maneira manual, depende do tamanho do malware e do conhecimento do agente que fizer a remoção do malware, mas se removido com ferramentas que identifiquem e removam malwares, podem demorar desde minutos até horas.'
    }, {
        subtitle: 'Se um procedimento não foi efetivo, qual o próximo procedimento a ser executado?',
        description: 'Identificar o porquê os malwares ainda afetam mesmo após terem sido removidos. Entrar em contato com especialistas e até mesmo suporte das ferramentas utilizadas para remover os malwares para solicitar ajuda.'
    }, {
        subtitle: 'O que fazer depois do incidente ser resolvido?',
        description: 'Periodicamente utilizar scanners para identificar cavalos de tróia e caso necessário fazer uso de ferramentas que removam os malwares.'
    },
    ],
    dnsSpoofing: [{
        subtitle: 'Como o incidente é detectado?',
        description: 'É possível identificar casos suspeitos de DNS spoofing antes mesmo de acontecer. Caso um domínio de um site conhecido tem alguma alteração de caráter e você receba espontaneamente de um email esse tipo de link, possivelmente é uma tentativa de ataque por DNS spoofing visto que pode direcionar o usuário a sites maliciosos. DNS spoofing é uma estratégia para que malwares sejam instalados em seu computador, então ele pode ser identificado por scanners de malwares.'
    }, {
        subtitle: 'Após detectado qual o tempo para iniciar o primeiro procedimento?',
        description: 'Se um link suspeito é identificado, o correto é manter distância dele. Se ele for clicado acidentalmente, o procedimento a ser feito é remover o mais rápido possível o cache de DNS, evitando que arquivos sejam baixados.'
    }, {
        subtitle: 'Quem são as pessoas que irão executar os procedimentos?',
        description: 'Administradores de sistemas, a equipe de tecnologia da informação e donos de computadores.'
    }, {
        subtitle: 'Qual o primeiro procedimento que precisa ser executado?',
        description: 'Evitar clicar em links, assim como remover cache de DNS pelo lado servidor e cliente, embora seja difícil ser feito o mesmo procedimento em todos.'
    }, {
        subtitle: 'Quais os demais procedimentos e em que ordem de prioridade precisam ser executados?',
        description: `Utilizar o DNSSEC.
        Guardar uma lista de respostas para uma determinada requisição por um intervalo de tempo.
        Regularmente realizar verificação de malware em seu computador.
        `
    }, {
        subtitle: 'Qual o tempo para executar cada procedimento?',
        description: 'Para a maioria dos procedimentos, leva em torno de minutos.'
    }, {
        subtitle: 'Se um procedimento não foi efetivo, qual o próximo procedimento a ser executado?',
        description: 'DNS spoofing é difícil de ser contornado desde que todos os malwares sejam removidos rapidamente a ponto de não roubar dados a tempo.'
    }, {
        subtitle: 'O que fazer depois do incidente ser resolvido?',
        description: 'Manter cotidianamente uma verificação por meio de scanners de malwares e sempre suspeitar de links que levem a sites maliciosos.'
    },
    ]

}

const { keylogger, dnsSpoofing, trojanHorse, zeroDayExploit } = playbooks

export {  };
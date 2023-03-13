export type Playbook = {
  subtitle: string;
  description: string;
};

export type Attack = {
  name: string;
  content: string[];
  playbook: Playbook[];
};

const attackContent = {};

const playbooks = {
  keylogger: [
    {
      subtitle: "Como o incidente é detectado?",
      description:
        "A dificuldade para detectar keyloggers é complicada, muitos keyloggers permanecem no escuro por muito tempo sem ser identificado por scanners de malwares pois por vezes falham, considerando que keyloggers na maioria das vezes não deixam problemas perceptíveis.",
    },
    {
      subtitle:
        "Após detectado qual o tempo para iniciar o primeiro procedimento?",
      description: "Deve ser iniciado imediatamente.",
    },
    {
      subtitle: "Quem são as pessoas que irão executar os procedimentos?",
      description:
        "Administradores de sistemas e a equipe de tecnologia da informação.",
    },
    {
      subtitle: "Qual o primeiro procedimento que precisa ser executado?",
      description: "Remover todos os programas suspeitos instalados.",
    },
    {
      subtitle:
        "Quais os demais procedimentos e em que ordem de prioridade precisam ser executados?",
      description: "Fazer backup de arquivos e reinstalar o sistema.",
    },
    {
      subtitle: "Qual o tempo para executar cada procedimento?",
      description:
        "Dependendo do tamanho do malware, se pequeno se resolve em questão de minutos e em grande tamanho até horas.",
    },
    {
      subtitle:
        "Se um procedimento não foi efetivo, qual o próximo procedimento a ser executado?",
      description:
        "Se o primeiro procedimento falhar, o procedimento recomendável na sequência é fazer backup de arquivos, posteriormente fazer a instalação de todo o sistema novamente.",
    },
    {
      subtitle: "O que fazer depois do incidente ser resolvido?",
      description:
        "Fazer uso de ferramentas que possibilitem com maior assertividade identificar ataques de keylogger.",
    },
  ],
  zeroDayExploit: [
    {
      subtitle: "Como o incidente é detectado?",
      description:
        "Normalmente é detectado o ataque no “dia zero” ou nos primeiros dias em que aplicações são colocadas em produção, por meio da indisponibilidade deles. Ou ainda, por meio da identificação de  scripts suspeitos injetados por meio das vulnerabilidades.",
    },
    {
      subtitle:
        "Após detectado qual o tempo para iniciar o primeiro procedimento?",
      description:
        "Logo aṕos a descoberta do ataque, pois desenvolvedores detêm de zero dias para contornar a situação, ou seja, em questão de minutos.",
    },
    {
      subtitle: "Quem são as pessoas que irão executar os procedimentos?",
      description:
        "Desenvolvedores e administradores de sistemas e o pessoal da equipe de segurança da informação.",
    },
    {
      subtitle: "Qual o primeiro procedimento que precisa ser executado?",
      description:
        "O primeiro procedimento a ser feito é temporariamente suspender o serviço e encontrar as vulnerabilidades utilizadas e outras possíveis, por meio de uma bateria de testes.",
    },
    {
      subtitle:
        "Quais os demais procedimentos e em que ordem de prioridade precisam ser executados?",
      description:
        "Recomenda-se que a equipe avise os usuários que baixaram os possíveis malwares e que notifique eles de que devem remover imediatamente tais scripts. Camadas de segurança também devem ser implementadas, no caso em que existem seríssimas vulnerabilidades, pelos desenvolvedores e administradores de sistemas.",
    },
    {
      subtitle: "Qual o tempo para executar cada procedimento?",
      description:
        "Depende da gravidade do ataque e da complexidade/tamanho do ecossistema da aplicação. Para o primeiro procedimento, o tempo para executar é imediatamente, o mais rápido possível. Para notificar os usuários que baixaram os malwares, independente da quantidade deles, deve ser o mais rápido possível. A aplicação de camadas de segurança é bem variável, a depender de quantas forem necessárias. ",
    },
    {
      subtitle:
        "Se um procedimento não foi efetivo, qual o próximo procedimento a ser executado?",
      description:
        "Primeiro deve-se revisar o procedimento e identificar o que pode ter falhado. Na sequência, a equipe deve executar os demais procedimentos de acordo com a ordem de prioridade. ",
    },
    {
      subtitle: "O que fazer depois do incidente ser resolvido?",
      description:
        "O que deve ser feito é uma análise identificando como o incidente ocorreu, como foi resolvido e quais medidas preventivas devem ser tomadas em eventuais eventos de zero day exploit.",
    },
  ],
  trojanHorse: [
    {
      subtitle: "Como o incidente é detectado?",
      description:
        "Normalmente um cavalo de tróia aparece em um sistema por meio da exibição de um erro de DLL, arquivos perdidos, remoção de firewalls ou sistemas falhando.",
    },
    {
      subtitle:
        "Após detectado qual o tempo para iniciar o primeiro procedimento?",
      description: "O primeiro procedimento deve ser iniciado imediatamente.",
    },
    {
      subtitle: "Quem são as pessoas que irão executar os procedimentos?",
      description:
        "Normalmente ataques de cavalo de tróia ocorrem em computadores pessoais ou em computadores empresariais, logo donos de computadores pessoais e técnicos da tecnologia da informação, respectivamente, devem exercer procedimento neles.",
    },
    {
      subtitle: "Qual o primeiro procedimento que precisa ser executado?",
      description:
        "Remover imediatamente o vírus, seja de forma automática por meio de ferramentas antivírus que removam malwares ou remover de forma manual, por mais que seja difícil.",
    },
    {
      subtitle:
        "Quais os demais procedimentos e em que ordem de prioridade precisam ser executados?",
      description:
        "É altamente recomendável fazer verificações periódicas com scanner e ferramentas que detectam malwares de trojan horse para ter ciência de que não existem softwares com malwares.",
    },
    {
      subtitle: "Qual o tempo para executar cada procedimento?",
      description:
        "Se feito de maneira manual, depende do tamanho do malware e do conhecimento do agente que fizer a remoção do malware, mas se removido com ferramentas que identifiquem e removam malwares, podem demorar desde minutos até horas.",
    },
    {
      subtitle:
        "Se um procedimento não foi efetivo, qual o próximo procedimento a ser executado?",
      description:
        "Identificar o porquê os malwares ainda afetam mesmo após terem sido removidos. Entrar em contato com especialistas e até mesmo suporte das ferramentas utilizadas para remover os malwares para solicitar ajuda.",
    },
    {
      subtitle: "O que fazer depois do incidente ser resolvido?",
      description:
        "Periodicamente utilizar scanners para identificar cavalos de tróia e caso necessário fazer uso de ferramentas que removam os malwares.",
    },
  ],
  dnsSpoofing: [
    {
      subtitle: "Como o incidente é detectado?",
      description:
        "É possível identificar casos suspeitos de DNS spoofing antes mesmo de acontecer. Caso um domínio de um site conhecido tem alguma alteração de caráter e você receba espontaneamente de um email esse tipo de link, possivelmente é uma tentativa de ataque por DNS spoofing visto que pode direcionar o usuário a sites maliciosos. DNS spoofing é uma estratégia para que malwares sejam instalados em seu computador, então ele pode ser identificado por scanners de malwares.",
    },
    {
      subtitle:
        "Após detectado qual o tempo para iniciar o primeiro procedimento?",
      description:
        "Se um link suspeito é identificado, o correto é manter distância dele. Se ele for clicado acidentalmente, o procedimento a ser feito é remover o mais rápido possível o cache de DNS, evitando que arquivos sejam baixados.",
    },
    {
      subtitle: "Quem são as pessoas que irão executar os procedimentos?",
      description:
        "Administradores de sistemas, a equipe de tecnologia da informação e donos de computadores.",
    },
    {
      subtitle: "Qual o primeiro procedimento que precisa ser executado?",
      description:
        "Evitar clicar em links, assim como remover cache de DNS pelo lado servidor e cliente, embora seja difícil ser feito o mesmo procedimento em todos.",
    },
    {
      subtitle:
        "Quais os demais procedimentos e em que ordem de prioridade precisam ser executados?",
      description: `Utilizar o DNSSEC.
        Guardar uma lista de respostas para uma determinada requisição por um intervalo de tempo.
        Regularmente realizar verificação de malware em seu computador.
        `,
    },
    {
      subtitle: "Qual o tempo para executar cada procedimento?",
      description:
        "Para a maioria dos procedimentos, leva em torno de minutos.",
    },
    {
      subtitle:
        "Se um procedimento não foi efetivo, qual o próximo procedimento a ser executado?",
      description:
        "DNS spoofing é difícil de ser contornado desde que todos os malwares sejam removidos rapidamente a ponto de não roubar dados a tempo.",
    },
    {
      subtitle: "O que fazer depois do incidente ser resolvido?",
      description:
        "Manter cotidianamente uma verificação por meio de scanners de malwares e sempre suspeitar de links que levem a sites maliciosos.",
    },
  ],
  phishing: [
    {
      subtitle: "Como o incidente é detectado?",
      description:
        "O incidente pode ser detectado por meio de relatórios de usuários ou do monitoramento de e-mails suspeitos.",
    },
    {
      subtitle:
        "Após detectado qual o tempo para iniciar o primeiro procedimento?",
      description:
        "O primeiro procedimento deve ser iniciado imediatamente após a detecção do incidente.",
    },
    {
      subtitle: "Quem são as pessoas que irão executar os procedimentos?",
      description:
        "A equipe de segurança da informação e os administradores de sistemas são responsáveis por executar os procedimentos.",
    },
    {
      subtitle: "Qual o primeiro procedimento que precisa ser executado?",
      description:
        "O primeiro procedimento deve ser alertar os usuários sobre o phishing e orientá-los a não clicar em links suspeitos ou fornecer informações pessoais ou financeiras.",
    },
    {
      subtitle:
        "Quais os demais procedimentos e em que ordem de prioridade precisam ser executados?",
      description:
        "A equipe deve identificar a fonte do e-mail de phishing e notificar as autoridades competentes, se necessário. Além disso, a equipe deve avaliar a segurança do sistema e implementar medidas adicionais, como filtros de e-mail mais robustos ou treinamento de conscientização de segurança para os usuários.",
    },
    {
      subtitle: "Qual o tempo para executar cada procedimento?",
      description:
        "O tempo para executar cada procedimento depende da gravidade do ataque e da complexidade do ambiente. No entanto, o primeiro procedimento deve ser executado o mais rápido possível, em questão de minutos.",
    },
    {
      subtitle:
        "Se um procedimento não foi efetivo, qual o próximo procedimento a ser executado?",
      description:
        "Se um procedimento não foi efetivo, a equipe deve revisar o procedimento e identificar o que pode ter falhado. Em seguida, a equipe deve executar o próximo procedimento de acordo com a ordem de prioridade.",
    },
    {
      subtitle: "O que fazer depois do incidente ser resolvido?",
      description:
        "Após o incidente ser resolvido, a equipe deve realizar uma análise pós-incidente para identificar como o incidente ocorreu, como foi resolvido e quais medidas preventivas podem ser tomadas para evitar futuros ataques de phishing.",
    },
  ],
  malware: [
    {
      subtitle: "Como o incidente é detectado?",
      description:
        "O malware pode ser detectado por meio de alertas de antivírus, monitoramento de rede e comportamento anômalo em dispositivos e sistemas.",
    },
    {
      subtitle:
        "Após detectado qual o tempo para iniciar o primeiro procedimento?",
      description:
        "O primeiro procedimento deve ser iniciado imediatamente após a detecção do incidente, para impedir que o malware se espalhe e cause danos maiores.",
    },
    {
      subtitle: "Quem são as pessoas que irão executar os procedimentos?",
      description:
        "A equipe de segurança da informação, a equipe de suporte, a equipe de backup e a equipe de gerenciamento de crise são responsáveis por executar os procedimentos.",
    },
    {
      subtitle: "Qual o primeiro procedimento que precisa ser executado?",
      description:
        "O primeiro procedimento é isolar o dispositivo infectado para impedir que o malware se espalhe para outros dispositivos ou sistemas. Além disso, a equipe deve identificar o tipo de malware e determinar se há backups disponíveis.",
    },
    {
      subtitle:
        "Quais os demais procedimentos e em que ordem de prioridade precisam ser executados?",
      description:
        "A equipe deve identificar o tipo de malware e determinar sua funcionalidade, quais dados podem ter sido afetados e como o malware se propagou. Em seguida, a equipe deve avaliar o dano causado pelo malware e determinar se há a necessidade de restaurar os dados a partir do backup ou se é possível remover o malware. Além disso, a equipe deve identificar a causa raiz do incidente e tomar medidas para prevenir futuros ataques de malware.",
    },
    {
      subtitle: "Qual o tempo para executar cada procedimento?",
      description:
        "O tempo para executar cada procedimento depende da gravidade do ataque e do número de dispositivos e sistemas infectados. No entanto, o primeiro procedimento deve ser executado o mais rápido possível, em questão de minutos.",
    },
    {
      subtitle:
        "Se um procedimento não foi efetivo, qual o próximo procedimento a ser executado?",
      description:
        "Se um procedimento não foi efetivo, a equipe deve revisar o procedimento e identificar o que pode ter falhado. Em seguida, a equipe deve executar o próximo procedimento de acordo com a ordem de prioridade.",
    },
    {
      subtitle: "O que fazer depois do incidente ser resolvido?",
      description:
        "Após o incidente ser resolvido, a equipe deve realizar uma análise pós-incidente para identificar como o incidente ocorreu, como foi resolvido e quais medidas preventivas podem ser tomadas para evitar futuros ataques de malware. Além disso, a equipe deve garantir que todos os dispositivos e sistemas infectados sejam corretamente restaurados a partir do backup.",
    },
  ],
  engenhariasSocial: [
    {
      subtitle: "Como o incidente é detectado?",
      description:
        "O ataque de engenharia social pode ser detectado por meio de relatos de funcionários ou usuários que receberam solicitações suspeitas de informações confidenciais ou que foram direcionados para sites maliciosos.",
    },
    {
      subtitle:
        "Após detectado qual o tempo para iniciar o primeiro procedimento?",
      description:
        "O primeiro procedimento deve ser iniciado imediatamente após a detecção do incidente, para impedir que os usuários forneçam informações confidenciais ou que acessem sites maliciosos.",
    },
    {
      subtitle: "Quem são as pessoas que irão executar os procedimentos?",
      description:
        "A equipe de segurança da informação, a equipe de suporte e a equipe de gerenciamento de crise são responsáveis por executar os procedimentos.",
    },
    {
      subtitle: "Qual o primeiro procedimento que precisa ser executado?",
      description:
        "O primeiro procedimento é informar os usuários afetados sobre o incidente e fornecer orientações sobre como evitar serem vítimas de ataques de engenharia social. Além disso, a equipe deve coletar informações sobre o tipo de ataque e determinar se há outros usuários que foram afetados.",
    },
    {
      subtitle:
        "Quais os demais procedimentos e em que ordem de prioridade precisam ser executados?",
      description:
        "A equipe deve identificar a causa raiz do incidente e tomar medidas para prevenir futuros ataques de engenharia social. Além disso, a equipe deve avaliar se há necessidade de realizar uma investigação mais aprofundada para determinar se houve perda ou acesso não autorizado a dados confidenciais.",
    },
    {
      subtitle: "Qual o tempo para executar cada procedimento?",
      description:
        "O tempo para executar cada procedimento depende da gravidade do ataque e do número de usuários afetados. No entanto, o primeiro procedimento deve ser executado o mais rápido possível, em questão de minutos.",
    },
    {
      subtitle:
        "Se um procedimento não foi efetivo, qual o próximo procedimento a ser executado?",
      description:
        "Se um procedimento não foi efetivo, a equipe deve revisar o procedimento e identificar o que pode ter falhado. Em seguida, a equipe deve executar o próximo procedimento de acordo com a ordem de prioridade.",
    },
    {
      subtitle: "O que fazer depois do incidente ser resolvido?",
      description:
        "Após o incidente ser resolvido, a equipe deve realizar uma análise pós-incidente para identificar como o incidente ocorreu, como foi resolvido e quais medidas preventivas podem ser tomadas para evitar futuros ataques de engenharia social. Além disso, a equipe deve garantir que os usuários afetados tenham recebido as informações e orientações necessárias para evitar serem vítimas de futuros ataques.",
    },
  ],
  bruteForce: [
    {
      subtitle: "Como o incidente é detectado?",
      description:
        "O incidente pode ser detectado por meio do monitoramento de logs e sistemas de autenticação, que podem alertar quando um grande número de tentativas de login falhas é detectado.",
    },
    {
      subtitle:
        "Após detectado qual o tempo para iniciar o primeiro procedimento?",
      description:
        "O primeiro procedimento deve ser iniciado imediatamente após a detecção do incidente.",
    },
    {
      subtitle: "Quem são as pessoas que irão executar os procedimentos?",
      description:
        "A equipe de segurança da informação e os administradores de sistemas são responsáveis por executar os procedimentos.",
    },
    {
      subtitle: "Qual o primeiro procedimento que precisa ser executado?",
      description:
        "O primeiro procedimento deve ser bloquear o endereço IP ou intervalo de endereços IPs do atacante, a fim de evitar mais tentativas de login.",
    },
    {
      subtitle:
        "Quais os demais procedimentos e em que ordem de prioridade precisam ser executados?",
      description:
        "Em seguida, a equipe deve investigar os logs para identificar a origem do ataque e determinar se houve sucesso no login. Se houver, a equipe deve imediatamente alterar as senhas comprometidas e alertar os usuários afetados. Além disso, a equipe deve avaliar a segurança do sistema e implementar medidas adicionais, como políticas de senha mais fortes ou a implementação de autenticação multifator.",
    },
    {
      subtitle: "Qual o tempo para executar cada procedimento?",
      description:
        "O tempo para executar cada procedimento depende da gravidade do ataque e da complexidade do ambiente. No entanto, o primeiro procedimento deve ser executado o mais rápido possível, em questão de minutos.",
    },
    {
      subtitle:
        "Se um procedimento não foi efetivo, qual o próximo procedimento a ser executado?",
      description:
        "Se um procedimento não foi efetivo, a equipe deve revisar o procedimento e identificar o que pode ter falhado. Em seguida, a equipe deve executar o próximo procedimento de acordo com a ordem de prioridade.",
    },
    {
      subtitle: "O que fazer depois do incidente ser resolvido?",
      description:
        "Após o incidente ser resolvido, a equipe deve realizar uma análise pós-incidente para identificar como o incidente ocorreu, como foi resolvido e quais medidas preventivas podem ser tomadas para evitar futuros ataques de força bruta.",
    },
  ],
  crossSite: [
    {
      subtitle: "Como o incidente é detectado?",
      description:
        "O ataque de Cross-Site Scripting pode ser detectado por meio de análise de logs de servidor e de aplicativos, observando se há entradas suspeitas de caracteres ou solicitações de dados incomuns. Além disso, a equipe de segurança pode ser alertada por meio de sistemas de detecção de intrusões ou relatos de usuários sobre falhas ou comportamentos estranhos em um aplicativo.",
    },
    {
      subtitle:
        "Após detectado qual o tempo para iniciar o primeiro procedimento?",
      description:
        "O primeiro procedimento deve ser iniciado imediatamente após a detecção do incidente, para impedir que o invasor execute outras atividades maliciosas ou obtenha informações confidenciais dos usuários.",
    },
    {
      subtitle: "Quem são as pessoas que irão executar os procedimentos?",
      description:
        "A equipe de segurança da informação, equipe de desenvolvimento de aplicativos e a equipe de suporte ao usuário são responsáveis por executar os procedimentos.",
    },
    {
      subtitle: "Qual o primeiro procedimento que precisa ser executado?",
      description:
        "O primeiro procedimento é identificar e isolar as páginas ou os aplicativos comprometidos que estão exibindo conteúdo malicioso. Em seguida, a equipe deve identificar a extensão do ataque, quais dados foram comprometidos e quais usuários podem ter sido afetados.",
    },
    {
      subtitle:
        "Quais os demais procedimentos e em que ordem de prioridade precisam ser executados?",
      description:
        "A equipe deve corrigir a vulnerabilidade, remover o código malicioso do aplicativo ou da página e validar todos os dados de entrada e saída para evitar futuros ataques. Além disso, a equipe deve notificar os usuários afetados e fornecer orientações sobre como proteger suas informações. Por fim, a equipe deve revisar todos os códigos do aplicativo em busca de outras vulnerabilidades de XSS.",
    },
    {
      subtitle: "Qual o tempo para executar cada procedimento?",
      description:
        "O tempo para executar cada procedimento depende da gravidade do ataque e da extensão do comprometimento. No entanto, o primeiro procedimento deve ser executado o mais rápido possível, em questão de minutos.",
    },
    {
      subtitle:
        "Se um procedimento não foi efetivo, qual o próximo procedimento a ser executado?",
      description:
        "Se um procedimento não foi efetivo, a equipe deve revisar o procedimento e identificar o que pode ter falhado. Em seguida, a equipe deve executar o próximo procedimento de acordo com a ordem de prioridade.",
    },
    {
      subtitle: "O que fazer depois do incidente ser resolvido?",
      description:
        "Após o incidente ser resolvido, a equipe deve realizar uma análise pós-incidente para identificar como a vulnerabilidade de XSS ocorreu, como foi resolvida e quais medidas preventivas podem ser tomadas para evitar futuros ataques. Além disso, a equipe deve garantir que os usuários afetados tenham recebido as informações e orientações necessárias para proteger suas informações e evitar futuros ataques.",
    },
  ],
  ransomware: [
    {
      subtitle: "Como o incidente é detectado?",
      description:
        "O incidente pode ser detectado por meio de alertas de antivírus ou por usuários que notificam a equipe de segurança da informação sobre a criptografia de seus arquivos.",
    },
    {
      subtitle:
        "Após detectado qual o tempo para iniciar o primeiro procedimento?",
      description:
        "O primeiro procedimento deve ser iniciado imediatamente após a detecção do incidente.",
    },
    {
      subtitle: "Quem são as pessoas que irão executar os procedimentos?",
      description:
        "A equipe de segurança da informação e os administradores de sistemas são responsáveis por executar os procedimentos.",
    },
    {
      subtitle: "Qual o primeiro procedimento que precisa ser executado?",
      description:
        "O primeiro procedimento deve ser isolar a máquina infectada da rede para impedir a propagação do ransomware. A equipe também deve notificar as autoridades competentes, se necessário.",
    },
    {
      subtitle:
        "Quais os demais procedimentos e em que ordem de prioridade precisam ser executados?",
      description:
        "A equipe deve avaliar a extensão do dano e identificar se há backups disponíveis para restaurar os arquivos criptografados. Se houver backups, a equipe deve restaurá-los. Se não houver backups, a equipe deve avaliar se é possível descriptografar os arquivos. Se não for possível descriptografar os arquivos, a equipe deve avaliar se é viável pagar o resgate para obter a chave de descriptografia.",
    },
    {
      subtitle: "Qual o tempo para executar cada procedimento?",
      description:
        "O tempo para executar cada procedimento depende da gravidade do ataque e da complexidade do ambiente. No entanto, o primeiro procedimento deve ser executado o mais rápido possível, em questão de minutos.",
    },
    {
      subtitle:
        "Se um procedimento não foi efetivo, qual o próximo procedimento a ser executado?",
      description:
        "Se um procedimento não foi efetivo, a equipe deve revisar o procedimento e identificar o que pode ter falhado. Em seguida, a equipe deve executar o próximo procedimento de acordo com a ordem de prioridade.",
    },
    {
      subtitle: "O que fazer depois do incidente ser resolvido?",
      description:
        "Após o incidente ser resolvido, a equipe deve realizar uma análise pós-incidente para identificar como o incidente ocorreu, como foi resolvido e quais medidas preventivas podem ser tomadas para evitar futuros ataques de ransomware. Além disso, a equipe deve garantir que todos os sistemas afetados sejam corretamente protegidos e atualizados para prevenir novas infecções.",
    },
  ],
  mitm: [
    {
      subtitle: "Como o incidente é detectado?",
      description:
        "O ataque Man in the Middle pode ser detectado por meio de análises de tráfego de rede, observando se há alterações no tráfego normal. Além disso, os usuários podem relatar problemas de conexão ou erros de certificado ao acessar sites ou aplicativos.",
    },
    {
      subtitle:
        "Após detectado qual o tempo para iniciar o primeiro procedimento?",
      description:
        "O primeiro procedimento deve ser iniciado imediatamente após a detecção do incidente, para impedir que o invasor obtenha informações confidenciais ou realize outras atividades maliciosas.",
    },
    {
      subtitle: "Quem são as pessoas que irão executar os procedimentos?",
      description:
        "A equipe de segurança da informação e a equipe de rede são responsáveis por executar os procedimentos.",
    },
    {
      subtitle: "Qual o primeiro procedimento que precisa ser executado?",
      description:
        "O primeiro procedimento é identificar os pontos de acesso da rede em que o ataque está ocorrendo. A equipe deve usar ferramentas de monitoramento de rede para identificar os nós envolvidos no ataque Man in the Middle.",
    },
    {
      subtitle:
        "Quais os demais procedimentos e em que ordem de prioridade precisam ser executados?",
      description:
        "Em seguida, a equipe deve tomar medidas para impedir o ataque, como bloquear os endereços IP dos nós maliciosos e atualizar os filtros de segurança da rede. Além disso, a equipe deve notificar os usuários afetados sobre o incidente e fornecer orientações sobre como evitar serem vítimas de ataques Man in the Middle.",
    },
    {
      subtitle: "Qual o tempo para executar cada procedimento?",
      description:
        "O tempo para executar cada procedimento depende da gravidade do ataque e do número de nós envolvidos. No entanto, o primeiro procedimento deve ser executado o mais rápido possível, em questão de minutos.",
    },
    {
      subtitle:
        "Se um procedimento não foi efetivo, qual o próximo procedimento a ser executado?",
      description:
        "Se um procedimento não foi efetivo, a equipe deve revisar o procedimento e identificar o que pode ter falhado. Em seguida, a equipe deve executar o próximo procedimento de acordo com a ordem de prioridade.",
    },
    {
      subtitle: "O que fazer depois do incidente ser resolvido?",
      description:
        "Após o incidente ser resolvido, a equipe deve realizar uma análise pós-incidente para identificar como o ataque ocorreu, como foi resolvido e quais medidas preventivas podem ser tomadas para evitar futuros ataques Man in the Middle. Além disso, a equipe deve garantir que os usuários afetados tenham recebido as informações e orientações necessárias para evitar serem vítimas de futuros ataques.",
    },
  ],
  sqlInjection: [
    {
      subtitle: "Como o incidente é detectado?",
      description:
        "O ataque Man in the Middle pode ser detectado por meio de análises de tráfego de rede, observando se há alterações no tráfego normal. Além disso, os usuários podem relatar problemas de conexão ou erros de certificado ao acessar sites ou aplicativos.",
    },
    {
      subtitle:
        "Após detectado qual o tempo para iniciar o primeiro procedimento?",
      description:
        "O primeiro procedimento deve ser iniciado imediatamente após a detecção do incidente, para impedir que o invasor obtenha informações confidenciais ou realize outras atividades maliciosas.",
    },
    {
      subtitle: "Quem são as pessoas que irão executar os procedimentos?",
      description:
        "A equipe de segurança da informação e a equipe de rede são responsáveis por executar os procedimentos.",
    },
    {
      subtitle: "Qual o primeiro procedimento que precisa ser executado?",
      description:
        "O primeiro procedimento é identificar os pontos de acesso da rede em que o ataque está ocorrendo. A equipe deve usar ferramentas de monitoramento de rede para identificar os nós envolvidos no ataque Man in the Middle.",
    },
    {
      subtitle:
        "Quais os demais procedimentos e em que ordem de prioridade precisam ser executados?",
      description:
        "Em seguida, a equipe deve tomar medidas para impedir o ataque, como bloquear os endereços IP dos nós maliciosos e atualizar os filtros de segurança da rede. Além disso, a equipe deve notificar os usuários afetados sobre o incidente e fornecer orientações sobre como evitar serem vítimas de ataques Man in the Middle.",
    },
    {
      subtitle: "Qual o tempo para executar cada procedimento?",
      description:
        "O tempo para executar cada procedimento depende da gravidade do ataque e do número de nós envolvidos. No entanto, o primeiro procedimento deve ser executado o mais rápido possível, em questão de minutos.",
    },
    {
      subtitle:
        "Se um procedimento não foi efetivo, qual o próximo procedimento a ser executado?",
      description:
        "Se um procedimento não foi efetivo, a equipe deve revisar o procedimento e identificar o que pode ter falhado. Em seguida, a equipe deve executar o próximo procedimento de acordo com a ordem de prioridade.",
    },
    {
      subtitle: "O que fazer depois do incidente ser resolvido?",
      description:
        "Após o incidente ser resolvido, a equipe deve realizar uma análise pós-incidente para identificar como a vulnerabilidade de injeção SQL ocorreu, como foi resolvida e quais medidas preventivas podem ser tomadas para evitar futuros ataques. Além disso, a equipe deve garantir que os usuários afetados tenham recebido as informações e orientações necessárias para proteger suas informações e evitar futuros ataques.",
    },
  ],
};

const {
  keylogger,
  dnsSpoofing,
  trojanHorse,
  zeroDayExploit,
  bruteForce,
  engenhariasSocial,
  malware,
  phishing,
  crossSite,
  mitm,
  ransomware,
  sqlInjection,
} = playbooks;

export const attacks: Attack[] = [
  {
    name: "Keylogger attack",
    content: [
      "O que faz/ o que é: keylogger se trata de um spyware em que um adversário monitora todo o registro de teclas digitadas por dispositivos sem o devido conhecimento do usuário do dispositivo, ou seja, de maneira imperceptível. No geral, serve para o adversário observar digitação de usuários, a fim de descobrir credenciais, dados sensíveis que possibilitam quebrar privacidade de usuários.",
      "Como funciona: keylogger basicamente informa ao hacker toda e qualquer tecla digitada pelo usuário em seu dispositivo. Entretanto, esse tipo de ataque evoluiu tanto que já pode gravar tela, ações de mouse, copiar o que existe na área de transferência e afins, e o hacker simplesmente visualizar. Então, esse tipo de spyware não se trata apenas de um informador de teclas digitadas, mas todo e qualquer meio de espionar o que usuários fazem em seus dispositivos.",
      "Operacionalização: pode infiltrar dispositivos por meio de meios físicos ou sem fio, como pen drives, outros periféricos com ou sem fio, dispositivos podem ser infectados por download de softwares e apps, acesso de sites duvidosos que sugerem cliques que infectam seus dispositivos, e-mails maliciosos, SMSs com links suspeitos.",
      "Recursos/ativos afetados: os ativos e recursos afetados são as informações sensíveis, credenciais e dados pessoais que permitem a hackers mal intencionados usarem deles para obterem ganhos financeiros, assim como para infringir princípios de autenticidade, autorização e privacidade para fazer alguma ação mal intencionada.",
    ],
    playbook: keylogger,
  },
  {
    name: "Zero day exploit attack",
    content: [
      "O que faz/ o que é: trata-se de um ataque que acontece quando uma vulnerabilidade é descoberta por atacantes antes mesmo de desenvolvedores descobrirem, e no momento que descobrem, tem um tempo de aviso prévio de “zero dias” para contornar a vulnerabilidades antes que ataques aconteçam. Este tipo de ataque ocorre sempre que uma aplicação nova é lançada em produção, por meios de vulnerabilidades encontradas. Nesse instante, desenvolvedores detêm de zero dias para contornar o ataque. Normalmente este tipo de ataque ocorre com maior frequência em sistemas que testes para encontrar falhas de segurança não ocorrem ou são falhos.",
      "Como funciona: quando a vulnerabilidade é encontrada, o que atacantes fazem é primeiramente analisar as brechas, posteriormente criar e distribuir códigos malwares por meio delas. O malware, se usado/executado, prejudica e explora os dispositivos com o intuito de roubo de dados para que criminosos o utilizem para obter ganhos financeiros.",
      "Operacionalização: a primeira etapa é identificar softwares que foram recentemente lançados para encontrar vulnerabilidades e por meio delas espalhar malwares. Encontrado um software com vulnerabilidades, a segunda etapa é explorar o que é possível ser feito por meio dela, como injetar scripts de códigos malwares. Se possível então, os criminosos injetam malwares nestes softwares, e nisso usuários do softwares podem executar os scripts que permitirão que os criminosos possam roubar informações.",
      "Recursos/ativos afetados: como o zero day exploit funciona através de malwares injetados em softwares, então o principal ativo afetado são dados dos usuários que existem em seus dispositivos, com o intuito de os utilizar para obter ganhos financeiros.",
    ],
    playbook: zeroDayExploit,
  },
  {
    name: "Trojan horse attack",
    content: [
      "O que faz/ o que é: inspirado na guerra de Tróia, o cavalo de tróia atua como um disseminador de malwares, no qual utilizam de engenharia social para enganar os utilizadores a utilizar os softwares por justa causa de que se trata de um software benigno, mas na verdade oculta suas funcionalidades maliciosas, uma analogia ao cavalo de madeira deixado supostamente como “rendição” pelos gregos aos troianos, mas que na verdade dentro Ulisses e seus homens estavam escondidos para contra atacar de dentro das muralhas os troianos.",
      "Como funciona: cavalo de tróia é projetado pelos agentes maliciosos com o intuito de disseminar ameaças, podendo ser ransomware para extorquir dinheiro e a criptografia de dados e sistemas, bem como spywares, para roubar dados, por meio de softwares crackeados (jogos, aplicações proprietárias), arquivos de músicas, anúncios de navegadores que são executados, podem levar a infecção por trojans. Softwares crackeados e que dizem gerar chaves de ativação quando são executados são casos comuns de ataques de trojans, bem como anexos infectados podem se prover de engenharia social com a intenção de persuadir usuários a clicar no arquivo infectado.",
      "Operacionalização: a primeira etapa da operacionalização é montar um script que de alguma forma roube e até mesmo criptografe dados de dispositivos de usuários. Na sequência, esse script é adicionado a um software amplamente conhecido. Pode ser ele algum software proprietário a ser crackeado, um jogo crackeado, algum anexo que por meio de engenharia social estimule o usuário a clicar nele. Trojan Horse está intimamente ligado à engenharia social, pois normalmente ocorrem com usuários que querem ferramentas proprietárias por meio de ferramentas crackeadas, ou por documentos que estimulem usuários a clicar neles.",
      "Recursos/ativos afetados: considerando que cavalo de tróia usa em sumo malwares como spyware e ransomware, que tem como foco o roubo de dados, exigir pagamentos para receber de volta seus dados que foram criptografados, ou que sistemas sejam criptografados, os ativos e recursos afetados são os dados, usados para obter ganhos financeiros, o comprometimento de integridade de sistemas por meio da criptografia dos mesmos, dinheiro no caso em que pessoas julgam ser necessário para ter novamente acesso aos dados nos casos de ransomware.",
    ],
    playbook: trojanHorse,
  },
  {
    name: "DNS spoofing attack",
    content: [
      "O que faz: DNS Spoofing é um ataque que tem como objetivo manipular o sistema de resolução de nomes de domínio (DNS) para redirecionar os usuários a sites maliciosos em vez dos legítimos que eles querem acessar, ou seja, a alteração do redirecionamento do site, direcionando o tráfego de rede para um endereço IP diferente do pretendido pelo usuário. Isso permite que o invasor possa interceptar e manipular o tráfego da rede, resultando em possíveis ataques de phishing, roubo de dados ou monitoramento de atividades.",
      "Operacionalização: O invasor geralmente usa uma técnica de redirecionamento de tráfego para falsificar as informações do DNS e cria uma resposta falsa que é armazenada no cache DNS do sistema alvo. O invasor pode utilizar várias técnicas para manipular o cache DNS (uso de malware ou a exploração de vulnerabilidades). Quando o usuário tenta acessar o site legítimo, seu computador consulta o servidor DNS para obter o endereço IP correspondente ao nome de domínio. Se a resposta falsa do DNS Spoofing estiver presente no cache DNS do sistema, o usuário será redirecionado para um endereço IP diferente, que pode ser controlado pelo invasor. O usuário acreditará que está acessando o site legítimo, mas na verdade estará acessando o site falso criado pelo invasor.",
      "Engajamento: O invasor consegue falsificar as informações do DNS, criando uma resposta falsa que é armazenada no cache DNS do sistema alvo. Em seguida, quando o usuário tenta acessar um site legítimo, seu computador consulta o servidor DNS para obter o endereço IP correspondente ao nome de domínio. Se a resposta falsa estiver presente no cache DNS do sistema, o usuário será redirecionado para um endereço IP diferente, que pode ser controlado pelo invasor. O usuário acreditará que está acessando o site legítimo, mas na verdade estará acessando o site falso criado pelo invasor. O invasor pode então capturar informações confidenciais, como nome de usuário, senha e outras informações pessoais do usuário.",
      "Como funciona: Para realizar esse ataque, o invasor usa técnicas para falsificar o endereço IP de um site legítimo e força o usuário a acessar o site falso. Isso é feito por meio da manipulação dos registros DNS da vítima (armazenados em cache nos servidores DNS, roteadores ou dispositivos de rede intermediários). A técnica mais comum de DNS Spoofing é o ataque Man-in-the-Middle (MITM): intercepta a comunicação entre a vítima e o servidor DNS. Uma vez que o atacante consegue redirecionar a vítima para o site malicioso, ele pode capturar informações confidenciais, como nome de usuário, senha e outras informações pessoais.",
    ],
    playbook: dnsSpoofing,
  },
  {
    name: "Phishing attack",
    content: [
      "O que faz: Se baseia na engenharia social para roubar informações pessoais, financeiras ou confidenciais das vítimas. Ocorre por meio de um e-mail falso ou uma página web falsa que imita uma instituição legítima (banco, comércio, uma rede social e outros). O objetivo é induzir a vítima a fornecer informações pessoais ou realizar uma ação que permita que o atacante ganhe acesso aos seus dados ou sistemas.",
      "Operacionalização: Preparação e criação da mensagem: O atacante pesquisa e seleciona um alvo (pessoa ou organização) e coleta informações relevantes, como endereço de e-mail, nome, cargo, interesses e comportamentos na internet, e cria a mensagem usando essas informações com base. Contato: O atacante envia um e-mail falso ou cria uma página web falsa que imita a identidade visual e o conteúdo de uma instituição legítima. A mensagem pode conter um link, arquivo anexado ou página pedindo login que solicita informações.",
      "Engajamento: A vítima recebe o e-mail ou acessa a página web falsa sendo persuadida a realizar a ação pretendida pelo atacante. A persuasão pode ser baseada em várias técnicas (urgência, medo ou incentivos). Captura: O atacante recebe as informações fornecidas pela vítima e as usa para acessar suas contas, roubar dinheiro, realizar fraudes, comprometer sistemas ou espalhar o ataque. Identificar o Phishing pode ser difícil, pois os e-mails ou páginas web falsas podem ser muito bem elaborados e se parecerem muito com os originais.",
      "Como funciona: Seu funcionamento se dá pelas fases de contato e captura citados, envolvendo a enganação, mais engenharia social do que conhecimento técnico de fato, onde é criada a mensagem falsa e captura é quando de fato a pessoa caiu no golpe.",
    ],
    playbook: phishing,
  },
  {
    name: "Malware attack",
    content: [
      "O que faz: É um termo genérico usado para descrever vários tipos de programas maliciosos projetados para prejudicar ativos. Os malwares podem executar roubo de informações pessoais ou financeiras, interrupção ou destruição de sistemas, controle remoto, criptografia de arquivos e outros: Vírus: programas que se replicam e infectam outros arquivos no computador; Worms: se replicam e se espalham por uma rede; Trojans: se disfarçam como um software legítimo e enganam os usuários para que os instalem; Spyware: rastreiam as atividades do usuário e coletam informações pessoais; Ransomware: criptografa os arquivos do usuário e exige um resgate em troca da chave de descriptografia. A operação de um malware varia dependendo do tipo dele e objetivo do atacante. Quando o usuário executa o programa infectado, o malware pode se instalar no sistema.",
      "Operacionalização: Ela varia dependendo do tipo específico de malware, mas pode envolver algumas das seguintes etapas: Infecção: A infecção é o processo de introduzir o malware no sistema alvo. O malware entra em um sistema por meio de uma vulnerabilidade (email de phishing, download malicioso ou uma conexão de rede não segura). Para evitar a detecção, o malware pode disfarçar como um arquivo legítimo. Instalação: O malware é instalado no sistema, permitindo que execute a criação de arquivos ou pastas maliciosas, alteração de arquivos existentes, ou modificações em configurações do sistema. Comunicação: O malware pode tentar se comunicar com um servidor remoto para receber instruções ou enviar dados coletados do sistema infectado. Propagação: Alguns malwares são projetados para se espalhar para outros sistemas na mesma rede ou na internet.",
      "Engajamento: A execução de um código malicioso no sistema da vítima, que pode causar desde a exibição de anúncios indesejados até a captura de informações confidenciais. Alguns malwares são projetados para permanecer em silêncio e executar funções maliciosas em segundo plano, enquanto outros são projetados para exibir mensagens ou imagens na tela do usuário como forma de intimidação ou extorsão.",
      "Como funciona: Os malwares podem se propagar de diversas maneiras, como anexos de e-mails, downloads de sites infectados, softwares pirateados e vulnerabilidades de segurança. Uma vez que um malware é executado em um computador, ele pode começar a realizar suas atividades maliciosas. Cada tipo de malware tem suas próprias características e métodos de propagação. O funcionamento específico de um malware pode variar de acordo com o seu tipo e objetivo, mas em geral, eles têm a capacidade de se instalar em um sistema e se esconder de detecções.",
    ],
    playbook: malware,
  },
  {
    name: "Engenharia social attack",
    content: [
      "Um ataque por engenharia social é um tipo de ataque cibernético que utiliza a manipulação psicológica para obter informações confidenciais ou acesso não autorizado a sistemas ou redes de computadores. O objetivo é fazer com que a vítima acredite que está agindo de forma legítima, quando na verdade está fornecendo informações valiosas ou executando ações maliciosas.",
      "Um exemplo simples de uma situação em que um atacante faz uso de engenharia social é o atacante fazer uma ligação telefônica para alguém que tenha acesso ao sistema, se passando por uma pessoa de confiança e a convencendo a lhe passar as credenciais do sistema por conta de uma urgência, ou qualquer mentira que convença a vítima.",
      "O ataque por engenharia social pode afetar diversos recursos e ativos, como sistemas de computadores, redes, dispositivos móveis, aplicativos e informações confidenciais armazenadas em servidores ou bancos de dados. Além disso, o ataque também pode prejudicar a imagem e a reputação de indivíduos e empresas, bem como causar prejuízos financeiros.",
      "A operacionalização do ataque por engenharia social envolve várias etapas. O primeiro passo é a identificação da vítima potencial e a obtenção de informações sobre ela, como nome, endereço de e-mail, telefone, cargo e informações profissionais. Em seguida, o atacante cria um cenário convincente para a vítima, utilizando técnicas de persuasão para obter sua confiança.",
      "O ataque por engenharia social pode ser realizado de várias maneiras, como por meio de phishing, onde o atacante cria um e-mail ou site falso para enganar a vítima e fazer com que ela revele informações confidenciais ou faça o download de um malware. Outra técnica comum é o pretexting, onde o atacante se faz passar por outra pessoa ou autoridade para obter informações confidenciais ou acesso a sistemas. Outra técnica existente, conhecida por sextorsion, é quando o atacante ameaça revelar fotos íntimas, existentes ou não, exigindo o que quiser da vítima posta em uma situação vulnerável. O atacante também pode se infiltrar em um ambiente restrito de uma empresa ao se passar por um colega quando, por exemplo, um funcionário deixa a porta aberta para o atacante por gentileza. Outra técnica comum consiste em procurar informações sensíveis no lixo da vítima.",
      "O ataque por engenharia social funciona explorando a confiança e a boa-fé da vítima, que muitas vezes não percebe que está sendo enganada. Com a crescente sofisticação dos ataques cibernéticos, é essencial que indivíduos e empresas estejam cientes dos riscos da engenharia social e tomem medidas preventivas, como treinamento de segurança cibernética, políticas de segurança rigorosas e medidas de autenticação de dois fatores.",
      "Um exemplo recente foi quando, em 2020, um grupo de atacantes conseguiu acesso a contas de funcionários do Twitter por meio de engenharia social. Diversas contas famosas do Twitter, como de Joe Biden, Elon Musk, Barack Obama etc. tuitaram que transações de bitcoin para uma carteira específica teriam seu valor dobrado e retornado para o indivíduo. No fim, a carteira recebeu mais de 100 mil dólares de vítimas.",
    ],
    playbook: engenhariasSocial,
  },
  {
    name: "Força bruta attack",
    content: [
      "Um ataque por força bruta é um método utilizado por hackers para tentar adivinhar senhas ou chaves de criptografia por meio de tentativa e erro. Ele funciona por meio da utilização de programas de computador que testam todas as combinações possíveis de caracteres em uma tentativa de descobrir a senha correta.",
      "O ataque por força bruta pode afetar qualquer recurso ou ativo que tenha uma senha ou chave de criptografia, como sistemas, máquinas, dispositivos de armazenamento, contas de e-mail e redes de computadores.",
      "O ataque por força bruta pode ser operacionalizado de várias maneiras. Uma abordagem comum é a utilização de um programa de computador que gera todas as possíveis combinações de caracteres e as testa para adivinhar a senha correta. Além disso, alguns hackers utilizam botnets, que são redes de computadores comprometidos controladas remotamente, para realizar ataques por força bruta em larga escala.",
      "Os ataques por força bruta podem ser extremamente demorados e trabalhosos, especialmente se a senha for longa e complexa. No entanto, com o poder de processamento dos computadores modernos, é possível quebrar senhas comuns em um período de tempo relativamente curto. Para uma senha totalmente aleatória com 8 letras maiúsculas e minúsculas e números, estima-se por volta de uma hora para adivinhá-la por força bruta.",
      "Para realizar um ataque por força bruta, o hacker normalmente utiliza programas específicos, conhecidos como cracking tools ou password cracking software, que testam uma grande quantidade de possíveis senhas em um curto período de tempo. Esses programas podem utilizar diferentes abordagens para realizar o ataque, como o uso de dicionários de palavras comuns, tentativas sequenciais de combinações de caracteres, entre outros.",
      "Além disso, os atacantes podem usar técnicas adicionais para aumentar a eficácia do ataque, como o uso de processamento distribuído, onde várias máquinas trabalham em conjunto para realizar o ataque, ou o uso de técnicas de geração de senhas, onde o programa tenta criar senhas a partir de informações específicas, como nome, data de nascimento, entre outras.",
      "É importante ressaltar que existem bancos de senhas conhecidas disponíveis na internet, que são compostos por senhas vazadas de sistemas comprometidos em diferentes incidentes de segurança. Esses bancos de senhas podem ser utilizados por atacantes em ataques por força bruta, já que muitas pessoas reutilizam senhas em diferentes serviços e sistemas.",
      "As senhas armazenadas nos bancos de senhas conhecidas podem estar criptografadas com diferentes algoritmos, como MD5, SHA-1, SHA-2, entre outros. No entanto, muitos desses algoritmos de criptografia já foram quebrados e não são mais considerados seguros para proteger senhas. Por isso é importante utilizar algoritmos de criptografia mais recentes, como o SHA-512.",
      "Em 2020, a Canadian Revenue Agency (CRA) sofreu um ataque de força bruta que comprometeu por volta de 11 mil contas.",
    ],
    playbook: bruteForce,
  },
  {
    name: "Cross-site scripting (XSS) attack",
    content: [
      "Cross-site scripting (XSS) é um tipo de ataque que visa explorar vulnerabilidades em sites da web para injetar código malicioso e executá-lo nos navegadores dos usuários. Esse tipo de ataque pode ser altamente prejudicial, permitindo que invasores roubem dados do usuário, espionem suas atividades na web ou redirecionem o usuário para sites falsos ou maliciosos.",
      "O objetivo do ataque de XSS é basicamente injetar código malicioso em um site da web e enganar o navegador do usuário para executá-lo. Os atacantes usam várias técnicas para alcançar esse objetivo, geralmente explorando vulnerabilidades em formulários, scripts e outros recursos da web.",
      "Uma vez que o código malicioso é executado, o atacante pode potencialmente ter acesso a informações confidenciais do usuário, como senhas, números de cartão de crédito ou outras informações pessoais. O ataque de XSS pode afetar vários recursos ou ativos, como sites, navegadores ed ispositivos móveis.",
      "O ataque de XSS pode ser operacionalizado por meio de diferentes técnicas, como a injeção de código malicioso javascript em um formulário de comentários de um blog, por exemplo. O atacante pode inserir um script malicioso em um campo de comentários, que é executado automaticamente quando o usuário carrega a página do blog. Uma vez que o código é executado, ele pode fazer qualquer coisa que o atacante quiser, como coletar informações pessoais do usuário e enviá-las para o atacante ou redirecionar o usuário para um site malicioso.",
      "A forma mais comum de XSS ocorre quando o site não trata o input de um usuário de forma segura e acaba apenas embutindo-o no HTML. Em um comentário de blog, por exemplo, o atacante pode escrever uma tag de <script> e injetar qualquer código javascript que quiser. Caso o input não seja tratado corretamente pelo blog (escapando caracteres como os colchetes angulares), quando outro usuário acessar a seção de comentários ao invés de aparecer apenas o texto de comentário do atacante, o site tratará a tag de script como sendo uma tag HTML normal e executará o código javascript no lado do usuário.",
      "Em 2014, um usuário do Twitter explorou uma vulnerabilidade no TweetDeck, em que a aplicação não fazia o tratamento correto dos tuítes digitados pelos usuários: tuítes que terminassem com um emoji eram tratados como HTML. O simples tuíte consistia em uma tag script que automaticamente clicava e confirmava o retuíte. Dessa forma, qualquer usuário que carregasse esse tuíte automaticamente o retuitava. Hoje, esse tuíte tem 61 mil retuítes.",
    ],
    playbook: crossSite,
  },
  {
    name: "Ransomware attack",
    content: [
      "Ransomware é um tipo de malware que criptografa os arquivos de um sistema ou dispositivo, tornando-os inacessíveis ao usuário, e exige o pagamento de um resgate em troca da chave de descriptografia. O objetivo do ransomware é extorquir dinheiro dos usuários afetados.",
      "Existem diversas formas de execução do ransomware. Uma delas é por meio do phishing, que é uma técnica de engenharia social que usa e-mails falsos para induzir os usuários a clicarem em links ou baixarem arquivos maliciosos. Outra forma é por meio de vulnerabilidades de segurança em sistemas ou dispositivos, que permitem que o ransomware seja instalado sem a necessidade de interação do usuário.",
      "Uma vez instalado no sistema, o ransomware começa a criptografar os arquivos e, em seguida, exibe uma mensagem exigindo o pagamento do resgate para que a chave de descriptografia seja fornecida. Geralmente, o pagamento é exigido em criptomoedas, que são difíceis de rastrear.",
      "O exemplo mais famoso de ataque de ransomware foi o WannaCry, que aconteceu em maio de 2017. O WannaCry afetou milhares de computadores em todo o mundo, incluindo sistemas de grandes empresas, hospitais e governos.",
      "O WannaCry foi disseminado por meio de uma vulnerabilidade de segurança do Windows, que havia sido corrigida pela Microsoft alguns meses antes, mas muitos usuários ainda não haviam instalado a atualização de segurança.",
      "O ransomware criptografou os arquivos dos usuários e exigiu o pagamento de um resgate em bitcoin para que a chave de descriptografia fosse fornecida. O ataque causou grandes prejuízos financeiros e colocou em risco a privacidade e a segurança de muitos usuários.",
      "O WannaCry foi um exemplo importante de como os ataques de ransomware podem ser devastadores e como é importante manter os sistemas atualizados e seguros para prevenir esses tipos de ameaças.",
      "Outro ataque famoso, trazendo para ares mais próximos, foi o ataque ao site das lojas Renner aconteceu no dia 19 de agosto de 2021, onde, segundo a entidade pró-consumidor (Procon-SP), “a varejista discriminou os controles e ferramentas implementados para tais processos.”. Onde os clientes além de serem obrigados a informar dados pessoais para compras.",
      "Não se sabe ao certo, porém informações supostamente vazadas dizem que foi pago 20 milhões de dólares aos golpistas, que teriam provavelmente se aproveitado de uma falha. Porém em notas a lojista diz ter apenas pego um backup das informações e feito algum tipo de recuperação de dados.",
      "É importante lembrar que, mesmo que o usuário pague o resgate, não há garantia de que a chave de descriptografia será fornecida. Além disso, ceder às exigências dos criminosos pode incentivar ainda mais ataques de ransomware. A melhor forma de prevenir o ransomware é manter o sistema e os programas atualizados, ter um antivírus instalado e fazer backups regulares dos arquivos importantes.",
    ],
    playbook: ransomware,
  },
  {
    name: "O Ataque de Man-in-the-Middle (ou Ataque MITM)",
    content: [
      "O Ataque de Man-in-the-Middle (ou Ataque MITM) é um tipo de ataque em que um invasor intercepta a comunicação entre duas partes que estão se comunicando, como um cliente e um servidor, e pode monitorar, modificar ou até mesmo injetar novas informações na comunicação. O objetivo do ataque MITM é obter informações confidenciais, como senhas, números de cartão de crédito, dados bancários e outras informações pessoais.",
      "O ataque MITM é executado por meio da interceptação das comunicações entre as duas partes, sem que elas percebam que estão sendo monitoradas. O invasor pode usar diversas técnicas para executar o ataque, como:",
      "Spoofing de ARP: o invasor pode enviar pacotes ARP falsificados para a rede, direcionando o tráfego para um dispositivo controlado por ele. Essa é uma técnica que pode além de interceptar os pacotes do destinatário, consegue clonar um IP, podendo assim fazendo até mesmo uma negação de serviço.",
      "Redirecionamento de DNS: o invasor pode interceptar a comunicação de DNS e redirecionar o tráfego para um servidor controlado por ele. Em alguns casos ele pode estar inclusive no broadCast primário da rede.Para esses dois primeiros temos um tutorial em que explica como executá-los com o queridinho do mundo da segurança ofensiva, o kali linux.",
      "Ataque de phishing: o invasor pode criar um site falso e enviar um e-mail com um link para o usuário acessar o site. Quando o usuário acessa o site falso, o invasor pode interceptar a comunicação e roubar as informações.",
      "Intercepção de Wi-Fi: o invasor pode interceptar a comunicação sem fio entre um dispositivo e um ponto de acesso Wi-Fi e monitorar a comunicação. Esse exemplo é o mais comum, ele é bastante aplicado em redes wireless falsas de hotéis, onde a vítima se conecta a rede achando que a mesma pertence ao estabelecimento quando na verdade é uma rede feita por golpistas para adquirir senhas e informações para os golpistas.",
      "Uma vez que o invasor obtém o controle da comunicação, ele pode monitorar as informações que estão sendo trocadas e, se necessário, modificar ou injetar novas informações na comunicação. Isso pode permitir que o invasor roube informações confidenciais, realize fraudes ou execute outros tipos de ataques. Para prevenir o ataque MITM, é importante usar conexões seguras, como HTTPS, VPN ou criptografia de ponta a ponta, e não confiar em redes Wi-Fi públicas ou não confiáveis.",
    ],
    playbook: mitm,
  },
  {
    name: "SQL injection attack",
    content: [
      "Ataque de Injeção SQL é uma técnica de ataque cibernético que explora vulnerabilidades em aplicações web que interagem com bancos de dados. O objetivo do ataque é manipular o banco de dados subjacente ao aplicativo, permitindo que o invasor acesse, altere ou exclua dados confidenciais, como senhas, informações de cartão de crédito ou outras informações pessoais.",
      "Para podermos fazer um ataque de injeção SQL temos que primeiramente identificar uma falha no serviço web o qual vamos atacar que permita um comando SQL, o qual é o que nomeia todo o ataque a injeção do script sql, ali você insere um script de sua preferência, que pode ser desde uma simples consulta até um drop de todo o database, o mais comum nesses casos é o criminoso inserir um script de Ransomware e sequestrar todos os dados conforme aconteceu com a renner que já foi citado.Um tutorial de como ele funciona explorando uma falha antiga do PHP.",
      "O melhor jeito de prevenção desse tipo de ataque aos seus sistemas é tentar manter a versão mais atual possível da ferramenta usada na aplicação web e sempre ficar atento a falhas que são divulgadas quase que diariamente sobre os compiladores/interpretadores e suas linguagens. Também é importante ter um time (red-team) de segurança ofensiva se possível.",
      "Ataques desse estilo são relativamente comuns por falta de manutenção, cuidado e investimento por parte das equipes de desenvolvimento e das empresas. Um ataque que ficou conhecido e ganhou destaque no Brasil um tempo atrás foi um executado por um famoso que era dono de um blog o CID DO NÃO SALVO onde um fã enviou um tutorial de como se aproveitar de uma falha desse estilo para colocar uma notícia no site oficial do santos futebol clube, na época a falha já era bastante conhecida entre a comunidade, porém por falta de conhecimento e de investimento em TI o clube acabou passando por isso.",
    ],
    playbook: sqlInjection,
  },
];

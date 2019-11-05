export default {
    greeting: {
        title: "Olá, seja bem-vindo!",
        paragraphs: [
            "Quer saber como anda a busca por vagas em creches na sua região?",

            "Consulte aqui antes de ir até uma escola para realizar o cadastro de solicitação de uma vaga. Você pode testar diversos endereços e avaliar qual a melhor opção!"

            // "Descubra como anda a fila na sua região.",
            // "Teste mais de um endereço (casa, trabalho).",
            // "Escolha a melhor opção."
        ]
    },
    check_if_registered: {
        title: "A criança já está cadastrada na fila de espera das creches?"
    },
    is_registered: {
        title: "Se a criança já está cadastrada na espera, você pode:"
    },
    date_of_birth: {
        title: "Qual o mês e ano de nascimento da criança?",
        paragraphs: ["Assim posso encontrar o grupo certo para ela na creche."],
        not_in_preschool_age: "A criança não está em idade de creche. Tente para outra idade.",
        error_calculating_age: "Houve um erro ao calcular a idade da criança. Por favor tente de novo."
    },
    date_of_birth_message: function (month, year) {
        return `A criança nasceu em ${month} de ${year}`;
    },
    is_in_group_message: function (groupName) {
        let dist;
        if (['Berçário I', 'Berçário II'].includes(groupName)) {
            dist = '1,5'
        } else {
            dist = '2'
        }
        return [`Pela idade, ela deveria estar em uma turma de ${groupName} da creche.`,
            `Nesse caso, nosso sistema mostrará vagas a até ${dist} km de distância do endereço que você digitar.`,
            ` Como funciona a fila da creche?`,
            `Em uma escola da Rede Municipal, você cadastra até dois endereços de sua preferência – pode ser o endereço da sua casa, do seu trabalho, de algum familiar...`,
            `A criança concorrerá simultaneamente a uma vaga em mais de uma creche, de acordo com os seguintes critérios:`,
            `Se a criança tem até 2 anos de idade incompletos até 31 de março do ano corrente, ela concorrerá a uma vaga de Berçário. O sistema da Secretaria Municipal de Educação procurará por vagas em creches localizadas a até 1,5 km de distância do endereço informado.
            Mas se a criança tem de 2 a 3 anos completos até 31 de março do ano corrente, ela concorrerá a uma vaga de Mini-Grupo. Nesse caso, o sistema procurará por vagas em creches localizadas a até 2 km de distância do endereço informado.`,
            `Ficou com dúvida ainda?`,
            `Procure a Unidade Educacional ou entre em contato com o setor de Demanda Escolar da Diretoria Regional de Educação mais próxima.`,
            `Veja aqui os contatos.`]
    },
    address_input: {
        title: "Qual o endereço você quer consultar?",
        paragraphs: ["Pode ser o endereço da sua casa, do trabalho, de algum familiar..."]
    },
    results: {
        total_wait_message: function (waitListTotal, groupName, numberOfSchools, address) {
            if (!numberOfSchools) return `Não há creches perto de ${address}.`;
            return `Há ${waitListTotal} crianças na fila do ${groupName} a serem distribuídas nas ${numberOfSchools} creches perto de ${address}.`;
        },
        title_wait_message: function (waitListTotal, numberOfSchools,groupName) {
            if (!numberOfSchools) return `Não há creches próximas a este endereço.`;
            return `Há ${waitListTotal} crianças aguardando uma vaga de ${groupName} em uma dessas ${numberOfSchools} creches`;
        },
        data_updated_at: function (updatedAt) {
            const fomattedDate = new Date(updatedAt).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            return `Estes dados foram atualizados em ${fomattedDate}.`;
        },
        see_list_below: function (groupName) {
            let dist;
            if ([1, 4].includes(parseInt(groupName))) {
                dist = '1,5'
            } else {
                dist = '2'
            }
            return `Essa fila de espera corresponde ao endereço que você digitou e às creches localizadas a até ${dist} km de distância dele.`
        }
    },
    school_list_explanation: {
        paragraphs: [
            "Ao cadastrar a criança na fila, ela vai ficar na espera de todas as creches da lista acima, e vai ser chamada na que liberar vagas primeiro.",
            "Ao abrirmos uma nova creche na região, a criança também será incluída automaticamente na espera.",
            "Assim, ela espera o mínimo tempo possível pela vaga."
        ]
    },
    registration_greeting: {
        title: "Vou te explicar como fazer o cadastro na fila de espera"
    },
    registration_documents: {
        title: "Você vai precisar destes documentos:",
        paragraphs: [
            "– Comprovante de residência com CEP (pode ser uma conta de água, luz, telefone ou gás)",
            "– Um documento seu com foto (RG, CNH ou RNE)",
            "– Um documento da criança (RG, RNE ou Certidão de Nascimento)"
        ]
    },
    registration_steps: {
        title: "Depois, vá a qualquer creche da Prefeitura e procure um funcionário para fazer o cadastro.",
        paragraphs: [
            "A criança será cadastrada na espera de todas creches que ficam a até 1,5km ou 2 km de distância do endereço informado, a depender de sua idade.",
            "Ao abrirmos uma nova creche na região, a criança também será incluída automaticamente na espera.",
            "Assim que sua vaga for liberada, vamos entrar em contato com você por telefone."
        ]
    },
    registration_list: {
        title: "Veja as creches próximas ao seu endereço onde você pode fazer o cadastro",
        paragraphs: ["A lista abaixo mostra as unidades mais próximas do seu endereço."]
    },
    actions: {
        continue: "Continuar",
        click_continue: "Clique para continuar",
        yes: "Sim",
        no: "Não",
        can_do: "O que posso fazer agora?",
        register: "Cadastrar na fila",
        how_to_register: "Veja como se cadastrar na fila de espera",
        compare_address: "Comparar com outro endereço",
        see_wait_near: "Veja a espera nas creches perto de outro endereço",
        back_to_start: "Voltar para o começo",
        search_other_registration: "Procurar outros locais para cadastro",
        see_schools_near: "Veja creches e escolas perto de outro endereço",
        input_address: "Digite o endereço",
        search: "Buscar",
        see_more: "Ver mais creches",
        loading_results: "Carregando resultados...",
        check_registration_status: "Acompanhar sua posição na fila",
        current_position_explanation: "A posição atual da criança na fila pode ser vista em outro sistema da Secretaria de Educação. A posição da fila pode mudar, em atendimento a casos previstos por lei.\n" +
            "Em caso de dúvidas, procure a Unidade Educacional ou entre em contato com o setor de Demanda Escolar da Diretoria Regional de Educação mais próxima\n",
        check_wait_today: "Ver como está a espera para quem entra na fila hoje",
        you_can_check_other_address: "Você pode ver a espera também em outros endereços",
        start_now: "É muito simples, vamos começar?",
        see_on_map: "Ver no mapa",
        call: "Ligar",
        back: "Voltar",
        loading_error: "Não conseguimos buscar as informações para este endereço, por favor, tente novamente mais tarde",
    },
    messages: {
        month_of_birth: "Mês de nascimento",
        year_of_birth: "Ano de nascimento",
        phone: "Telefone",
        meters: "metros"
    },
    routes: {
        privacy: "/privacidade",
        check_if_registered: "/esta-cadastrada",
        is_registered: "/ja-esta-cadastrada",
        check_registration_status: "http://eolgerenciamento.prefeitura.sp.gov.br/frmgerencial/ConsultaPosicaoIndividual.aspx?Cod=92428",
        date_of_birth: "/data-nascimento",
        preschool_group: "/grupo-creche",
        address: "/endereco",
        results: "/resultados",
        register: "/cadastrar"
    },
    site: {
        tag_line: "Fila da Creche - O melhor caminho para sua vaga"
    },
    not_found: {
        title: "Desculpe, não encontramos esta página...",
        subtitle: "A página que você está tentando acessar não pode ser encontrada.",
    }
}

const el = (id) => document.getElementById(id);
const byName = (name) => Array.from(document.getElementsByName(name)).filter((n) => n instanceof HTMLInputElement);
const checkedValues = (inputs) => Array.from(inputs).filter(i => i.checked).map(i => i.value || i.id);
const formAnamnese = el("formAnamnese");
const divMensagem = el("divMensagem");
const btnCadastrar = el("btnCadastrar");
const txtDataAtendimento = el("txtDataAtendimento");
const txtNome = el("txtNome");
const txtDataNascimento = el("txtDataNascimento");
const txtIdade = el("txtIdade");
const slGenero = el("slGenero");
const txtCor = el("txtCor");
const txtTelefone = el("txtTelefone");
const txtEmail = el("txtEmail");
const txtEstadoCivil = el("txtEstadoCivil");
const txtNaturalidade = el("txtNaturalidade");
const txtNacionalidade = el("txtNacionalidade");
const txtEndereco = el("txtEndereco");
const txtComplemento = el("txtComplemento");
const txtBairro = el("txtBairro");
const txtCidade = el("txtCidade");
const txtEstado = el("txtEstado");
const txtProfissao = el("txtProfissao");
const txtFilhos = el("txtFilhos");
const txtQueixaPrincipal = el("txtQueixaPrincipal");
const txtHistoriaDoenca = el("txtHistoriaDoenca");
const txtHistoriaPatologia = el("txtHistoriaPatologia");
const txtProcedimentoCirurgico = el("txtProcedimentoCirurgico");
const txtHistoriaFamiliar = el("txtHistoriaFamiliar");
const txtHistoriaSocial = el("txtHistoriaSocial");
const txtAltura = el("txtAltura");
const txtPeso = el("txtPeso");
const txtPressaoArterial = el("txtPressaoArterial");
const txtTratamentoAtual = el("txtTratamentoAtual");
const txtMedicamento = el("txtMedicamento");
const txtExamesFisicosList = byName("txtExamesFisicos");
const disposicaoGeralChecks = byName("ckDisposicaoGeral");
const txtObservacoesList = byName("txtObservacao");
const ckSenteFrio = el("ckSenteFrio");
const ckSenteCalor = el("ckSenteCalor");
const ckMBanhoFrio = el("ckMBanhoFrio");
const ckMBanhoQuente = el("ckMBanhoQuente");
const ckFrioExtremidade = el("ckFrioExtremidade");
const ckCalorExtremidade = el("ckCalorExtremidade");
const ckCalorPeito = el("ckCalorPeito");
const ckCalorAlto = el("ckCalorAlto");
const ckSonoBom = el("ckSonoBom");
const ckInsoniaInicial = el("ckInsoniaInicial");
const ckInsoniaTerminal = el("ckInsoniaTerminal");
const ckInsoniaIntermitente = el("ckInsoniaIntermitente");
const txtHorasSono = el("txtHorasSono");
const txtSonho = el("txtSonho");
const txtTipoSonho = el("txtTipoSonho");
const alimentacaoChecks = byName("ckAlimentacao");
const sedeChecks = byName("ckSede");
const paladarChecks = byName("ckPaladar");
const doresChecks = byName("ckDores");
const temperamentoChecks = byName("ckTemperamento");
const acuidadeAuditivaChecks = byName("ckAcuidadeAuditiva");
const acuidadeVisualChecks = byName("ckAcuidadeVisual");
const olfatoChecks = byName("ckOlfato");
const respiracaoChecks = byName("ckRespiracao");
const digestaoChecks = byName("ckDigestao");
const evacuacaoChecks = byName("ckEvacuacao");
const urinaChecks = [
    el("ckBranca"), // name="ckUrina"
    el("ckAmarela"), // name="ckUrina"
    el("ckAmarelaEscura"), // name="ckUrina"
    el("ckPouca"), // name="ckUrina"
    el("ckAbundante"), // name="ckUrina"
    el("ckUrinaOdorForte"), // name="ckUrina"
    el("ckUrinaSemOdor"), // name="ckUrina"
    el("ckCistiteFrequente"), // name="ckUrina"
    el("ckEspumosa") // name="ckUrina"
].filter(Boolean);
const circulacaoChecks = byName("ckCirculacao");
const sudoreseChecks = byName("ckSudorese");
const txtMenarca = el("txtMenarca");
const txtNumeroGestacoes = el("txtNumeroGestacoes");
const libidoChecks = byName("ckLibido");
const menstruacaoChecks = byName("ckMenstruacao");
const apRepMasculinoChecks = byName("ckApReprodutorMasculino");
const fanerosChecks = byName("ckFaneros");
const intelectoChecks = byName("ckIntelecto");
const relacoesFamiliaresChecks = byName("ckRelacoesFamiliares");
const relacaoCasalChecks = byName("ckRelacaoCasal");
const relacaoSexualChecks = byName("ckRelacaoSexual");
const situacaoEconomicaChecks = byName("ckSituacaoEconomica");
const relacoesSociaisChecks = byName("ckRelacoesSociais");
const txtHobbies = el("txtHobbies");
const txtAtividadeFisica = el("txtAtividadeFisica");
const txtAtividadeCultural = el("txtAtividadeCultural");
const txtOrientacoesGerais = el("txtOrientacoesGerais");
const linkSair = document.querySelector(".sair a");
export function coletarDadosFormulario() {
    return {
        dataAtendimento: (txtDataAtendimento === null || txtDataAtendimento === void 0 ? void 0 : txtDataAtendimento.value) || "",
        nome: (txtNome === null || txtNome === void 0 ? void 0 : txtNome.value) || "",
        dataNascimento: (txtDataNascimento === null || txtDataNascimento === void 0 ? void 0 : txtDataNascimento.value) || "",
        idade: (txtIdade === null || txtIdade === void 0 ? void 0 : txtIdade.value) || "",
        genero: (slGenero === null || slGenero === void 0 ? void 0 : slGenero.value) || "",
        cor: (txtCor === null || txtCor === void 0 ? void 0 : txtCor.value) || "",
        telefone: (txtTelefone === null || txtTelefone === void 0 ? void 0 : txtTelefone.value) || "",
        email: (txtEmail === null || txtEmail === void 0 ? void 0 : txtEmail.value) || "",
        estadoCivil: (txtEstadoCivil === null || txtEstadoCivil === void 0 ? void 0 : txtEstadoCivil.value) || "",
        naturalidade: (txtNaturalidade === null || txtNaturalidade === void 0 ? void 0 : txtNaturalidade.value) || "",
        nacionalidade: (txtNacionalidade === null || txtNacionalidade === void 0 ? void 0 : txtNacionalidade.value) || "",
        endereco: (txtEndereco === null || txtEndereco === void 0 ? void 0 : txtEndereco.value) || "",
        complemento: (txtComplemento === null || txtComplemento === void 0 ? void 0 : txtComplemento.value) || "",
        bairro: (txtBairro === null || txtBairro === void 0 ? void 0 : txtBairro.value) || "",
        cidade: (txtCidade === null || txtCidade === void 0 ? void 0 : txtCidade.value) || "",
        estado: (txtEstado === null || txtEstado === void 0 ? void 0 : txtEstado.value) || "",
        profissao: (txtProfissao === null || txtProfissao === void 0 ? void 0 : txtProfissao.value) || "",
        filhos: (txtFilhos === null || txtFilhos === void 0 ? void 0 : txtFilhos.value) || "",
        queixaPrincipal: (txtQueixaPrincipal === null || txtQueixaPrincipal === void 0 ? void 0 : txtQueixaPrincipal.value) || "",
        historiaDoenca: (txtHistoriaDoenca === null || txtHistoriaDoenca === void 0 ? void 0 : txtHistoriaDoenca.value) || "",
        historiaPatologia: (txtHistoriaPatologia === null || txtHistoriaPatologia === void 0 ? void 0 : txtHistoriaPatologia.value) || "",
        procedimentoCirurgico: (txtProcedimentoCirurgico === null || txtProcedimentoCirurgico === void 0 ? void 0 : txtProcedimentoCirurgico.value) || "",
        historiaFamiliar: (txtHistoriaFamiliar === null || txtHistoriaFamiliar === void 0 ? void 0 : txtHistoriaFamiliar.value) || "",
        historiaSocial: (txtHistoriaSocial === null || txtHistoriaSocial === void 0 ? void 0 : txtHistoriaSocial.value) || "",
        altura: (txtAltura === null || txtAltura === void 0 ? void 0 : txtAltura.value) || "",
        peso: (txtPeso === null || txtPeso === void 0 ? void 0 : txtPeso.value) || "",
        pressaoArterial: (txtPressaoArterial === null || txtPressaoArterial === void 0 ? void 0 : txtPressaoArterial.value) || "",
        tratamentoAtual: (txtTratamentoAtual === null || txtTratamentoAtual === void 0 ? void 0 : txtTratamentoAtual.value) || "",
        medicamento: (txtMedicamento === null || txtMedicamento === void 0 ? void 0 : txtMedicamento.value) || "",
        examesFisicos: txtExamesFisicosList.map(i => i.value),
        disposicaoGeral: checkedValues(disposicaoGeralChecks),
        observacoes: txtObservacoesList.map(i => i.value),
        sensibilidadeTermica: [
            (ckSenteFrio === null || ckSenteFrio === void 0 ? void 0 : ckSenteFrio.checked) ? ckSenteFrio.value || "senteFrio" : null,
            (ckSenteCalor === null || ckSenteCalor === void 0 ? void 0 : ckSenteCalor.checked) ? ckSenteCalor.value || "senteCalor" : null,
            (ckMBanhoFrio === null || ckMBanhoFrio === void 0 ? void 0 : ckMBanhoFrio.checked) ? ckMBanhoFrio.value || "banhoFrio" : null,
            (ckMBanhoQuente === null || ckMBanhoQuente === void 0 ? void 0 : ckMBanhoQuente.checked) ? ckMBanhoQuente.value || "banhoQuente" : null,
            (ckFrioExtremidade === null || ckFrioExtremidade === void 0 ? void 0 : ckFrioExtremidade.checked) ? ckFrioExtremidade.value || "frioExtremidade" : null,
            (ckCalorExtremidade === null || ckCalorExtremidade === void 0 ? void 0 : ckCalorExtremidade.checked) ? ckCalorExtremidade.value || "calorExtremidade" : null,
            (ckCalorPeito === null || ckCalorPeito === void 0 ? void 0 : ckCalorPeito.checked) ? ckCalorPeito.value || "calorPeito" : null,
            (ckCalorAlto === null || ckCalorAlto === void 0 ? void 0 : ckCalorAlto.checked) ? ckCalorAlto.value || "calorAlto" : null
        ].filter(Boolean),
        sono: [
            (ckSonoBom === null || ckSonoBom === void 0 ? void 0 : ckSonoBom.checked) ? ckSonoBom.value || "bom" : null,
            (ckInsoniaInicial === null || ckInsoniaInicial === void 0 ? void 0 : ckInsoniaInicial.checked) ? ckInsoniaInicial.value || "insoniaInicial" : null,
            (ckInsoniaTerminal === null || ckInsoniaTerminal === void 0 ? void 0 : ckInsoniaTerminal.checked) ? ckInsoniaTerminal.value || "insoniaTerminal" : null,
            (ckInsoniaIntermitente === null || ckInsoniaIntermitente === void 0 ? void 0 : ckInsoniaIntermitente.checked) ? ckInsoniaIntermitente.value || "insoniaIntermitente" : null
        ].filter(Boolean),
        horasSono: (txtHorasSono === null || txtHorasSono === void 0 ? void 0 : txtHorasSono.value) || "",
        sonhos: { costumaTer: (txtSonho === null || txtSonho === void 0 ? void 0 : txtSonho.value) || "", tipos: (txtTipoSonho === null || txtTipoSonho === void 0 ? void 0 : txtTipoSonho.value) || "" },
        alimentacao: checkedValues(alimentacaoChecks),
        sede: checkedValues(sedeChecks),
        paladar: checkedValues(paladarChecks),
        dores: checkedValues(doresChecks),
        temperamento: checkedValues(temperamentoChecks),
        acuidadeAuditiva: checkedValues(acuidadeAuditivaChecks),
        acuidadeVisual: checkedValues(acuidadeVisualChecks),
        olfato: checkedValues(olfatoChecks),
        respiracao: checkedValues(respiracaoChecks),
        digestao: checkedValues(digestaoChecks),
        evacuacao: checkedValues(evacuacaoChecks),
        urina: urinaChecks.filter(i => i.checked).map(i => i.value || i.id),
        circulacao: checkedValues(circulacaoChecks),
        sudorese: checkedValues(sudoreseChecks),
        apReprodutorFeminino: {
            menarca: (txtMenarca === null || txtMenarca === void 0 ? void 0 : txtMenarca.value) || "",
            numeroGestacoes: (txtNumeroGestacoes === null || txtNumeroGestacoes === void 0 ? void 0 : txtNumeroGestacoes.value) || "",
            libido: checkedValues(libidoChecks),
            menstruacao: checkedValues(menstruacaoChecks)
        },
        apReprodutorMasculino: checkedValues(apRepMasculinoChecks),
        faneros: checkedValues(fanerosChecks),
        intelecto: checkedValues(intelectoChecks),
        relacoesFamiliares: checkedValues(relacoesFamiliaresChecks),
        relacaoCasal: checkedValues(relacaoCasalChecks),
        relacaoSexual: checkedValues(relacaoSexualChecks),
        situacaoEconomica: checkedValues(situacaoEconomicaChecks),
        relacoesSociais: checkedValues(relacoesSociaisChecks),
        hobbies: (txtHobbies === null || txtHobbies === void 0 ? void 0 : txtHobbies.value) || "",
        atividadeFisica: (txtAtividadeFisica === null || txtAtividadeFisica === void 0 ? void 0 : txtAtividadeFisica.value) || "",
        atividadeCultural: (txtAtividadeCultural === null || txtAtividadeCultural === void 0 ? void 0 : txtAtividadeCultural.value) || "",
        observacaoGeral: txtObservacoesList.map(i => i.value),
        orientacoesGerais: (txtOrientacoesGerais === null || txtOrientacoesGerais === void 0 ? void 0 : txtOrientacoesGerais.value) || ""
    };
}
function validar(data) {
    const erros = [];
    // Mapeia o nome da chave do objeto para um nome de campo amigável
    const nomesAmigaveis = {
        dataAtendimento: "Data do Atendimento",
        nome: "Nome Completo",
        dataNascimento: "Data do Nascimento",
        idade: "Idade",
        genero: "Gênero",
        cor: "Cor",
        telefone: "Telefone",
        email: "E-mail",
        estadoCivil: "Estado Civil",
        naturalidade: "Naturalidade",
        nacionalidade: "Nacionalidade",
        endereco: "Endereço",
        complemento: "Complemento",
        bairro: "Bairro",
        cidade: "Cidade",
        estado: "Estado",
        profissao: "Profissão/Ocupação",
        filhos: "Filhos",
        queixaPrincipal: "Queixa Principal (QP)",
        historiaDoenca: "História da Doença Atual (HDA)",
        historiaPatologia: "História de Patologias Pregressas (HPP)",
        procedimentoCirurgico: "Realizou algum procedimento cirúrgico",
        historiaFamiliar: "História Familiar (HF)",
        historiaSocial: "História Social (HS)",
        altura: "Altura",
        peso: "Peso",
        pressaoArterial: "Pressão Arterial",
        tratamentoAtual: "Tratamento Atual",
        medicamento: "Medicamentos",
    };
    for (const campo in nomesAmigaveis) {
        if (!data[campo] || String(data[campo]).trim() === "") {
            erros.push(`O campo "${nomesAmigaveis[campo]}" é obrigatório.`);
        }
    }
    return erros;
}
export function salvarFormulario() {
    const dados = coletarDadosFormulario();
    const erros = validar(dados);
    if (erros.length) {
        const texto = "Erros: " + erros.join(" | ");
        if (divMensagem)
            divMensagem.textContent = texto;
        console.warn(texto);
        return false;
    }
    console.log("Formulário OK. Dados:", dados);
    if (divMensagem)
        divMensagem.textContent = "Formulário cadastrado com sucesso.";
    return true;
}
if (formAnamnese) {
    formAnamnese.addEventListener("submit", ev => {
        ev.preventDefault();
        salvarFormulario();
    });
}
if (btnCadastrar) {
    btnCadastrar.addEventListener("click", ev => {
        ev.preventDefault();
        salvarFormulario();
    });
}
export default {
    coletarDadosFormulario,
    salvarFormulario
};
//# sourceMappingURL=formularioAnaminese.js.map
type Nullable<T> = T | null;

const el = <T extends HTMLElement>(id: string): Nullable<T> =>
  document.getElementById(id) as T | null;

const byName = (name: string): HTMLInputElement[] =>
  Array.from(document.getElementsByName(name)).filter(
    (n): n is HTMLInputElement => n instanceof HTMLInputElement
  );

const checkedValues = (inputs: Iterable<HTMLInputElement>) =>
  Array.from(inputs).filter(i => i.checked).map(i => i.value || i.id);

const formAnamnese = el<HTMLFormElement>("formAnamnese");
const divMensagem = el<HTMLDivElement>("divMensagem");
const btnCadastrar = el<HTMLButtonElement>("btnCadastrar");

const txtDataAtendimento = el<HTMLInputElement>("txtDataAtendimento");
const txtNome = el<HTMLInputElement>("txtNome");
const txtDataNascimento = el<HTMLInputElement>("txtDataNascimento");
const txtIdade = el<HTMLInputElement>("txtIdade");
const slGenero = el<HTMLSelectElement>("slGenero");
const txtCor = el<HTMLInputElement>("txtCor");
const txtTelefone = el<HTMLInputElement>("txtTelefone");
const txtEmail = el<HTMLInputElement>("txtEmail");
const txtEstadoCivil = el<HTMLInputElement>("txtEstadoCivil");
const txtNaturalidade = el<HTMLInputElement>("txtNaturalidade");
const txtNacionalidade = el<HTMLInputElement>("txtNacionalidade");
const txtEndereco = el<HTMLInputElement>("txtEndereco");
const txtComplemento = el<HTMLInputElement>("txtComplemento");
const txtBairro = el<HTMLInputElement>("txtBairro");
const txtCidade = el<HTMLInputElement>("txtCidade");
const txtEstado = el<HTMLInputElement>("txtEstado");
const txtProfissao = el<HTMLInputElement>("txtProfissao");
const txtFilhos = el<HTMLInputElement>("txtFilhos");

const txtQueixaPrincipal = el<HTMLInputElement>("txtQueixaPrincipal");
const txtHistoriaDoenca = el<HTMLInputElement>("txtHistoriaDoenca");
const txtHistoriaPatologia = el<HTMLInputElement>("txtHistoriaPatologia");
const txtProcedimentoCirurgico = el<HTMLInputElement>("txtProcedimentoCirurgico");
const txtHistoriaFamiliar = el<HTMLInputElement>("txtHistoriaFamiliar");
const txtHistoriaSocial = el<HTMLInputElement>("txtHistoriaSocial");
const txtAltura = el<HTMLInputElement>("txtAltura");
const txtPeso = el<HTMLInputElement>("txtPeso");
const txtPressaoArterial = el<HTMLInputElement>("txtPressaoArterial");
const txtTratamentoAtual = el<HTMLInputElement>("txtTratamentoAtual");
const txtMedicamento = el<HTMLInputElement>("txtMedicamento");

const txtExamesFisicosList = byName("txtExamesFisicos");

const disposicaoGeralChecks = byName("ckDisposicaoGeral");
const txtObservacoesList = byName("txtObservacao");

const ckSenteFrio = el<HTMLInputElement>("ckSenteFrio");
const ckSenteCalor = el<HTMLInputElement>("ckSenteCalor");
const ckMBanhoFrio = el<HTMLInputElement>("ckMBanhoFrio");
const ckMBanhoQuente = el<HTMLInputElement>("ckMBanhoQuente");
const ckFrioExtremidade = el<HTMLInputElement>("ckFrioExtremidade");
const ckCalorExtremidade = el<HTMLInputElement>("ckCalorExtremidade");
const ckCalorPeito = el<HTMLInputElement>("ckCalorPeito");
const ckCalorAlto = el<HTMLInputElement>("ckCalorAlto");

const ckSonoBom = el<HTMLInputElement>("ckSonoBom");
const ckInsoniaInicial = el<HTMLInputElement>("ckInsoniaInicial");
const ckInsoniaTerminal = el<HTMLInputElement>("ckInsoniaTerminal");
const ckInsoniaIntermitente = el<HTMLInputElement>("ckInsoniaIntermitente");
const txtHorasSono = el<HTMLInputElement>("txtHorasSono");
const txtSonho = el<HTMLInputElement>("txtSonho");
const txtTipoSonho = el<HTMLInputElement>("txtTipoSonho");

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
  el<HTMLInputElement>("ckBranca"), // name="ckUrina"
  el<HTMLInputElement>("ckAmarela"), // name="ckUrina"
  el<HTMLInputElement>("ckAmarelaEscura"), // name="ckUrina"
  el<HTMLInputElement>("ckPouca"), // name="ckUrina"
  el<HTMLInputElement>("ckAbundante"), // name="ckUrina"
  el<HTMLInputElement>("ckUrinaOdorForte"), // name="ckUrina"
  el<HTMLInputElement>("ckUrinaSemOdor"), // name="ckUrina"
  el<HTMLInputElement>("ckCistiteFrequente"), // name="ckUrina"
  el<HTMLInputElement>("ckEspumosa") // name="ckUrina"
].filter(Boolean) as HTMLInputElement[];

const circulacaoChecks = byName("ckCirculacao");
const sudoreseChecks = byName("ckSudorese");

const txtMenarca = el<HTMLInputElement>("txtMenarca");
const txtNumeroGestacoes = el<HTMLInputElement>("txtNumeroGestacoes");
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

const txtHobbies = el<HTMLInputElement>("txtHobbies");
const txtAtividadeFisica = el<HTMLInputElement>("txtAtividadeFisica");
const txtAtividadeCultural = el<HTMLInputElement>("txtAtividadeCultural");
const txtOrientacoesGerais = el<HTMLInputElement>("txtOrientacoesGerais");
const linkSair = document.querySelector<HTMLAnchorElement>(".sair a");

export interface AnamneseData {
  dataAtendimento: string;
  nome: string;
  dataNascimento: string;
  idade: string;
  genero: string;
  cor: string;
  telefone: string;
  email: string;
  estadoCivil: string;
  naturalidade: string;
  nacionalidade: string;
  endereco: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  profissao: string;
  filhos: string;
  queixaPrincipal: string;
  historiaDoenca: string;
  historiaPatologia: string;
  procedimentoCirurgico: string;
  historiaFamiliar: string;
  historiaSocial: string;
  altura: string;
  peso: string;
  pressaoArterial: string;
  tratamentoAtual: string;
  medicamento: string;
  examesFisicos: string[];
  disposicaoGeral: string[];
  observacoes: string[];
  sensibilidadeTermica: string[];
  sono: string[];
  horasSono: string;
  sonhos: { costumaTer: string; tipos: string };
  alimentacao: string[];
  sede: string[];
  paladar: string[];
  dores: string[];
  temperamento: string[];
  acuidadeAuditiva: string[];
  acuidadeVisual: string[];
  olfato: string[];
  respiracao: string[];
  digestao: string[];
  evacuacao: string[];
  urina: string[];
  circulacao: string[];
  sudorese: string[];
  apReprodutorFeminino: {
    menarca: string;
    numeroGestacoes: string;
    libido: string[];
    menstruacao: string[];
  };
  apReprodutorMasculino: string[];
  faneros: string[];
  intelecto: string[];
  relacoesFamiliares: string[];
  relacaoCasal: string[];
  relacaoSexual: string[];
  situacaoEconomica: string[];
  relacoesSociais: string[];
  hobbies: string;
  atividadeFisica: string;
  atividadeCultural: string;
  observacaoGeral: string[];
  orientacoesGerais: string;
}

export function coletarDadosFormulario(): AnamneseData {
  return {
    dataAtendimento: txtDataAtendimento?.value || "",
    nome: txtNome?.value || "",
    dataNascimento: txtDataNascimento?.value || "",
    idade: txtIdade?.value || "",
    genero: slGenero?.value || "",
    cor: txtCor?.value || "",
    telefone: txtTelefone?.value || "",
    email: txtEmail?.value || "",
    estadoCivil: txtEstadoCivil?.value || "",
    naturalidade: txtNaturalidade?.value || "",
    nacionalidade: txtNacionalidade?.value || "",
    endereco: txtEndereco?.value || "",
    complemento: txtComplemento?.value || "",
    bairro: txtBairro?.value || "",
    cidade: txtCidade?.value || "",
    estado: txtEstado?.value || "",
    profissao: txtProfissao?.value || "",
    filhos: txtFilhos?.value || "",
    queixaPrincipal: txtQueixaPrincipal?.value || "",
    historiaDoenca: txtHistoriaDoenca?.value || "",
    historiaPatologia: txtHistoriaPatologia?.value || "",
    procedimentoCirurgico: txtProcedimentoCirurgico?.value || "",
    historiaFamiliar: txtHistoriaFamiliar?.value || "",
    historiaSocial: txtHistoriaSocial?.value || "",
    altura: txtAltura?.value || "",
    peso: txtPeso?.value || "",
    pressaoArterial: txtPressaoArterial?.value || "",
    tratamentoAtual: txtTratamentoAtual?.value || "",
    medicamento: txtMedicamento?.value || "",
    examesFisicos: txtExamesFisicosList.map(i => i.value),
    disposicaoGeral: checkedValues(disposicaoGeralChecks),
    observacoes: txtObservacoesList.map(i => i.value),
    sensibilidadeTermica: [
      ckSenteFrio?.checked ? ckSenteFrio.value || "senteFrio" : null,
      ckSenteCalor?.checked ? ckSenteCalor.value || "senteCalor" : null,
      ckMBanhoFrio?.checked ? ckMBanhoFrio.value || "banhoFrio" : null,
      ckMBanhoQuente?.checked ? ckMBanhoQuente.value || "banhoQuente" : null,
      ckFrioExtremidade?.checked ? ckFrioExtremidade.value || "frioExtremidade" : null,
      ckCalorExtremidade?.checked ? ckCalorExtremidade.value || "calorExtremidade" : null,
      ckCalorPeito?.checked ? ckCalorPeito.value || "calorPeito" : null,
      ckCalorAlto?.checked ? ckCalorAlto.value || "calorAlto" : null
    ].filter(Boolean) as string[],
    sono: [
      ckSonoBom?.checked ? ckSonoBom.value || "bom" : null,
      ckInsoniaInicial?.checked ? ckInsoniaInicial.value || "insoniaInicial" : null,
      ckInsoniaTerminal?.checked ? ckInsoniaTerminal.value || "insoniaTerminal" : null,
      ckInsoniaIntermitente?.checked ? ckInsoniaIntermitente.value || "insoniaIntermitente" : null
    ].filter(Boolean) as string[],
    horasSono: txtHorasSono?.value || "",
    sonhos: { costumaTer: txtSonho?.value || "", tipos: txtTipoSonho?.value || "" },
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
      menarca: txtMenarca?.value || "",
      numeroGestacoes: txtNumeroGestacoes?.value || "",
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
    hobbies: txtHobbies?.value || "",
    atividadeFisica: txtAtividadeFisica?.value || "",
    atividadeCultural: txtAtividadeCultural?.value || "",
    observacaoGeral: txtObservacoesList.map(i => i.value),
    orientacoesGerais: txtOrientacoesGerais?.value || ""
  };
}

function validar(data: AnamneseData) {
  const erros: string[] = [];

  // Mapeia o nome da chave do objeto para um nome de campo amigável
  const nomesAmigaveis: { [key: string]: string } = {
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
    if (!data[campo as keyof AnamneseData] || String(data[campo as keyof AnamneseData]).trim() === "") {
      erros.push(`O campo "${nomesAmigaveis[campo]}" é obrigatório.`);
    }
  }

  return erros;
}

export function salvarFormulario(): boolean {
  const dados = coletarDadosFormulario();
  const erros = validar(dados);
  if (erros.length) {
    const texto = "Erros: " + erros.join(" | ");
    if (divMensagem) divMensagem.textContent = texto;
    console.warn(texto);
    return false;
  }
  console.log("Formulário OK. Dados:", dados);
  if (divMensagem) divMensagem.textContent = "Formulário cadastrado com sucesso.";
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
# Auditoria da página oficial do LGE/IPT (Etapa A)

Data da auditoria: 21/10/2026
Página: https://ipt.br/laboratorio-de-usos-finais-e-gestao-de-energia-2/
Última modificação declarada nos metadados: 26/06/2026

## 0. Limitações desta auditoria (leia primeiro)

O método de acesso foi a leitura do conteúdo da página convertido em texto/markdown. O shell do ambiente não tem acesso à rede (egress desabilitado), portanto **não foi possível**:

- Ler o DOM renderizado, os estilos computados ou os CSS carregados.
- Baixar imagens, fontes ou folhas de estilo.
- Tirar capturas de tela da referência.
- Testar comportamento responsivo, hover, foco ou o menu em dispositivos reais.

Consequência: **tipografia, paleta de cores, espaçamentos, larguras, breakpoints e animações estão marcados como NÃO CONFIRMADOS** abaixo. Nenhum valor foi estimado ou inventado. Para a reconstrução fiel, é preciso um destes insumos (ver seção 8).

## 1. Stack inferida (a partir dos metadados)

| Item | Evidência | Confiança |
|---|---|---|
| WordPress | caminhos `/wp-content/uploads/` | Alta |
| Site Kit by Google 1.190.0 | meta generator | Alta |
| Tema / page builder (Elementor, Divi etc.) | não identificado | Não confirmado |
| Idioma | `pt_BR` | Alta |
| Viewport | `width=device-width, initial-scale=1, shrink-to-fit=no` | Alta (sugere Bootstrap) |

## 2. Estrutura da página, na ordem em que aparece

1. **Cabeçalho institucional**
   - Logotipo IPT (versão colorida para fundo escuro, arquivo `IPT_-COR-BCO-1.png`, indica fundo escuro no cabeçalho).
   - Logo do Governo de SP (`GOV_logo3branco.png`).
   - Seletor de idioma (bandeiras BR/EUA em SVG, links `#`, ou seja, sem destino real observável).
   - Menu principal com submenus (ver seção 3).
   - Há duas cópias do menu e do seletor de idioma no HTML, o que sugere versões desktop e mobile.
2. **Breadcrumb/etiqueta**: "Laboratórios".
3. **Título H1**: "Laboratório de Usos Finais e Gestão de Energia (LGE)" e "Publicado em 05/09/2023".
4. **Imagem de capa**: `2023/09/LGE_foto-capa-scaled.jpg` (também og:image, 2560x1700).
5. **H2** "Ensaios elétricos, EMC e tecnologias do futuro" com 4 parágrafos longos de apresentação (missão, áreas, P&D em fotovoltaica, eletromobilidade e hidrogênio, relacionamento com setor público e privado, visão de futuro).
6. **H4 "Contato"** do laboratório: foto do responsável (Antonio Francisco Gentil Ferreira Junior), e-mails agentil@ipt.br e lge@ipt.br.
7. **H3 "Áreas de atuação"** com lista de 4 sub-áreas.
8. **Bloco expansível 1 (marcador "+")**: Compatibilidade Eletromagnética (EMC). Acreditação, infraestrutura, normas, galeria de 3 imagens, contato (Marcelo Sanches Miguel Dias).
9. **Bloco expansível 2**: Segurança elétrica de equipamentos e materiais elétricos. Infraestrutura, ensaios e normas, 2 fotos com contatos separados (equipamentos e materiais).
10. **Bloco expansível 3**: Ensaios em equipamentos ópticos. Inclui subseção de calibração (RBC-377), infraestrutura, ensaios, calibrações, 2 contatos (Ensaios: Oswaldo Sanchez Junior; Calibração: Raul Leone Filho).
11. **Compartilhar**: LinkedIn, Facebook e um link `#` (provavelmente copiar link).
12. **Rodapé**: logos IPT e GOV-SP (link SIC), colunas "Aqui tem IPT" (redes sociais), Principais, Institucional, Soluções e serviços, Acervo; newsletter ("Me inscrever"); logos MAM e IASMIN; links SIC SP, Política de Privacidade, Termos de Uso; copyright 2026.

Observação: que os blocos 8 a 10 são expansíveis é **inferido** pelo "+" no título e pela ordem do conteúdo. O comportamento (accordion, um aberto por vez, estado inicial) não foi observado.

## 3. Navegação (links verificados no conteúdo)

Principal: Quem Somos, IPT Open, Unidades (8 itens), Núcleos (4), Laboratórios, Soluções, Educação (externo, sapiens.ipt.br), Contato (Fale Conosco, Ouvidoria), Notícias, Mais (megamenu com 4 grupos: Principais, Institucional, Soluções e Serviços, Acervo).

Os URLs completos estão no HTML de origem e serão extraídos para `src/data/navigation.js` na Etapa C. Atenção: alguns links externos contêm parâmetros de rastreamento (`_gl`, `_ga`) que não devem ser copiados.

## 4. Inventário de componentes

| Componente | Ocorrência | Reutilizável |
|---|---|---|
| Cabeçalho com logos + menu + seletor de idioma | 1 | Sim |
| Megamenu "Mais" com colunas | 1 | Sim |
| Hero com imagem de capa | 1 | Sim |
| Bloco de texto institucional | 1 | Sim |
| Cartão de contato (foto, nome, e-mail) | 6 (todos os contatos) | Sim |
| Lista de áreas de atuação | 1 | Sim |
| Accordion de área técnica (título, texto, infraestrutura, normas, galeria, contatos) | 3 | Sim, é o componente central |
| Listas "Infraestrutura / Normas / Ensaios / Calibrações" | 9+ | Sim |
| Galeria de imagens | 1 (3 imagens) | Sim |
| Botões de compartilhamento | 1 | Sim |
| Rodapé em colunas + newsletter + logos parceiros | 1 | Sim |

## 5. Conteúdo técnico a preservar integralmente

Acreditações citadas: Inmetro **CGCRE-045** (EMC, segurança elétrica, óptica) e **RBC-377** (calibração óptica); reconhecimento Ilac (EMC).

Todas as normas listadas (IEC 61547, IEC 60601-1-2, IEC 60335-1, CISPR 22/11/15, IEC 61000-3-2/3-3/4-2 a 4-13, NBR IEC 60601-1, ASTM D149, F150, D150, D257, IEC 61340-4-1, IEC 62631-2, IEC 60112, ASTM 808-23/809-21/810-20, NBR 15292:13, NBR 16820:2020, CIE 121/83/13:3) serão copiadas literalmente, sem correção.

### Inconsistências encontradas na página oficial (registrar, não corrigir sem validação)

- "Camara semi-aencoica" (grafia incorreta de "câmara semianecoica").
- Marcadores de hífen soltos dentro de itens ("-IEC 60601-1-2", "-Emissão radiada...", "IEC 61000-3-3" sem fechar o parêntese).
- "Telefone:" seguido de endereços de e-mail em todos os contatos; nenhum número de telefone é exibido.
- A lista "Áreas de atuação" cita "Energias – hidrogênio, solar, eólico", mas não há bloco expansível correspondente.
- "Segurança elétrica de materiais" lista Marcelo Sanches Miguel Dias como contato, enquanto o arquivo da foto sugere outra pessoa (Kleber Jesus de Oliveira). **Isso não deve ser assumido; requer validação.**
- A imagem `2023/09/Image-2.png` aparece em dois contextos diferentes (galeria EMC e contato de calibração), possivelmente um placeholder.
- "Cadeia produtivo" (concordância) e "Telefone" no contato do responsável.

## 6. Padrões visuais

| Aspecto | Status |
|---|---|
| Tipografia (famílias, tamanhos, pesos) | NÃO CONFIRMADO |
| Paleta de cores | NÃO CONFIRMADO (apenas: logotipo claro sugere cabeçalho/rodapé escuros) |
| Espaçamentos e larguras do container | NÃO CONFIRMADO |
| Breakpoints responsivos | NÃO CONFIRMADO (viewport sugere Bootstrap, não verificado) |
| Estados hover/foco/ativo | NÃO CONFIRMADO |
| Animação do accordion | NÃO CONFIRMADO |
| Proporções de imagens | Parcial: capa 2560x1700 (og:image); demais só por nome de arquivo (ex.: 1024x683, 1024x1024, 914x1024, 1024x957) |

## 7. Imagens e recursos identificados (URLs presentes no conteúdo)

Todos em `https://ipt.br/wp-content/uploads/`:

- `2026/10/IPT_-COR-BCO-1.png` (logo IPT)
- `2026/10/GOV_logo3branco.png` (logo Governo SP)
- `2026/07/bra.svg`, `2026/07/eua.svg` (bandeiras)
- `2023/09/LGE_foto-capa-scaled.jpg` (capa)
- `2023/09/Antonio-Francisco-Gentil-1024x683.jpg`
- `2026/06/LGECamara-Anecoica-1-edited.png`
- `2026/06/LGE_foto-capa-2-edited-scaled.jpg`
- `2023/09/Image-2.png`
- `2023/09/LGE_Eduardo-Berruezo-scaled-e1781214528388-1024x1024.jpg`
- `2026/06/Kleber-Jesus-de-Oliveira-scaled-e1781214589488-1024x957.jpg`
- `2023/09/LGE_Oswaldo-Sanches-scaled-e1781269252465-914x1024.jpg`
- `2026/10/MAM.png`, `2026/10/IASMIN.png` (logos parceiros)
- `2025/07/faviconV2.png`

Status de download: **nenhum recurso foi baixado** (sem rede no shell). Na Etapa C, as imagens serão referenciadas pelo URL original (hotlink) como solução temporária de desenvolvimento ou copiadas localmente se você as fornecer. Fotos de pessoas e logos têm uso institucional; manter créditos e não redistribuir.

## 8. O que preciso para a reconstrução fiel

Uma destas opções (em ordem de preferência):

1. Um arquivo "Salvar como... página completa" (HTML + pasta de arquivos) da página oficial, feito no seu navegador.
2. Os arquivos CSS do tema (aba Network, filtrar por CSS) e a lista de fontes carregadas.
3. Capturas de tela da página inteira em desktop (1440 px) e celular (390 px), mais um screenshot do accordion aberto e do menu aberto.
4. Liberar a rede do shell (configurações de rede do ambiente) para que eu inspecione e baixe os recursos.

## 9. Observações sobre o protótipo secundário

Conteúdo acessado via leitura de texto. Ideias aproveitáveis como **estrutura de comunicação** (sem importar identidade visual): cartões de competências, separação por áreas, faixa de mercados atendidos, bloco de normas, bloco de acreditação com selos, chamada de contato final.

Atenção: o protótipo contém dados **que não constam na página oficial** e que não podem ser usados sem validação: telefone (11) 3767-4000, endereço da sede, e-mail kleberjo@ipt.br, estatísticas (126 anos, 100% de atendimento no prazo, nota 9,4, mais de 5.000 clientes), norma IEC 60255, menções a Petrobras, e texto "durante a feira" (específico da apresentação anterior). Nada disso entrará na reconstrução.

## 10. Pontos não confirmados

- Tipografia, cores, espaçamentos, breakpoints, estados de interação.
- Comportamento do accordion e do megamenu.
- Quem é o responsável por segurança elétrica de materiais.
- Destino do botão de compartilhar `#`.
- Se a página usa JavaScript para carregar conteúdo adicional não visível na leitura textual.

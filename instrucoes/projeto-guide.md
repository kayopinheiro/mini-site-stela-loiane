# Stela Loiane Studio — Mini Site

## Sobre o projeto
Mini site institucional mobile-first para Stela Loiane Studio, composto por duas páginas: Home e Catálogo. O objetivo é apresentar o estúdio e exibir o portfólio/catálogo de serviços de forma elegante e responsiva.

## Skill obrigatória
**Sempre invocar a skill `frontend-design` antes de implementar qualquer página ou componente visual.**

## Figma
URL do design: https://www.figma.com/design/e10P8iODn7GWwji9cfxZns/Stela-Loiane-Studio---Landing-Page?node-id=4088-1299&t=Ns3xVw4YtHoKZsQz-4

Para extrair dados do Figma via MCP:
- Tokens/variáveis: `Get design variables from this Figma file: https://www.figma.com/design/e10P8iODn7GWwji9cfxZns/Stela-Loiane-Studio---Landing-Page?node-id=4088-1299&t=Ns3xVw4YtHoKZsQz-4`
- Componentes: `Get the [Nome] component from: https://www.figma.com/design/e10P8iODn7GWwji9cfxZns/Stela-Loiane-Studio---Landing-Page?node-id=4088-1299&t=Ns3xVw4YtHoKZsQz-4`
- Status: `Check Figma status`

## Estrutura de arquivos
```
stela-loiane/
├── instrucoes/
│   └── projeto-guide.md  ← este arquivo
├── assets/               ← exportar do Figma (imagens, logos, ícones)
├── screenshots/          ← prints das seções por página (referência visual)
│   ├── home/
│   └── catalogo/
├── CLAUDE.md             ← @import instrucoes/projeto-guide.md
├── index.html            ← Página Home
├── catalogo.html         ← Página Catálogo
├── style-guide.html      ← Documentação de componentes
├── css/
│   ├── tokens.css        ← Design tokens (cores, tipografia, espaçamentos)
│   ├── base.css          ← Reset e estilos globais
│   ├── components.css    ← Componentes reutilizáveis
│   └── pages/
│       ├── home.css
│       └── catalogo.css
└── js/
    └── main.js           ← Scripts e interações
```

## Fonte de verdade

| O quê | Onde buscar |
|---|---|
| Layout, espaçamentos, hierarquia | Figma → URL acima |
| Cores (hex exatos) | instrucoes/projeto-guide.md (seção Tokens) |
| Tipografia (tamanhos, pesos, line-heights) | instrucoes/projeto-guide.md (seção Tokens) |
| Logos e imagens | pasta assets/ |
| Referência visual por seção | pasta screenshots/ |

## Design System

### Cores

#### Brand (cores principais)
| Token CSS | Nome | Hex |
|---|---|---|
| --color-black-hole | Black Hole | #020202 |
| --color-advantageous | Advantageous | #207068 |
| --color-turquoise-chalk | Turquoise Chalk | #68E8D9 |
| --color-mint-condition | Mint Condition | #D9F9F6 |
| --color-white | White | #FFFFFF |

#### Primárias
| Token CSS | Nome | Hex |
|---|---|---|
| --color-primary | Black Hole | #020202 |
| --color-primary-accent | Turquoise Chalk | #68E8D9 |

#### Secundárias
| Token CSS | Nome | Hex |
|---|---|---|
| --color-secondary | Advantageous | #207068 |
| --color-secondary-light | Mint Condition | #D9F9F6 |

#### Paleta Advantageous (verde escuro)
| Step | Hex |
|---|---|
| 50 | #E9F1F0 |
| 100 | #BAD3D0 |
| 200 | #98BDBA |
| 300 | #6A9F9A |
| 400 | #408086 |
| **500** | **#207068** |
| 600 | #1D655F |
| 700 | #17504A |
| 800 | #123E38 |
| 900 | #002F2C |

#### Paleta Turquoise Chalk (turquesa)
| Step | Hex |
|---|---|
| 50 | #F0FDFB |
| 100 | #D0F7F3 |
| 200 | #B9F4EE |
| 300 | #98EEE6 |
| 400 | #85EBE1 |
| **500** | **#68E8D9** |
| 600 | #5DD1C5 |
| 700 | #48A39A |
| 800 | #387F77 |
| 900 | #29815B |

#### Paleta Mint Condition (verde claro)
| Step | Hex |
|---|---|
| 50 | #F8FEFE |
| 100 | #F3FDFC |
| 200 | #EEFCFB |
| 300 | #E6FBF9 |
| 400 | #E1FAF8 |
| **500** | **#D9F9F6** |
| 600 | #C5E3E0 |
| 700 | #9AB1AF |
| 800 | #778B87 |
| 900 | #388987 |

#### Paleta Gray
| Step | Hex |
|---|---|
| 50 | #F7F7F7 |
| 100 | #E8E8E8 |
| 200 | #CBCBCB |
| 300 | #A3A3A3 |
| 400 | #737373 |
| 500 | #525252 |
| 600 | #363636 |
| 700 | #242424 |
| 800 | #141414 |
| 900 | #020202 |

---

### Tipografia

#### Headings — Fraunces (Google Fonts), Regular
| Estilo | Tamanho | Peso | Line-height |
|---|---|---|---|
| Display 1 | 96px | Regular | 110% |
| Display 2 | 80px | Regular | 110% |
| Heading 1 | 64px | Regular | 115% |
| Heading 2 | 48px | Regular | 120% |
| Heading 3 | 40px | Regular | 120% |
| Heading 4 | 32px | Regular | 130% |
| Heading 5 | 24px | Regular | 130% |
| Heading 6 | 20px | Regular | 140% |

#### Body — DM Sans (Google Fonts)
| Estilo | Tamanho | Peso | Line-height |
|---|---|---|---|
| Large | 20px | Regular | 150% |
| Medium | 18px | Regular | 150% |
| Regular | 16px | Regular | 160% |
| Small | 14px | Regular | 160% |
| Tiny | 12px | Regular | 160% |
| Overline | 14px | SemiBold | 140% |

**Fontes no Google Fonts:**
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400&family=DM+Sans:wght@400;600&display=swap" rel="stylesheet">
```

---

### Grid (Mobile First)
- **Mobile 375px:** 4 colunas · margin 24px · gutter 16px
- **Desktop 1440px:** 12 colunas · column-width 80px · gutter 24px

### Espaçamentos
- Padding horizontal das seções (mobile): 24px
- Padding horizontal das seções (desktop): 80px
- Gutter entre colunas (mobile): 16px
- Gutter entre colunas (desktop): 24px
- Padding vertical das seções: [extrair do Figma]
- Gap entre cards: [extrair do Figma]

## Convenções de classes

- **Seção:** `.section` + `.section--dark` / `.section--light`
- **Botão:** `.btn` + `.btn--primary` / `.btn--secondary` + `.btn--sm` / `.btn--lg`
- **Card:** `.card` + `.card--[variante]`
- **Grid:** `.grid` + `.grid-[cols]`
- **Scroll reveal:** `data-reveal` + `data-reveal="left|right|scale"`

## Páginas
| Página | Status | Seções |
|---|---|---|
| style-guide.html | ⬜ Pendente | Documentação de componentes e tokens |
| index.html (Home) | ⬜ Pendente | [extrair seções do Figma] |
| catalogo.html (Catálogo) | ⬜ Pendente | [extrair seções do Figma] |

## Assets disponíveis
> ⚠️ Preencher após exportar do Figma.

### Logos
- `assets/logo.svg` — versão principal
- `assets/logo-white.svg` — versão clara (para fundos escuros)

### Ícones
- `assets/icon_*.svg`

### Imagens
- `assets/[nome].png` — [descrição]

## Regras absolutas
- Não inventar cores — usar apenas os tokens definidos acima
- Não usar outra fonte além da definida
- Não melhorar o design — reproduzir o Figma com fidelidade
- Todo elemento clicável deve ter estado hover, focus-visible e active
- Não adicionar seções que não existam no design
- **Mobile First** — sempre escrever CSS mobile primeiro, depois media queries para desktop

## Fluxo de desenvolvimento por página
1. Invocar a skill `frontend-design`
2. Enviar os screenshots da página como referência visual
3. **Apresentar plano de ação da página** — listar todas as seções que serão criadas, ordem de execução e componentes envolvidos. Aguardar aprovação do usuário antes de escrever qualquer código.
4. Após aprovação: criar a página (começar pelo Style Guide)
5. Após cada seção: verificar no preview e comparar com o screenshot
6. Corrigir diferenças antes de avançar para a próxima seção
7. Repetir para cada página seguinte

@instrucoes/projeto-guide.md

# Regras de Desenvolvimento Frontend

## Sempre Fazer Primeiro
- **Invocar a skill `frontend-design`** antes de escrever qualquer código frontend, toda sessão, sem exceções.

## Imagens de Referência
- Se uma imagem de referência for fornecida: reproduzir layout, espaçamento, tipografia e cores com exatidão. Usar placeholders (`https://placehold.co/`). Não melhorar nem adicionar ao design.
- Se não houver referência: seguir os tokens e componentes definidos em `instrucoes/projeto-guide.md`.
- Tirar screenshot do output, comparar com a referência, corrigir diferenças, tirar novo screenshot. Fazer no mínimo 2 rodadas de comparação. Parar apenas quando não houver diferenças visíveis ou o usuário confirmar.

## Servidor Local
- **Sempre servir em localhost** — nunca tirar screenshot de URL `file:///`.
- Iniciar o servidor: `npx serve . -p 3000`
- Iniciar em background antes de qualquer screenshot.
- Se o servidor já estiver rodando, não iniciar uma segunda instância.

## Fluxo de Screenshot
- Sempre tirar screenshot via localhost: `http://localhost:3000`
- Após tirar screenshot, analisar a imagem e comparar com a referência.
- Ser específico nas comparações: "heading está em 32px mas referência mostra ~24px", "gap do card está 16px mas deveria ser 24px"
- Verificar: espaçamento/padding, tamanho/peso/line-height da fonte, cores (hex exato), alinhamento, border-radius, sombras, tamanho das imagens.

## Stack de Desenvolvimento
- **Vanilla HTML + CSS + JavaScript** — sem frameworks.
- **Mobile First** — CSS mobile primeiro, media queries para tablet (768px) e desktop (1280px).
- CSS organizado em arquivos separados: `css/tokens.css`, `css/base.css`, `css/components.css`, `css/pages/*.css`
- Fonte via Google Fonts conforme definido no projeto-guide.md.
- Imagens placeholder: `https://placehold.co/WIDTHxHEIGHT`
- Nunca colocar CSS inline ou dentro de `<style>` no HTML — sempre em arquivo externo.

## Assets do Projeto
- Sempre verificar a pasta `assets/` antes de começar.
- Se assets existirem, usá-los. Não usar placeholders onde há assets reais.
- Cores: usar apenas os tokens definidos em `css/tokens.css`. Nunca inventar cores.

## Guardrails Anti-Genérico
- **Cores:** Usar exclusivamente os tokens do design system do projeto. Nunca usar paletas padrão de frameworks.
- **Sombras:** Nunca usar sombra flat. Usar sombras em camadas, com tint de cor e baixa opacidade.
- **Tipografia:** Aplicar tracking negativo em headings grandes, line-height generoso no body. Nunca misturar fontes não definidas no projeto.
- **Gradientes:** Usar apenas os gradientes definidos no design system do projeto.
- **Animações:** Animar apenas `transform` e `opacity`. Nunca `transition-all`. Usar easing suave.
- **Estados interativos:** Todo elemento clicável precisa de estados hover, focus-visible e active. Sem exceções.
- **Espaçamento:** Usar os tokens de espaçamento definidos em `css/tokens.css`. Não usar valores aleatórios.
- **Profundidade:** Superfícies devem ter sistema de camadas (base → elevado → flutuante).

## Regras Absolutas
- Não adicionar seções, features ou conteúdo que não esteja na referência
- Não "melhorar" um design de referência — reproduzir com fidelidade
- Não parar após um único screenshot
- Não usar `transition-all`
- HTML e CSS sempre em arquivos separados
- Não inventar cores fora dos tokens
- **Mobile First** — nunca escrever CSS desktop-first

## Fluxo de Desenvolvimento por Página
1. Invocar a skill `frontend-design`
2. Enviar screenshots da página como referência visual
3. **Apresentar plano de ação** — listar todas as seções, ordem de execução e componentes. Aguardar aprovação antes de escrever código.
4. Após aprovação: criar a página (começar sempre pelo Style Guide)
5. Após cada seção: tirar screenshot, comparar com referência, corrigir diferenças
6. Repetir para cada página

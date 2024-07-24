Este é um projeto [Next.js](https://nextjs.org/) iniciado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Começando

Primeiro, execute o servidor de desenvolvimento:

```bash
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

Você pode começar a editar a página modificando `pages/index.tsx`. A página atualiza automaticamente conforme você edita o arquivo.

Rotas de API podem ser acessadas em [http://localhost:3000/api/hello](http://localhost:3000/api/hello). Este endpoint pode ser editado em `pages/api/hello.ts`.

## Bibliotecas Utilizadas

Este projeto requer Node versão superior a 20 e utiliza exclusivamente o gerenciador de pacotes `pnpm` para instalação de dependências. As seguintes bibliotecas são utilizadas:

- **next**: Framework para React que permite funcionalidades como SSR (Server Side Rendering) e SSG (Static Site Generation).
- **react**: Biblioteca JavaScript para criar interfaces de usuário.
- **react-dom**: Pacote que permite o uso do React no DOM da web.
- **eslint**: Ferramenta de análise de código para identificar padrões problemáticos encontrados no código JavaScript.
- **prettier**: Formatador de código opinativo que suporta várias linguagens e integra-se com a maioria dos editores.
- **tailwindcss**: Framework CSS de utilidade-primeira para criar rapidamente designs customizados.
- **typescript**: Superset de JavaScript que adiciona tipagem estática.
- **vitest**: Framework de teste para Vue.js, que também pode ser usado em projetos JavaScript/TypeScript gerais.
- **eslint-plugin-vitest-globals**: Plugin ESLint para globals do Vitest.
- **husky**: Ferramenta para gerenciar ganchos Git.
- **jsdom**: Implementação de JavaScript puro do DOM e do HTML.
- **lint-staged**: Ferramenta para executar comandos em arquivos em staged.
- **plop**: Gerador de código.
- **postcss**: Ferramenta para transformar CSS com plugins JavaScript.
- **prettier-plugin-tailwindcss**: Plugin do Prettier para formatar código com Tailwind CSS.
- **vite-tsconfig-paths**: Plugin do Vite para suportar caminhos do tsconfig.

## Aprenda Mais

Para aprender mais sobre Next.js, veja os seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - aprenda sobre os recursos e API do Next.js.
- [Tutorial Next.js](https://nextjs.org/learn) - um tutorial interativo de Next.js.

Você pode conferir [o repositório GitHub do Next.js](https://github.com/vercel/next.js/) - seu feedback e contribuições são bem-vindos!

## Deploy no Vercel

A maneira mais fácil de fazer o deploy do seu app Next.js é usando a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Confira nossa [documentação de deploy do Next.js](https://nextjs.org/docs/deployment) para mais detalhes.

## Como criar um novo componente

Para criar um novo componente, execute o comando:

```bash
pnpm generate <nome-do-componente>
```

Ele irá criar um novo componente na pasta `components` com o nome especificado com três arquivos: `index.tsx`, `.<nome-do-componente>.stories.tsx` e `<nome-do-componente>.test.tsx`.

Então assim você pode começar a desenvolver o seu novo componente.

## Quando commitar o código o que ira acontecer?

Quando você commitar o código, o Husky irá rodar o Lint-Staged que irá rodar o ESLint e o Prettier para verificar se o código está correto e formatado corretamente. Então você precisa garantir que o código está correto e formatado corretamente antes de commitar. Caso esteja em duvida rode o comando:

```bash
pnpm lint
```

Ele irá rodar o ESLint e o Prettier para verificar se o código está correto e formatado corretamente, resolva os problemas que aparecerem e então commitar o código.

## O que é ESLint e Prettier?

ESLint é uma ferramenta de análise de código estática para identificar padrões problemáticos encontrados no código JavaScript. Ele é usado para encontrar e corrigir problemas no código JavaScript.

Prettier é um formatador de código opinativo que suporta várias linguagens e integra-se com a maioria dos editores. Ele é usado para formatar o código JavaScript.

## O que é Vitest?

Vitest é um framework de teste que também pode ser usado em projetos JavaScript/TypeScript gerais. Ele é uma alternativa ao Jest e ao Mocha.

## Como rodar os testes?

Para rodar os testes, execute o comando:

```bash
pnpm test
```

Ele irá rodar os testes e mostrar o resultado no terminal.

## Como rodar os testes com coverage?

Para rodar os testes com coverage, execute o comando:

```bash
pnpm test:coverage
```

Ele irá rodar os testes com coverage e mostrar o resultado no terminal.

## O que é o storybook?

O Storybook é uma ferramenta de desenvolvimento de componentes para React, Vue e Angular. Ele permite que você navegue por uma biblioteca de componentes, visualize diferentes estados de cada componente e interaja com eles.

Vamos utiliza-lo porquê ele nos permite visualizar os componentes de forma isolada, o que facilita o desenvolvimento e a manutenção dos componentes.

## Como rodar o storybook?

Para rodar o storybook, execute o comando:

```bash
pnpm storybook
```

Ele irá rodar o storybook e abrir no navegador.

## Como fazer o build do projeto?

Para fazer o build do projeto, execute o comando:

```bash
pnpm build
```

Ele irá fazer o build do projeto e gerar a pasta `build`.

## Como rodar o projeto em produção?

Para rodar o projeto em produção, execute o comando:

```bash
pnpm start
```

Ele irá rodar o projeto em produção.

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

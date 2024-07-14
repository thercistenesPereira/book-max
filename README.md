# Movies and Series Tracker

## Descrição
Um aplicativo de rastreamento de filmes e séries que permite aos usuários adicionar, visualizar e marcar filmes/séries como assistidos e favoritos. Ele também oferece ações rápidas para facilitar a navegação e interação com o conteúdo.

## Funcionalidades
- **Adicionar Novo Item:** Permite adicionar um novo filme ou série.
- **Marcar como Assistido:** Alternar o status de um filme ou série como assistido/não assistido.
- **Favoritos:** Exibir apenas os filmes/séries favoritos.
- **Contagem de Filmes/Séries:** Exibir a contagem total de filmes/séries, assistidos e favoritos.

## Tecnologias Utilizadas
- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
- **CSS:** Para estilização do aplicativo.

## Estrutura do Projeto
```bash
src/
├── components/
│   ├── form/
│   │   └── Add.tsx
│   ├── header/
│   │   ├── Header.tsx
│   │   ├── QuickActions.tsx
│   │   └── quickActions.css
│   └── screen-content/
│       └── ScreenContentCard.tsx
├── data/
│   └── movies.ts
├── App.css
├── App.tsx
└── index.tsx
```

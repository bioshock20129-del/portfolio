# Presentations Hero

Небольшое React + TypeScript приложение (Vite) с анимированным hero-блоком `PresentationsHero` на базе **Framer Motion**.

## Что внутри

- 3D-наклон карточки от движения мыши.
- Анимация стеков подложек.
- Анимированный глянец на основной карточке.
- Компонентные тесты на **Vitest** + **Testing Library**.

## Стек

- React 18
- TypeScript
- Vite
- Framer Motion
- Vitest + @testing-library/react + jsdom

## Быстрый старт

```bash
npm install
npm run dev
```

Приложение будет доступно в dev-режиме через Vite (обычно `http://localhost:5173`).

## Сборка

```bash
npm run build
npm run preview
```

## Тесты

```bash
npm test
```

Тесты находятся в `src/App.test.tsx`.

## Структура проекта

```text
.
├── index.html
├── package.json
├── src
│   ├── App.tsx
│   ├── App.test.tsx
│   ├── main.tsx
│   ├── setupTests.ts
│   └── styles.css
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

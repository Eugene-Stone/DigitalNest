# DigitalNest - Corporate Landing Page

Профессиональный корпоративный веб-сайт (landing page) для цифрового агентства, построенный на современном стеке React, TypeScript и Vite.

## 🚀 Особенности

- **React 19** - последняя версия с новыми хуками и оптимизациями
- **TypeScript** - полная типизация для надежности кода
- **React Router v7** - удобная навигация между страницами
- **Многоязычность** - поддержка английского и русского языков с Context API
- **JSON Server** - фейковый REST API для разработки
- **SCSS/Sass** - препроцессор для продвинутых стилей
- **Swiper** - карусели и слайдеры
- **React Hook Form** - управление формами
- **Lightbox** - галерея изображений
- **ESLint** - проверка кода
- **localStorage** - кеширование контента

## 📁 Структура проекта

```
src/
├── pages/           # Страницы (Home, Privacy, 404)
├── components/      # UI компоненты (Header, Footer, Form, и т.д.)
├── sections/        # Секции страниц (Hero, About, Services, Features, Projects, Workflow, Reviews, Contacts)
├── context/         # Context API (многоязычность)
├── hooks/           # Кастомные React хуки
├── api/             # API запросы (fetch обертка)
├── utils/           # Утилит-функции
├── assets/          # Изображения и медиа
├── styles/          # Глобальные стили SCSS
├── types.ts         # TypeScript типы
├── App.tsx          # Главный компонент
├── Layout.tsx       # Основной лейаут
├── router.tsx       # Конфиг маршрутов
└── main.tsx         # Entry point
```

## 🛠 Технологический стек

| Технология | Версия | Назначение |
|-----------|--------|-----------|
| React | 19.2.4 | Фреймворк |
| TypeScript | 6.0.3 | Типизация |
| Vite | 8.0.0 | Сборщик |
| React Router | 7.13.1 | Маршрутизация |
| Sass | 1.98.0 | Стили |
| Swiper | 12.1.2 | Слайдеры |
| React Hook Form | 7.71.2 | Формы |
| JSON Server | 1.0.0-beta.13 | Mock API |


## 🌍 Многоязычность

Проект поддерживает два языка: **English** и **Русский**

- Реализовано через **Context API** (`LanguageContext`)
- Выбранный язык сохраняется в `localStorage`
- Все контентные данные хранятся в двуязычном формате (`en`/`ru`)


## ✅ Практики, используемые в проекте

- ✔️ Типизированный TypeScript
- ✔️ Правильная структура папок
- ✔️ Context API для глобального состояния
- ✔️ Кеширование данных в localStorage
- ✔️ Обработка ошибок при загрузке данных
- ✔️ SEO-friendly (lang атрибут, meta теги)
- ✔️ Responsive дизайн (SCSS переменные)
- ✔️ Clean Code принципы

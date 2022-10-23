# Free Games App

This is an app that helps you to find and known about free games around the world.

## Table of Contents

- [Free Games App](#free-games-app)
  - [Table of Contents](#table-of-contents)
  - [Link](#link)
  - [Video](#video)
  - [App Features](#app-features)
  - [Stack Used](#stack-used)
    - [Main App's Stack](#main-apps-stack)
    - [Dev Apps' Stack](#dev-apps-stack)
  - [About Us (Kelompok 7)](#about-us-kelompok-7)
  - [LICENSE](#license)

## Link

[freegame.afif.dev](https://freegame.afif.dev/)

## Video

![Alt Text](https://raw.githubusercontent.com/bungambohlah/DTS4A-07-final/main/documentation/demo.gif)

## App Features

1. Authentication with Firebase (Login, Logout, Register, and Verify Email)
2. Main's Page: show list of games from [Freetogame API](https://www.freetogame.com/api-doc)
3. Detail's Page: new tab to the publisher game's website
4. Detail's Page: responsive modal for show images properly
5. Search and Filter (by platform) Games
6. Form validation
7. Toggle Light/Dark mode as user preferred
8. Responsive UI

## Stack Used

### Main App's Stack

1. React.js for User Frontend Library
2. Vite for modern frontend tooling
3. React Query (Tanstack) + Axios for fetching to the external API
4. Firebase Auth for main authentication
5. react-dark-mode-toggle-2 for UI Button to toggle mode
6. react-event-observer (pub/sub) for register event as publish and subscribe method
7. react-hook-form + yup resolvers for validate input of forms related
8. React Router for main web routing
9. react-toastify for toast message framework
10. Zustand for state management
11. Tailwind as CSS framework
12. Sass for better css
13. Flowbite for UI Component framework with tailwindcss

### Dev Apps' Stack

1. Vite for modern frontend building and as compiler
2. commitlint for better commit using conventional / global standard message
3. Typescript for transpiler of javascript with better types management
4. ESLint for linting of executed codes
5. Husky for better git management via hooks
6. Prettier for better format of saved codes

NOTE: PWA already supported

## About Us (Kelompok 7)

- Afif Abdillah Jusuf (1523649113101225)

  Hello there 👋🏻, my name is [Afif Abdillah Jusuf](https://github.com/bungambohlah) and I'm a software engineer.

  I'm currently working as a [Full Stack Developer](https://www.linkedin.com/in/afifjusuf/).

  Graduated from [Politeknik Elektronika Negeri Surabaya](https://pens.ac.id) as Associate Degree in Informatics Engineering.

  Nice to meet you.

  Visit my personal site at [afif.dev](https://afif.dev)

- Eko Priyatno (1523649113101384)

## LICENSE

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

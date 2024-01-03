<div style="display:flex; align-items: center">
  <h1 style="position:relative; top: -6px" >Covid Questionaire</h1>
</div>

---

Covid Questionaire - multi page form application with dynamic animations.

#

## Visit: 

https://covid-questionnaire-nikaakin.vercel.app/

### Table of Contents

- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Development](#development)
- [Project Structure](#project-structure)
- [Recources](#recources)

#

### Prerequisites

- *npm@9.5 and up*
- _nodejs@16 and up_

#

### Tech Stack

- [Reactjs@18.x](https://react.dev/) - The library for web and native user interfaces

- [Typescript](https://www.typescriptlang.org/) - TypeScript is JavaScript with syntax for types

- [Vite.js](https://vitejs.dev/) - Next Generation Frontend Tooling

- [React hook form](https://react-hook-form.com/) - Performant, flexible and extensible forms with easy-to-use validation.

- [React router](https://reactrouter.com/en/main) - Router for React

- [Tailwind](https://tailwindcss.com/) - Package for styling

#

### Getting Started

1\. First of all you need to clone repository from github:

```sh
git clone git@github.com:RedberryInternship/nika-cuckiridze-covid-questioanre.git
```

2\. Install dependencies

```sh
npm install
```

### Development

For running application locally use:

```sh
  npm run dev
```

#

### Project Structure

```bash
├─── public
|    |... assets
|    |    ├─── font
|    |    ├─── icons
├─── src
│   |... components
|   |    ├─── Icons
|   |    ├─── Layout
|   |    ├... shared
|   |    |    ├─── Input
|   |    |    ├─── RadioButton
|   |    |    ├─── TextArea
│   ├─── config
│   ├... context
|   |    ├─── areYouVaccinatedContext
|   |    ├─── covidPoliticsContext
|   |    ├─── covidStateContext
|   |    ├─── pageContext
|   |    ├─── personalInfoContext
│   ├─── helpers
│   ├─── hooks
│   │... pages
|   |    ├─── AreYouVaccinated
|   |    ├─── CovidPolitics
|   |    ├─── CovidState
|   |    ├─── LandingPage
|   |    ├─── PersonalInfo
|   |    ├─── ThankYou
|   - index.css
|   - main.tsx
|   - vite-env.d.ts
- .eslintrc.json
- index.html
- .prettierrc.json
- postcss.config.js
- README.md
- tailwind.config.js
- tsconfig.json
- tsconfig.node.json
- vite.config.json
- package.json
```

Project structure is fairly straitforward(at least for React.js/Next.js developers)...

For more information about project standards, take a look at these docs:

- [React.js](https://react.dev/)

#

### Recources

- [Figma - project design.](https://www.figma.com/file/56t2BI25FcD0LAIjR4GVkQ/%E1%83%99%E1%83%98%E1%83%97%E1%83%AE%E1%83%95%E1%83%90%E1%83%A0%E1%83%98?node-id=37%3A3)
- [Assignmant details](https://redberry.gitbook.io/assignment-i-covid-questionaire/)
- [Git commit rules](https://redberry.gitbook.io/resources/other/git-is-semantikuri-komitebi)

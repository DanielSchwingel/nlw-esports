# nlw-esports
Application developed at NLW eSports, organized by Rocketseat. 🚀

### 🗒️ Description
The project consists of a tool that will help game lovers to find their "duos". 🎮

### 🤟🏼 Technologies
- [ReactJS](https://reactjs.org/): To develop web.
- [NodeJS](https://nodejs.org/en/): To develop server.
- [ReactNative](https://reactnative.dev/): To develop mobile.

### 🚀 Tools
To carry out this project, the following technologies were used:
**Web**
- [Tailwind CSS](https://tailwindcss.com/): Framework CSS.
- [Radix](https://www.radix-ui.com/): Component library.
- [Axios](https://axios-http.com/ptbr/): Client HTTP
**Server**
- [Express](https://expressjs.com/pt-br/): Application structure. 
- [Prisma](https://www.prisma.io/): ORM for database manipulation.
- [Cors](https://www.npmjs.com/package/cors): Access control.
**Mobile**
- [Expo](https://expo.dev/): Tools and services built around React Native.
- [React Navigation](https://reactnavigation.org/): Navigation in the application.

### ✅ Challenges
- [ ] Implement Select component with [Radix](https://www.radix-ui.com/).
- [ ] Implement slider in games list (web) with [KeenSlider](https://keen-slider.io/).
- [ ] Improve web form with [React Hook Form](https://react-hook-form.com/).
- [ ] Implement push notification when registering new game.

### ❓ How to use


First, clone this repository:
```sh
$ git clone https://github.com/DanielSchwingel/nlw-esports.git
```

**Server**

Create a new ``.env`` file on the root directory, using the `.env.example` template as base.
Then, to create the local db run:
```sh
$ cd server
$ npm install
$ npm run migration:up
```

After that, to start the server, run:
```sh
$ npm run dev
```

**Web**

To run the local Vite web client:
```sh
$ cd web
$ npm install
$ npm run dev
```

**Mobile**
To run the mobile:
```sh
$ cd mobile
$ npm install
$ expo start
```

> Developed with 💜. Liked? [Contact me](https://www.linkedin.com/in/daniel-filipe-schwingel-a6541515b/)
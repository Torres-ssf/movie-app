[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
    <img src="./src/assets/logo.png" alt="Logo" width="100" height="100">

  <h3 align="center">Movie App</h3>

  <p align="center">
    A webpage that display information about movies.
    <br />
    <a href="https://movieapp.torres-ssf.com/">Live demo</a>
    ·
    <a href="https://github.com/Torres-ssf/movie-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/Torres-ssf/movie-app/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Live Demo](#live-demo)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

![](/src/assets/app-screenshot.png)

A webpage that consumes [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction) to display information about movies. The implementation of this project is divided into the following Milestones. 

- Milestone 1: Project set up. **(completed)**

- Milestone 2: Implement Main page. **(completed)**

- Milestone 3: Implement Movie Detail page. **(current)**

- Milestone 4: Add Redux to state management.

## Live Demo

[movie-app](https://movieapp.torres-ssf.com/)

### Built With

The project was built using the following languages stacks:

- [react](https://github.com/facebook/react)
- [typescript](https://www.npmjs.com/package/typescript)
- [axios](https://www.npmjs.com/package/axios)
- [styled-components](https://github.com/styled-components/styled-components)
- [react-icons](https://github.com/react-icons/react-icons#readme)
- [react-paginate](https://www.npmjs.com/package/react-paginate)
- [react-content-loader](https://www.npmjs.com/package/react-content-loader)
- [react-lazy-load-image-component](https://www.npmjs.com/package/react-lazy-load-image-component)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- NPM

### Installation

1. Clone the repo

```sh
git clone https://github.com/Torres-ssf/movie-app/
```

2. CD into the project root directory

```sh
cd movie-app/
```

3. Install npm packages

```sh
yarn
```

4. Make a copy of the `env.example` file and change its name to just `.env`. Now we need to setup your API SECRET from The Movie Database webpage.
   1 - First go the signup page [here](https://www.themoviedb.org/signup).
   2 - After setting up you account and signin go to your [config api page](https://www.themoviedb.org/settings/api) and copy your API Read Access Token (v4 auth) key.
   3 - Now go back to the `.env` file and add the value of the copied key to the variable `REACT_APP_API_SECRET`. That's it, the application is now ready to be used.

## Usage

In the project directory, you can run:

```JS
yarn start
```
- Runs the app in the development mode.<br />

```JS
yarn build
```
- Script to deploy the app in production mode.<br />


## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Torres-ssf/movie-app/issues).

## Authors

👤 **Torres-ssf**

- Github: [@Torres-ssf](https://github.com/Torres-ssf)
- Twitter: [@torres_ssf](https://twitter.com/torres_ssf)
- Linkedin: [torres-ssf](https://www.linkedin.com/in/torres-ssf/)

<!-- ## Acknowledgments

<!-- LICENSE -->

## 📝 License

This project is [MIT](LICENSE.md) licensed.

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/Torres-ssf/movie-app.svg?style=flat-square
[contributors-url]: https://github.com/Torres-ssf/movie-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Torres-ssf/movie-app.svg?style=flat-square
[forks-url]: https://github.com/Torres-ssf/movie-app/network/members
[stars-shield]: https://img.shields.io/github/stars/Torres-ssf/movie-app.svg?style=flat-square
[stars-url]: https://github.com/Torres-ssf/movie-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/Torres-ssf/movie-app.svg?style=flat-square
[issues-url]: https://github.com/Torres-ssf/movie-app/issues

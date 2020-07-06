<br />
<p align="center">
  <a href="https://github.com/YannickSpoerl/blog">
    <img src="https://github.com/YannickSpoerl/blog/blob/master/blog/.vuepress/public/logo.png" alt="Logo" width="105" height="80">
  </a>

  <h3 align="center">blog.yannickspoerl.de</h3>
  <p align="center">
  <img src="https://img.shields.io/github/license/YannickSpoerl/blog"/>
  <img src="https://img.shields.io/github/package-json/v/YannickSpoerl/blog"/>
  <img src="https://img.shields.io/github/workflow/status/YannickSpoerl/blog/Build%20and%20Deploy"/>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [License](#license)
* [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

My personal web-blog, realized with vuepress and a customized theme.
Check it out at [https://blog.yannickspoerl.de](https://blog.yannickspoerl.de)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm
```sh
npm install npm@latest -g
```

### Installation
 
1. Start your vuepress-blog
```sh
npx create-vuepress my-blog
```
2. Install NPM packages
```sh
npm install --save
```
3. Install theme
```sh
npm install @yannickspoerl/vuepress-theme-yannickspoerl@1.0.0 --save
```
4. Set Theme in ``my-blog/.vuepress/config.js``
```sh
module.exports = {
  title: 'My-Blog',
  description: 'My awesome new blog',
  theme: '@yannickspoerl/yannickspoerl'
```
5. Start blogging!


<!-- LICENSE -->
## License

Distributed under the MIT License. See [LICENSE](https://github.com/YannickSpoerl/blog/blob/master/LICENSE.md) for more information.



<!-- CONTACT -->
## Contact

Yannick Spoerl - [@yannickspoerl](https://twitter.com/yannickspoerl)

Project Link: [https://github.com/YannickSpoerl/blog](https://github.com/YannickSpoerl/blog)

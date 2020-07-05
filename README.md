<br />
<p align="center">
  <a href="https://github.com/YannickSpoerl/blog">
    <img src="https://github.com/YannickSpoerl/blog/blob/master/blog/.vuepress/public/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Blog</h3>
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

<p align="center">
  <img src="https://user-images.githubusercontent.com/33640025/86544923-1e3c7900-bf2b-11ea-969e-7c43615ee927.png" width="444" height="346"/>
  <!--   -->&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<!--   -->
  <img src="https://user-images.githubusercontent.com/33640025/86544932-38765700-bf2b-11ea-9a0a-4c1605ff1b5f.png" width="170" height="346"/>
</p>


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

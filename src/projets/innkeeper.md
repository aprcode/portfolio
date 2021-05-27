---
sidebar: true
---

# [Innkeeper.fr](https://innkeeper.fr)

<img src="/innkeeper.png" alt="Architecture of VuePress" class="medium-zoom-image" width="250" height="200">


::: tip Stack
  - PHP Symfony
  - JS / HTML / CSS
  - Mysql
  - Devops
:::

### Objectifs

Simply the objective of innkeeper was to build a platform capable of facilitating the job search in the hotel and restaurant sector. I have maintained **95% of the development of this platform**

> Today, I remain a **shareholder** of the start-up.


### Architecture

::: tip Info
  - PHP Symfony
  - Model MVC
:::
For this project, the **PHP Symfony** technical stack was chosen for its robustness and efficiency on SQL databases.
The site has followed the **MVC** model proposed by default by symfony

### Frontend

::: tip Info
  - Twig
  - HTML
  - CSS
  - JS
:::

The frontend follows the standard Symfony model:
- HTML
- CSS
- JS
- The Twig PHP template engine of Symfony

The **CSS Bootsrap framework** also defined the guidelines of the project for the responsive aspect

#### Backend

::: tip Info
  - PHP 7
  - Mysql
  - ElasticSearch
:::

The Backend is pure **PHP** coupled with a **SQL** database implementing Symfony standards.
- Repository for custom SQL queries
- Service for some features
- Controller to manage the logic
...

In addition, the backend is coupled with a number of external services:
- **Elasticsearch** cluster for search
- **Monetico** Payment for payment
- **Mailjet** for emails
- **Algolia** for location autocompletion

#### Ops

::: tip Info
  - Apache2
  - OPC
  - Ubuntu
  - OVH Cloud
:::

The site is deployed on a **Unix** system hosted by **OVH cloud**.
The web server is an apache2 server implementing many PhP optimization **(OPC, Varnish ...)**

### Results

The site is now in production and the project is complete. This experience taught me a lot of skills (design, deployment, discipline...) that I apply regularly in my projects

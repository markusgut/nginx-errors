# Custom Error Pages – for Nginx, Apache & others
![Static Badge](https://img.shields.io/badge/error_codes_covered-40-red?style=flat)
![Static Badge](https://img.shields.io/badge/languages_included-8-orange?style=flat)
![GitHub package.json version](https://img.shields.io/github/package-json/v/custom-error-pages/custom-error-pages?color=yellow)
[![GitHub License](https://img.shields.io/github/license/custom-error-pages/custom-error-pages)](LICENSE.md)
[![Github Repository](https://img.shields.io/badge/github-repo-blue?style=flat&logo=github)](https://github.com/custom-error-pages/custom-error-pages)

A full set of custom HTTP error pages for webserver like Nginx, Apache or others. Can be used out of-the-box without any hassle, or can be fully customized easily. Comes with multi-language support and translations for many languages already included.

Our generic and minimalistic default design is perfect to be used without any modification in almost every situation. Just download one of the prerendered releases. If you want to use a language not yet included or want to make changes to design or code, you'd need to download the source code from github (using git or your web browser), make your modifications and generate all resulting html files automatically. 

The full set counts 40 pages, covering virtually all HTTP 4xx (client error) and HTTP 5xx (server error) status codes which could ever end up on your visitor's screen. Even the [notorious 418](https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol)!

## How to use error pages

### Prerequisites

- Node.js ([get it here](https://nodejs.org/en/download)) – Please note that Node.js is _only_ required for generation of static files.

### Usage

To render a full set of error pages, clone our repository, run `npm install` and `npm run build`:

```console
git glone custom-error-pages/custom-error-pages
npm install
npm run build
```

After generation is complete, you find the generated files in `build`.

Configure your webserver to use these as custom error pages.  

## Version Notes

v0.1.0-alpha **(current)** – ***WORK IN PROGRESS!*** Might be incomplete or broken.

## Known Limitations

- Currently, does neither generate nor include any browser configuration.

- We have not released any prerendered sets yet. 

## Origin Story

[@markusgut](https://github.com/markusgut) was looking for a full set of custom HTTP error pages, and found [@bartosjiri/nginx-errors](https://github.com/bartosjiri/nginx-errors) to be great starting point. While customizing a few details, things got somewhat out of hand, leading to him adding a full build system with multi language support, allowing users to quickly and easily generate full sets of customized, consistent HTTP error pages in multiple languages.

## License

[BSD-2-Clause](LICENSE.md)

## Contributors

- [@markusgut](https://github.com/markusgut)
- [@bartosjiri](https://github.com/bartosjiri)
- [@patrick7](https://github.com/patrick7)
- [@cairoapcampos](https://github.com/cairoapcampos)

# 🌐 Web Crawler [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![Node.js](https://img.shields.io/badge/Node.js-18.x-green) ![Jest](https://img.shields.io/badge/Test%20Framework-Jest-red)

> A high-performance web crawler built with **Node.js**, **Fetch API**, and **Jest**. Crawls websites, extracts data, and exports to CSV/JSON while adhering to HTTP best practices.

---

## 🚀 Features
-  **HTTPS/HTTP Crawling** with `fetch` and `node:https`  
-  **REST API Integration** (JSON/XML responses)  
- **Export to CSV/JSON** (built-in file writer)  
-  **Jest Test Suite** (100% coverage for core modules)  
- **Rate Limiting & Retries** (auto-handles `429 Too Many Requests`)  

---

## Installation
```bash
git clone https://github.com/Aoumjahde/webcrawler.git
cd webcrawler
npm install
```
### API Reference
- **crawl(options] : Starts crawling with depth, maxRetries, etc.**
- **fetchAPI(url, config) : REST client with retry logic.**
- **parseHTML(html) : Cheerio-based DOM parser.**


### Testing

```
  "scripts": {
    "start": "node main.js",
    "test": "jest"
  },

--> npm test 

```

### HTTP Concepts Implemented

- **HTTPS** 	Auto-handled by ```node:https```
- **Headers** 	Configurable ```User-Agent```, ```Accept```
- **Methods**  ```GET```, ```HEAD``` for efficiency
- **Status Codes** Retries on ```5xx```, stops on ```404```

### 🤝 Contributing

- Fork the repo
- Add tests for new features (#tag your tests)
- Submit a PR with a clear description

### License

MIT © Aziz oumjahde


let diferentDependencia1_2= new Array();
let diferentDependencia2_1= new Array();


let dependencia1= 
{"dependencies": {
    "@babel/core": "7.1.0",
    "@fortawesome/fontawesome-svg-core": "1.2.32",
    "@fortawesome/free-solid-svg-icons": "5.15.1",
    "@fortawesome/react-fontawesome": "0.1.13",
    "@handsontable/react": "2.1.0",
    "@iarna/cli": "1.2.0 extraneous",
    "@kenshooui/react-multi-select": "1.1.6",
    "@sentry/browser": "4.6.6",
    "@svgr/webpack": "2.4.1",
    "@sweetalert/with-react": "0.1.1",
    "ag-grid-community": "21.2.2",
    "ag-grid-react": "21.2.2",
    "agent-base": "4.3.0 extraneous",
    "agentkeepalive": "3.5.2 extraneous",
    "ansi-align": "2.0.0 extraneous",
    "ansicolors": "0.3.2 extraneous",
    "ansistyles": "0.1.3 extraneous",
    "aproba": "2.0.0 extraneous",
    "archy": "1.0.0 extraneous",
    "axios": "0.18.1",
    "babel-core": "7.0.0-bridge.0",
    "babel-eslint": "7.2.3",
    "babel-jest": "23.6.0",
    "babel-loader": "8.0.4",
    "babel-plugin-named-asset-import": "0.2.3",
    "babel-preset-react-app": "5.0.4",
    "bfj": "6.1.1",
    "bin-links": "1.1.8 extraneous",
    "bootstrap-datepicker": "1.9.0",
    "bootstrap-daterangepicker": "3.1.0",
    "bootstrap": "4.5.3",
    "boxen": "1.3.0 extraneous",
    "builtins": "1.0.3 extraneous",
    "byline": "5.0.0 extraneous",
    "byte-size": "5.0.1 extraneous",
    "cacache": "12.0.4 extraneous",
    "call-limit": "1.1.1 extraneous",
    "capture-stack-trace": "1.0.1 extraneous",
    "case-sensitive-paths-webpack-plugin": "2.1.2",
    "chalk": "2.4.1",
    "chart.js": "2.9.4",
    "cidr-regex": "2.0.10 extraneous",
    "cli-boxes": "1.0.0 extraneous",
    "cli-columns": "3.1.2 extraneous",
    "cli-table3": "0.5.1 extraneous",
    "clone": "1.0.4 extraneous",
    "cmd-shim": "3.0.3 extraneous",
    "colors": "1.4.0 extraneous",
    "columnify": "1.5.4 extraneous",
    "config-chain": "1.1.12 extraneous",
    "configstore": "3.1.5 extraneous",
    "create-error-class": "3.0.2 extraneous",
    "crypto-random-string": "1.0.0 extraneous",
    "css-loader": "1.0.0",
    "debuglog": "1.0.1 extraneous",
    "deep-extend": "0.6.0 extraneous",
    "defaults": "1.0.3 extraneous",
    "detect-browser": "4.8.0",
    "detect-indent": "5.0.0 extraneous",
    "dezalgo": "1.0.3 extraneous",
    "dotenv-expand": "4.2.0",
    "dotenv": "6.0.0",
    "duplexer3": "0.1.4 extraneous",
    "editor": "1.0.0 extraneous",
    "env-paths": "2.2.0 extraneous",
    "err-code": "1.1.2 extraneous",
    "es6-promise": "4.2.8 extraneous",
    "es6-promisify": "5.0.0 extraneous",
    "eslint-config-react-app": "2.1.0",
    "eslint-loader": "2.2.1",
    "eslint-plugin-flowtype": "2.39.1",
    "eslint-plugin-import": "2.8.0",
    "eslint-plugin-jsx-a11y": "5.1.1",
    "eslint-plugin-react": "7.4.0",
    "eslint": "4.10.0",
    "execa": "0.7.0 extraneous",
    "faker": "4.1.0",
    "file-loader": "2.0.0",
    "find-npm-prefix": "1.0.2 extraneous",
    "formik": "1.5.8",
    "fs-extra": "7.0.0",
    "fs-minipass": "1.2.7 extraneous",
    "fs-vacuum": "1.2.10 extraneous",
    "genfun": "5.0.0 extraneous",
    "gentle-fs": "2.3.1 extraneous",
    "global-dirs": "0.1.1 extraneous",
    "got": "6.7.1 extraneous",
    "handsontable": "6.2.2",
    "history": "4.10.1",
    "html-to-image": "0.1.1",
    "html-webpack-plugin": "4.0.0-alpha.2",
    "http-cache-semantics": "3.8.1 extraneous",
    "http-proxy-agent": "2.1.0 extraneous",
    "https-proxy-agent": "2.2.4 extraneous",
    "humanize-ms": "1.2.1 extraneous",
    "husky": "4.3.5",
    "i": "0.3.6",
    "identity-obj-proxy": "3.0.0",
    "ignore-walk": "3.0.3 extraneous",
    "import-lazy": "2.1.0 extraneous",
    "infer-owner": "1.0.4 extraneous",
    "init-package-json": "1.10.3 extraneous",
    "is-cidr": "3.1.1 extraneous",
    "is-installed-globally": "0.1.0 extraneous",
    "is-npm": "1.0.0 extraneous",
    "is-redirect": "1.0.0 extraneous",
    "is-retry-allowed": "1.2.0 extraneous",
    "jest-pnp-resolver": "1.0.1",
    "jest-resolve": "23.6.0",
    "jest": "23.6.0",
    "jQuery-QueryBuilder": "2.5.2",
    "jsonparse": "1.3.1 extraneous",
    "JSONStream": "1.3.5 extraneous",
    "latest-version": "3.1.0 extraneous",
    "lazy-property": "1.0.0 extraneous",
    "libcipm": "4.0.8 extraneous",
    "libnpm": "3.0.1 extraneous",
    "libnpmaccess": "3.0.2 extraneous",
    "libnpmconfig": "1.2.1 extraneous",
    "libnpmhook": "5.0.3 extraneous",
    "libnpmorg": "1.0.1 extraneous",
    "libnpmpublish": "1.1.3 extraneous",
    "libnpmsearch": "2.0.2 extraneous",
    "libnpmteam": "1.0.2 extraneous",
    "libnpx": "10.2.4 extraneous",
    "lint-staged": "7.3.0",
    "lock-verify": "2.2.1 extraneous",
    "lockfile": "1.0.4 extraneous",
    "lodash._baseuniq": "4.6.0 extraneous",
    "lodash._createset": "4.0.3 extraneous",
    "lodash._root": "3.0.1 extraneous",
    "lodash.clonedeep": "4.5.0 extraneous",
    "lodash.union": "4.6.0 extraneous",
    "lodash.without": "4.4.0 extraneous",
    "lodash": "4.17.20",
    "lowercase-keys": "1.0.1 extraneous",
    "make-fetch-happen": "5.0.2 extraneous",
    "material-icons-react": "1.0.4",
    "meant": "1.0.3 extraneous",
    "mini-css-extract-plugin": "0.4.3",
    "minipass": "2.9.0 extraneous",
    "minizlib": "1.3.3 extraneous",
    "moment-timezone": "0.5.32",
    "moment": "2.29.1",
    "node-fetch-npm": "2.0.4 extraneous",
    "node-gyp": "5.1.1 extraneous",
    "node-sass": "4.14.1",
    "nopt": "4.0.3 extraneous",
    "normalizr": "3.6.1",
    "npm-audit-report": "1.3.3 extraneous",
    "npm-bundled": "1.1.1 extraneous",
    "npm-cache-filename": "1.0.2 extraneous",
    "npm-install-checks": "3.0.2 extraneous",
    "npm-lifecycle": "3.1.5 extraneous",
    "npm-logical-tree": "1.2.1 extraneous",
    "npm-normalize-package-bin": "1.0.1 extraneous",
    "npm-package-arg": "6.1.1 extraneous",
    "npm-packlist": "1.4.8 extraneous",
    "npm-pick-manifest": "3.0.2 extraneous",
    "npm-profile": "4.0.4 extraneous",
    "npm-registry-fetch": "4.0.7 extraneous",
    "npm-user-validate": "1.0.1 extraneous",
    "npm": "6.14.9",
    "opener": "1.5.2 extraneous",
    "optimize-css-assets-webpack-plugin": "5.0.1",
    "package-json": "4.0.1 extraneous",
    "pacote": "9.5.12 extraneous",
    "pnp-webpack-plugin": "1.1.0",
    "postcss-flexbugs-fixes": "4.1.0",
    "postcss-loader": "3.0.0",
    "postcss-preset-env": "6.0.6",
    "postcss-safe-parser": "4.0.1",
    "prepend-http": "1.0.4 extraneous",
    "prettier": "1.19.1",
    "promise-retry": "1.1.1 extraneous",
    "promzard": "0.3.0 extraneous",
    "prop-types": "15.7.2",
    "proto-list": "1.2.4 extraneous",
    "protoduck": "5.0.1 extraneous",
    "qrcode-terminal": "0.12.0 extraneous",
    "query-string": "6.13.7 extraneous",
    "qw": "1.0.1 extraneous",
    "rc": "1.2.8 extraneous",
    "react-app-polyfill": "0.1.3",
    "react-bootstrap-daterangepicker": "4.1.0",
    "react-bootstrap": "0.32.4",
    "react-chartjs-2": "2.11.1",
    "react-codemirror": "1.0.0",
    "react-data-grid": "6.1.0",
    "react-datasheet": "1.4.8",
    "react-datepicker": "1.8.0",
    "react-dev-utils": "6.1.1",
    "react-dom": "16.14.0",
    "react-dropzone": "7.0.1",
    "react-input-files": "1.2.0",
    "react-js-pagination": "3.0.3",
    "react-loading-skeleton": "2.1.1",
    "react-querybuilder": "1.4.3",
    "react-redux": "5.1.2",
    "react-router-dom": "4.3.1",
    "react-select": "2.4.4",
    "react-slick": "0.24.0",
    "react-spinners": "0.5.13",
    "react-swipeable-drawer": "3.1.0",
    "react-toastify": "5.5.0",
    "react-user-tour": "3.0.0",
    "react-youtube": "7.13.0",
    "react": "16.14.0",
    "reactstrap": "8.7.1",
    "read-cmd-shim": "1.0.5 extraneous",
    "read-installed": "4.0.3 extraneous",
    "read-package-json": "2.1.2 extraneous",
    "read-package-tree": "5.3.1 extraneous",
    "read": "1.0.7 extraneous",
    "readdir-scoped-modules": "1.1.0 extraneous",
    "redux-persist": "5.10.0",
    "redux-reset": "0.3.0",
    "redux-thunk": "2.3.0",
    "redux": "4.0.5",
    "registry-auth-token": "3.4.0 extraneous",
    "registry-url": "3.1.0 extraneous",
    "reselect": "4.0.0",
    "resolve": "1.8.1",
    "retry": "0.12.0 extraneous",
    "sass-loader": "7.1.0",
    "semver-compare": "1.0.0",
    "semver-diff": "2.1.0 extraneous",
    "sha": "3.0.0 extraneous",
    "slick-carousel": "1.8.1",
    "slide": "1.1.6 extraneous",
    "smart-buffer": "4.1.0 extraneous",
    "socks-proxy-agent": "4.0.2 extraneous",
    "socks": "2.3.3 extraneous",
    "sorted-object": "2.0.1 extraneous",
    "sorted-union-stream": "2.1.3 extraneous",
    "split-on-first": "1.1.0 extraneous",
    "stream-iterate": "1.2.0 extraneous",
    "strict-uri-encode": "2.0.0 extraneous",
    "stringify-package": "1.0.1 extraneous",
    "style-loader": "0.23.0",
    "sweetalert": "2.1.2",
    "sweetalert2": "8.19.0",
    "tar": "4.4.13 extraneous",
    "term-size": "1.2.0 extraneous",
    "terser-webpack-plugin": "1.1.0",
    "timed-out": "4.0.1 extraneous",
    "tiny-relative-date": "1.3.0 extraneous",
    "uid-number": "0.0.6 extraneous",
    "umask": "1.1.0 extraneous",
    "unique-string": "1.0.0 extraneous",
    "unzip-response": "2.0.1 extraneous",
    "update-notifier": "2.5.0 extraneous",
    "url-loader": "1.1.1",
    "url-parse-lax": "1.0.0 extraneous",
    "util-extend": "1.0.3 extraneous",
    "util-promisify": "2.1.0 extraneous",
    "uuid": "3.4.0",
    "validate-npm-package-name": "3.0.0 extraneous",
    "wcwidth": "1.0.1 extraneous",
    "webpack-dev-server": "3.1.9",
    "webpack-manifest-plugin": "2.0.4",
    "webpack": "4.19.1",
    "widest-line": "2.0.1 extraneous",
    "workbox-webpack-plugin": "3.6.2",
    "xdg-basedir": "3.0.0 extraneous",
    "yup": "0.27.0"
    }}
    
let dependencia2= 
  {"dependencies": {
    "@babel/core": "7.1.0",
    "@fortawesome/fontawesome-svg-core": "^1.2.5",
    "@fortawesome/free-solid-svg-icons": "^5.4.0",
    "@fortawesome/react-fontawesome": "^0.1.3",
    "@handsontable/react": "^2.0.0",
    "@kenshooui/react-multi-select": "^1.1.3",
    "@sentry/browser": "^4.4.2",
    "@svgr/webpack": "2.4.1",
    "@sweetalert/with-react": "^0.1.1",
    "ag-grid-community": "^21.1.0",
    "ag-grid-react": "^21.1.0",
    "axios": "^0.18.0",
    "babel-core": "7.0.0-bridge.0",
    "babel-eslint": "^7.2.3",
    "babel-jest": "23.6.0",
    "babel-loader": "8.0.4",
    "babel-plugin-named-asset-import": "^0.2.2",
    "babel-preset-react-app": "^5.0.2",
    "bfj": "6.1.1",
    "bootstrap": "^4.1.3",
    "bootstrap-datepicker": "^1.9.0",
    "bootstrap-daterangepicker": "^3.0.5",
    "case-sensitive-paths-webpack-plugin": "2.1.2",
    "chalk": "2.4.1",
    "chart.js": "^2.7.3",
    "css-loader": "1.0.0",
    "detect-browser": "^4.0.3",
    "dotenv": "6.0.0",
    "dotenv-expand": "4.2.0",
    "eslint": "4.10.0",
    "eslint-config-react-app": "^2.1.0",
    "eslint-loader": "^2.1.1",
    "eslint-plugin-flowtype": "2.39.1",
    "eslint-plugin-import": "2.8.0",
    "eslint-plugin-jsx-a11y": "5.1.1",
    "eslint-plugin-react": "7.4.0",
    "file-loader": "2.0.0",
    "formik": "^1.3.1",
    "fs-extra": "7.0.0",
    "handsontable": "^6.1.1",
    "history": "^4.7.2",
    "html-to-image": "0.1.1",
    "html-webpack-plugin": "4.0.0-alpha.2",
    "i": "^0.3.6",
    "identity-obj-proxy": "3.0.0",
    "jQuery-QueryBuilder": "^2.5.2",
    "jest": "23.6.0",
    "jest-pnp-resolver": "1.0.1",
    "jest-resolve": "23.6.0",
    "lint-staged": "^7.3.0",
    "lodash": "^4.17.11",
    "material-icons-react": "^1.0.4",
    "mini-css-extract-plugin": "0.4.3",
    "moment": "^2.24.0",
    "moment-timezone": "^0.5.23",
    "node-sass": "^4.9.3",
    "normalizr": "^3.4.1",
    "npm": "^6.4.1",
    "optimize-css-assets-webpack-plugin": "5.0.1",
    "pnp-webpack-plugin": "1.1.0",
    "postcss-flexbugs-fixes": "4.1.0",
    "postcss-loader": "3.0.0",
    "postcss-preset-env": "6.0.6",
    "postcss-safe-parser": "4.0.1",
    "prettier": "^1.14.3",
    "prop-types": "^15.6.2",
    "react": "^16.5.2",
    "react-app-polyfill": "^0.1.3",
    "react-bootstrap": "^0.32.4",
    "react-bootstrap-daterangepicker": "^4.1.0",
    "react-chartjs-2": "^2.7.4",
    "react-codemirror": "^1.0.0",
    "react-data-grid": "^6.1.0",
    "react-datasheet": "^1.3.14",
    "react-datepicker": "^1.7.0",
    "react-dev-utils": "^6.0.3",
    "react-dom": "^16.5.2",
    "react-dropzone": "7",
    "react-input-files": "^1.2.0",
    "react-js-pagination": "^3.0.2",
    "react-loading-skeleton": "^2.0.1",
    "react-querybuilder": "^1.4.3",
    "react-redux": "^5.0.7",
    "react-router-dom": "^4.3.1",
    "react-select": "^2.4.3",
    "react-slick": "^0.24.0",
    "react-spinners": "^0.5.1",
    "react-swipeable-drawer": "^3.1.0",
    "react-toastify": "^5.4.0",
    "react-user-tour": "^3.0.0",
    "react-youtube": "^7.11.2",
    "reactstrap": "^8.0.0",
    "redux": "^4.0.0",
    "redux-persist": "^5.10.0",
    "redux-reset": "^0.3.0",
    "redux-thunk": "^2.3.0",
    "reselect": "^4.0.0",
    "resolve": "1.8.1",
    "sass-loader": "7.1.0",
    "semver-compare": "^1.0.0",
    "slick-carousel": "^1.8.1",
    "style-loader": "0.23.0",
    "sweetalert": "^2.1.0",
    "sweetalert2": "^8.14.0",
    "terser-webpack-plugin": "1.1.0",
    "url-loader": "1.1.1",
    "uuid": "^3.4.0",
    "webpack": "4.19.1",
    "webpack-dev-server": "3.1.9",
    "webpack-manifest-plugin": "2.0.4",
    "workbox-webpack-plugin": "3.6.2",
    "yup": "^0.27.0"
  }}

let  arrayDependencies1 = Object.keys(dependencia1.dependencies)
let  arrayDependencies2 = Object.keys(dependencia2.dependencies)

for (let i=0; i<arrayDependencies1.length; i++) {
    if (!arrayDependencies2.includes(arrayDependencies1[i])) {
        diferentDependencia1_2.push(arrayDependencies1[i])
    }
}

for (let i=0; i<arrayDependencies2.length; i++) {
    if (!arrayDependencies1.includes(arrayDependencies2[i])) {
        diferentDependencia2_1.push(arrayDependencies2[i])
    }
    
}


console.log(diferentDependencia1_2)
console.log(diferentDependencia2_1)

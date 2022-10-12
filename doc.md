config format code .editorconfig - config cho các editor khác ngoài vscode
.prettierrc .prettierignore
.eslintrc

yarn add prettier eslint-plugin-prettier eslint-config-prettier -D

config package.json chạy các lệnh này để fix rule format code
"lint": "eslint --ext js, jsx src/",
"lint:fix": "eslint --fix --ext js, jsx src/",
"prettier": "prettier --check \"src/**/(**.jsx|_.js|_.scss|_.css\"",
"prettier:fix": "prettier --write \"src/**/(**.jsx|_.js|_scss|_.css\")"

## Docker

```sh
$ docker-compose build
```

## NextJS

```sh
$ docker-compose run --rm app yarn create next-app npg-sample\
&& mv npg-sample/* . && mv npg-sample/.* . && rm -r npg-sample
```

## Lint & Script

```sh
$ yarn add -D @typescript-eslint/eslint-plugin eslint-config-prettier eslint-plugin-simple-import-sort prettier npm-run-all
```

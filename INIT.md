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

## Prisma & NextAuth & MailHog

```sh
$ yarn add -D prisma
$ npx prisma init
$ yarn add next-auth @prisma/client @next-auth/prisma-adapter
$ openssl rand -base64 32
$ npx prisma migrate dev --name init
$ yarn add nodemailer
```

## GraphQL Code Generator

```sh
$ yarn add graphql @graphql-tools/graphql-file-loader @graphql-tools/load @graphql-tools/schema @apollo/server
$ yarn add -D @graphql-codegen/cli @graphql-codegen/schema-ast @graphql-codegen/typescript @graphql-codegen/typescript-resolvers ts-node
$ yarn add -D @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo
$ yarn add @apollo/client
```

## Test Tool

```sh
$ yarn add -D @testing-library/jest-dom @testing-library/react @testing-library/user-event @vitejs/plugin-react jsdom vitest
```

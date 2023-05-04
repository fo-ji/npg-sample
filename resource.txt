# はじめに

"typescript.inlayHints.parameterNames.enabled": "all",
"typescript.inlayHints.enumMemberValues.enabled": true,
"typescript.inlayHints.functionLikeReturnTypes.enabled": true,
"typescript.inlayHints.parameterNames.suppressWhenArgumentMatchesName": true,
"typescript.inlayHints.parameterTypes.enabled": true,
"typescript.inlayHints.propertyDeclarationTypes.enabled": true,
"typescript.inlayHints.variableTypes.enabled": true,



# Next.jsのセットアップ

https://nextjs.org/docs

npx create-next-app@13.1.2 nextjs-prisma-graphql-codegen-sample

https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
https://marketplace.visualstudio.com/items?itemName=Prisma.prisma

yarn add -D @typescript-eslint/eslint-plugin@5.48.1 eslint-config-prettier@8.6.0 eslint-plugin-simple-import-sort@8.0.0 prettier@2.8.3 npm-run-all@4.1.5

yarn add -D tailwindcss@3.2.4 postcss@8.4.21 autoprefixer@10.4.13



# Prismaのセットアップ

https://www.prisma.io/

yarn add -D prisma@4.9.0

https://next-auth.js.org/adapters/prisma

yarn add next-auth@4.18.8 @prisma/client@4.9.0 @next-auth/prisma-adapter@1.0.5

https://next-auth.js.org/configuration/providers/email

https://www.prisma.io/docs/guides/database/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices#solution

https://next-auth.js.org/configuration/options#secret

yarn add nodemailer@6.9.0

https://next-auth.js.org/getting-started/example



# GraphQL Code Generatorのセットアップ

https://the-guild.dev/graphql/codegen

https://the-guild.dev/graphql/codegen/docs/getting-started/installation

yarn add graphql@16.6.0 @graphql-tools/graphql-file-loader@7.5.14 @graphql-tools/load@7.8.9 @graphql-tools/schema@9.0.13 apollo-server-micro@3.11.1 micro@10.0.1 micro-cors@0.1.1

yarn add -D @graphql-codegen/cli@2.16.4 @graphql-codegen/schema-ast@2.6.1 @graphql-codegen/typescript@2.8.7 @graphql-codegen/typescript-resolvers@2.7.12 @types/micro-cors@0.1.2 ts-node@10.9.1

yarn add -D @graphql-codegen/typescript-operations@2.5.12 @graphql-codegen/typescript-react-apollo@3.3.7

yarn add @apollo/client@3.7.4

https://www.apollographql.com/docs/react/data/queries/

https://www.apollographql.com/docs/react/data/mutations/



# テストコードの追加

https://vitest.dev/

https://testing-library.com/docs/react-testing-library/intro/

yarn add -D @testing-library/jest-dom@5.16.5 @testing-library/react@13.4.0 @testing-library/user-event@14.4.3 @vitejs/plugin-react@3.0.1 jsdom@21.0.0 vitest@0.27.2

https://testing-library.com/docs/queries/about

https://blog.y-temp4.com/entry/using-javascript-void-operator

https://github.com/vitest-dev/vitest



# 本番環境へのデプロイ

https://www.mailjet.com/

EMAIL_SERVER=smtp://[APIキー]:[APIシークレット]@in-v3.mailjet.com:587
EMAIL_FROM=[あなたが登録したメールアドレス]

https://render.com/

yarn; yarn build; npx prisma migrate deploy

yarn start -p $PORT

NEXTAUTH_URL	https://[あなたが設定した名前].onrender.com
NEXT_PUBLIC_GRAPHQL_ENDPOINT	https://[あなたが設定した名前].onrender.com/api/graphql



# ボーナストラック

https://storybook.js.org/

https://ladle.dev/

https://github.com/alan2207/bulletproof-react

https://the-guild.dev/graphql/codegen/plugins

https://formidable.com/open-source/urql/

https://the-guild.dev/graphql/yoga-server

https://developer.mozilla.org/ja/docs/Learn/Accessibility/HTML

https://github.com/aniftyco/awesome-tailwindcss



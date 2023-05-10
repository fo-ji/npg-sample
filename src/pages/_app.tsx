import '@/styles/globals.css';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import { NEXT_PUBLIC_GRAPHQL_ENDPOINT } from '@/config';

export const client = new ApolloClient({
  uri: NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </SessionProvider>
  );
}

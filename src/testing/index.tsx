import { MockedProvider } from '@apollo/client/testing';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { FC, PropsWithChildren, ReactElement } from 'react';

import { mocks } from './mock';

const AllTheProviders: FC<PropsWithChildren> = ({ children }) => {
  return <MockedProvider mocks={mocks}>{children}</MockedProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => ({
  user: userEvent.setup(),
  ...render(ui, { wrapper: AllTheProviders, ...options }),
});

export { customRender };

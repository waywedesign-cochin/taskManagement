'use client';

import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps): React.JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}

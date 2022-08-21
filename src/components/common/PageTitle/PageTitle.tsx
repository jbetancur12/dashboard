import React from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  children: React.ReactNode; //👈 children prop typr
};

export const PageTitle = ({ children }: Props) => {
  return (
    <Helmet>
      <title>{children} | Lightence Admin</title>
    </Helmet>
  );
};

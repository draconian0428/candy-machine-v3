import React from 'react';
import PublicLayout from "./public";

export const Layout = ({children} : {children: React.ReactNode}) => {
  return <PublicLayout children={children}/>;
};
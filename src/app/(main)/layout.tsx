import { auth } from '@/auth';
import Header from '@/components/layout/Header';
import HeaderCategorySelector from '@/components/layout/HeaderCategorySelector';
import React from 'react';

const MainLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const session = await auth();
  const user = session?.user;

  return (
    <>
      <Header user={user} categorySelected={<HeaderCategorySelector />} />
      {children}
    </>
  );
};

export default MainLayout;

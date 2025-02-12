import { auth } from '@/auth';
import React from 'react';

const Home = async () => {
  const session = await auth();

  const user = session?.user;

  return (
    <div>
      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
};

export default Home;

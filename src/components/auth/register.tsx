'use client';

import React from 'react';
import Link from 'next/link';
import { sendRequest } from '@/utils/api';
import { useRouter } from 'next/navigation';

const Register = () => {
  const router = useRouter();

  const onFinish = async (values: any) => {
    const { email, password, name } = values;

    const res = await sendRequest<IBackendRes<ILogin>>({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/register`,
      body: {
        email,
        password,
        name,
      },
    });

    if (res.statusCode === 201) {
      // Redirect to login page
      router.push(`/auth/verify/${res.data?._id}`);
    } else {
      // notification.error({
      //   message: 'Register failed',
      //   description: res.message,
      // });
    }
  };

  return <div>Register</div>;
};

export default Register;

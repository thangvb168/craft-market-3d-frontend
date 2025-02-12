'use client';

import Link from 'next/link';
import { authenticate } from '@/utils/actions';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

  const onFinish = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Ngăn chặn reload trang

    const formData = new FormData(event.currentTarget); // Lấy dữ liệu từ form
    const email = formData.get('email')?.toString().trim();
    const password = formData.get('password')?.toString().trim();

    console.log('Email:', email);
    console.log('Password:', password);
    // const { email, password } = values;
    // Trigger login
    const res = await authenticate(email!, password!);

    if (res?.error) {
      if (res.code === 2) {
        router.push('/auth/verify/' + email);
      } else {
        // notification.error({
        //   message: 'Login failed',
        //   description: res.error,
        // });
      }
    } else {
      router.push('/');
    }
  };

  return (
    <div>
      <form onSubmit={onFinish}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          defaultValue={'bathangvu@gmail.com'}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          defaultValue={'password123'}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

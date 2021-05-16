import Head from "next/head";
import MainLayout from '../src/components/layouts/MainLayout'

export default function about() {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
      </Head>

      <h1>About Page</h1>
    </MainLayout>
  );
}

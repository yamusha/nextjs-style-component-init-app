import Head from "next/head";
import MainLayout from '../src/components/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
      </Head>

      <h1>Home Page</h1>
    </MainLayout>
  );
}

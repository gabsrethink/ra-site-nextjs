import Head from "next/head";
import Footer from "../footer";
import Header from "../header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <Header />
      </Head>
      {children}
      <Footer />
    </>
  );
}

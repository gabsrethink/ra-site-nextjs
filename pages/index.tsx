import Footer from "../components/footer";
import Nav from "../components/header";
import ScrollArrow from "../components/scrollTopButton/indext";
import TitleContent from "../components/titleContent";
import TwoColumnsSection from "../components/twoColumnsSection";
import { instance } from "../utils/requester";
import styles from "./index.module.css";

export default function Home({ data }: any) {
  return (
    <div>
      <Nav props={data} />
      <TitleContent props={data} />
      <TwoColumnsSection props={data} />
      <Footer props={data} />
      <ScrollArrow />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const { data } = await instance.get("blog-posts?populate=deep");
    return {
      props: { data },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: { Header: {} },
        error: true,
      },
    };
  }
}

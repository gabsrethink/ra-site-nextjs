import Layout from "../components/layout/layout";
import ScrollArrow from "../components/scrollTopButton/indext";
import TitleContent from "../components/titleContent";
import TwoColumnsSection from "../components/twoColumnsSection";
import { instance } from "../utils/requester";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = ({ data }: any) => {
  return (
    <div>
      <TitleContent props={data} />
      <TwoColumnsSection props={data} />
      <ScrollArrow />
    </div>
  );
};

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

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

import Layout from "../components/layout/layout";
import ScrollArrow from "../components/scrollTopButton/indext";
import TeamContent from "../components/teamContent";
import { instance } from "../utils/requester";
import { NextPageWithLayout } from "./_app";

const Team: NextPageWithLayout = ({ data }: any) => {
  return (
    <div>
      <TeamContent props={data} />
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

export default Team;

Team.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

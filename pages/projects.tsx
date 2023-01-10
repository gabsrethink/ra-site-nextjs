import Layout from "../components/layout/layout";
import ProjectDescription from "../components/projectDescription";
import ScrollArrow from "../components/scrollTopButton/indext";
import Slider from "../components/slider";
import { instance } from "../utils/requester";
import { NextPageWithLayout } from "./_app";

const Projects: NextPageWithLayout = ({ data }: any) => {
  return (
    <div>
      <ProjectDescription props={data} />
      <Slider props={data} />
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
export default Projects;

Projects.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

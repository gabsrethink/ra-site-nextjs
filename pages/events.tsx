import EventContent from "../components/eventContent";
import Gallery from "../components/gallery";
import Layout from "../components/layout/layout";
import ScrollArrow from "../components/scrollTopButton/indext";
import { instance } from "../utils/requester";
import { NextPageWithLayout } from "./_app";

const Event: NextPageWithLayout = ({ data }: any) => {
  return (
    <div>
      <EventContent props={data} />
      <Gallery props={data} />
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

export default Event;

Event.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

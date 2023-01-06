import EventContent from "../components/eventContent";
import Footer from "../components/footer";
import Gallery from "../components/gallery";
import Nav from "../components/header";
import ScrollArrow from "../components/scrollTopButton/indext";
import { instance } from "../utils/requester";

export default function Events({ data }: any) {
  return (
    <div>
      <Nav props={data} />
      <EventContent props={data} />
      <Gallery props={data} />
      <ScrollArrow />
      <Footer props={data} />
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

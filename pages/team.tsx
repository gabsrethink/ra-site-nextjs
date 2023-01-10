import Footer from "../components/footer";
import Nav from "../components/header";
import ScrollArrow from "../components/scrollTopButton/indext";
import TeamContent from "../components/teamContent";
import { instance } from "../utils/requester";

export default function Home({ data }: any) {
  return (
    <div>
      <Nav props={data} />
      <TeamContent props={data} />
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

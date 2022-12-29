import Footer from "../components/footer";
import Nav from "../components/header";
import ProjectDescription from "../components/projectDescription";
import Slider from "../components/slider";
import { instance } from "../utils/requester";

export default function Projects({ data }: any) {
  return (
    <div>
      <Nav props={data} />
      <ProjectDescription props={data} />
      <Slider props={data} />
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

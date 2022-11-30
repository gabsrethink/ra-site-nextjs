import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/header";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_ALL_POSTS } from "../graphql/queries";

export default function Home({ posts }: any) {
  console.log(posts);
  return (
    <div className={styles.container}>
      <Nav />
      <br />
      {posts.map((val: any, i: any) => {
        return (
          <div key={i}>
            <h3>{val.attributes.title}</h3>
            <p>{val.attributes.description}</p>
          </div>
        );
      })}
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://strapi-production-67d1.up.railway.app/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_ALL_POSTS,
  });

  return {
    props: {
      posts: data.blogPosts.data,
    },
  };
}

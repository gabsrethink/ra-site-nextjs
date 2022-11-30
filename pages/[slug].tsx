import { ApolloClient, InMemoryCache } from "@apollo/client";
import React from "react";
import { GET_ALL_SLUGS, GET_INDIVIDUAL_POST } from "../graphql/queries";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

const client = new ApolloClient({
  uri: "https://strapi-production-67d1.up.railway.app/graphql",
  cache: new InMemoryCache(),
});

export default function Post({ post }: any) {
  return (
    <div>
      <h1>{post.title}</h1>
      <MDXRemote {...post.content} />
    </div>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({ query: GET_ALL_SLUGS });
  const paths = data.blogPosts.data.map((post: any) => {
    return { params: { slug: post.attributes.urlSlug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const { data } = await client.query({
    query: GET_INDIVIDUAL_POST,
    variables: { slugUrl: params.slug },
  });

  const attrs = data.blogPosts.data[0].attributes;

  const html = await serialize(attrs.content);

  return {
    props: {
      post: {
        title: attrs.title,
        content: html,
      },
    },
  };
}
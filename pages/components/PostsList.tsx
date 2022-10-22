import { NextPage } from "next";
import Link from "next/link";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { useMemo } from "react";

type Post = {
  id: string;
  title: string;
}

type PostsData = {
  posts: Post[];
}

type PostsListProps = {}

const PostsList: NextPage<PostsListProps> = () => {
  const POSTS_QUERY = gql`
    query {
      posts {
        id
        title
      }
    }
  `
  const { loading: postsLoading, data: postsData, error: postsError } = useQuery(POSTS_QUERY);

  const postsListElement = useMemo(() => {
    if (postsLoading) return <div>Loading...</div>
    if (postsError) return <div>記事の取得に失敗しました</div>

    const elements: JSX.Element[] = [];
    postsData.posts.forEach((post: Post) => {
      elements.push(
        <li key={post.id}>
          <p>タイトル: {post.title}</p>
        </li>
      )
    });

    return (
      <>{elements}</>
    )
  }, [postsLoading, postsData, postsError])
  return (
    <div>
      <ul>
        {postsListElement}
      </ul>
    </div>
  )

}

export default PostsList;

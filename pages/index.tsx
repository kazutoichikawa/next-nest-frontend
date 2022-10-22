import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PostsList from 'pages/components/PostsList';

type Props = {
  title: string;
}

const Home: NextPage<Props> = (props) => {
  return (
    <div>
      <h1>POSTS</h1>
      <PostsList />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      title: 'Hello, GraphQL',
    }
  }
}

export default Home

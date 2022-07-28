import Head from "next/head";
import Hulu from "../components/Hulu/Hulu";

import requests from "../utils/requests";

export const getServerSideProps = async (context) => {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
};

const Home = ({ results }) => {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hulu results={results} />
    </div>
  );
};

export default Home;

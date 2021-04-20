export default function Home(props) {
  console.log(props.episodes);

  return <h1>Index</h1>;
}

export async function getStaticProps() {
  const respondse = await fetch('http://localhost:3333/episodes');
  const data = await respondse.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  };
}

import { Helmet } from "react-helmet-async";
import CounterApp from "../Counter/Counter";


const Home = () => {
  return (
    <section className='homepage-container'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Custom Counter Homepage</title>
        <meta
          name="keywords"
          content="Counter App, useReducer Counter App,..."
        />
        <meta
          name="description"
          content="A simple counter app built using custom hooks and useReducer in React JS."
        />
      </Helmet>
      <h1>My Counter Value:</h1>
      
      <CounterApp/>
    </section>
  );
};

export default Home;

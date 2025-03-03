import { NavLink } from 'react-router';

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <NavLink to={'about'}>About page</NavLink>
    </>
  );
};

export default Home;

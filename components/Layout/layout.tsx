import { NextPage } from 'next';
import Header from './../Navs/Header';
import Footer from '../Navs/Footer';

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

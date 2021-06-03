import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="mt-[64px]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
export default Layout;

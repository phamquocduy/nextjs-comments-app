import Header from "./Header";
import Footer from "./Footer";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />

      <main className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</main>

      <Footer />
    </>
  );
};

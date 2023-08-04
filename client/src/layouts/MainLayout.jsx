import { Outlet } from "react-router";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

const MainLayout = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
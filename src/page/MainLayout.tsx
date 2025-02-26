import Checkout from "../parts/Checkout";
import Home from "../parts/Home";
import MenuItem from "../types/menuItems";

interface MainLayoutProps {
  dataMenu: MenuItem[];
}

export default function MainLayout({ dataMenu }: MainLayoutProps) {
  return (
    <>
      <main className="py-10 px-6 md:px-25 relative">
        <Home dataMenu={dataMenu} />
        <Checkout />
      </main>
    </>
  );
}

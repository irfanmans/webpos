import MainLayout from "./page/MainLayout";
import menuItems from "./data/menuItems";

function App() {
  return (
    <>
      <MainLayout dataMenu={menuItems} />
    </>
  );
}

export default App;

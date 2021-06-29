import Banner from "./components/Banner";
import Explanation from "./components/Explanation";
import Layout from "./components/Layout";
import Presentation from "./components/Presentation";
import StickyFooter from "./components/StickyFooter";


function App() {
  return (
    <Layout>
      <Banner />
      <Explanation />
      <Presentation />
      <StickyFooter />
    </Layout>
  );
}

export default App;

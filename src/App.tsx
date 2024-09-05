import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import BookMark from "./components/Main/BookMark";
import AppRouter from "./AppRouter";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BookMark />} />
        <Route path="*" element={<AppRouter />} />
      </Route>
    </Routes>
    // <>
    //   <Layout/>
    // </>
  );
};
export default App;

import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyles";
import FooterContainer from "./components/Footer/FooterContainer";
import NavbarContainer from "./components/Navbar/NavContainer";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import SignIn from "./pages/SignIn";
import Categories from "./pages/Categories";
import MyAccount from "./pages/MyAccount";
import Error from "./components/UI/Error";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <NavbarContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <FooterContainer />
      </div>
    </>
  );
};

export default App;

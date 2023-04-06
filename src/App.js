import GlobalStyle from "./assets/styles/GlobalStyles";
import FooterContainer from "./components/Footer/FooterContainer";
import NavbarContainer from "./components/Navbar/NavContainer";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <NavbarContainer />

        <FooterContainer />
      </div>
    </>
  );
};

export default App;

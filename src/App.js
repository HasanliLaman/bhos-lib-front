import GlobalStyle from "./assets/styles/GlobalStyles";
import FooterContainer from "./components/Footer/FooterContainer";
import NavbarContainer from "./components/Navbar/NavContainer";
import Categories from "./pages/Categories";

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

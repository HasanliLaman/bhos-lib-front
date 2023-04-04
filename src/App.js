import GlobalStyle from "./assets/styles/GlobalStyles";
import FooterContainer from "./components/Footer/FooterContainer";
import NavbarContainer from "./components/Navbar/NavContainer";
import BookGrid from "./components/Books/BooksGrid";
import GenreList from "./components/Genres/GenreList";
import Banner from "./components/UI/Banner";
import Books from "./pages/Books";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <NavbarContainer />
        <Books />
        <FooterContainer />
      </div>
    </>
  );
};

export default App;

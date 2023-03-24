import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./globals.scss";
import { LanguageProvider } from "./hoc/languageProvider";
import RoutesProvider from "./routes";

function App() {
  return (
    <>
      <LanguageProvider>
        <RoutesProvider />
      </LanguageProvider>
    </>
  );
}

export default App;

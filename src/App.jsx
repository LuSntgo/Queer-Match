import { Grommet } from "grommet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToastAnimated from "../src/components/Toast/ui-lib";
import { Reset } from "styled-reset";
import { HomePage, Discover, Recommendations } from "./pages/index";
import { theme } from "./styles/theme";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Reset/>
        <Grommet theme={theme}> 
          <ToastAnimated />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/descubra" exact element={<Discover />} />
            <Route path="/filmes" exact element={<Recommendations />} />
          </Routes>
        </Grommet>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

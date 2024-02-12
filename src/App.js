import "./App.css";
import { Container, Grid } from "@mui/material";
import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <Container className={"top_60"}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs >
          <BrowserRouter>
            <Header />
            <div className="main-content container_shadow">
              <Switch>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/">
                  <Resume />
                </Route>
              </Switch>
            </div>
          </BrowserRouter>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

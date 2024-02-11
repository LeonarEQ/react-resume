import "./App.css";

import { Container, Grid } from "@mui/material";
import Header from "./components/Header/Header";

import Profile from "./components/Profile/Profile";

function App() {
  return (
    <Container className={"top_60"}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
        <Header />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

/**/ 
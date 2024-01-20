//import hooks
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
//import components
import Header from "./Components/Header/Header";
import Hero_section from "./Components/Hero/Hero_section";
import Main from "./Components/Main/Main";
import ScrollBar from "./Components/scrollbar/Scroll_Bar";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Container,
} from "@mui/material";

// import css
export default function App() {
  let { colorMood } = useSelector((state) => state.moodSlice);

  const theme = createTheme({
    palette: {
      mode: colorMood,
    },
  });

  document.querySelector("body").style.background =
    colorMood === "dark" ? "#1d1f21" : "white";
  return (
    <ThemeProvider theme={theme}>
      <div className={`app ${colorMood}`} style={{ overflow: "hidden" }}>
        <CssBaseline />
        <Header />
        <Container maxWidth="xl">
          <Hero_section />
          <Main />
          <Outlet />
          <ScrollBar />
        </Container>
      </div>
    </ThemeProvider>
  );
}

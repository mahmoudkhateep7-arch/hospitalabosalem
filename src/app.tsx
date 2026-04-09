import { useSelector } from "react-redux";
import Hero from "./hero";
import LogoAndLinks from "./LogoAndLinks";
import type { RootState } from "./hieghtRedux";
import About from "./about";
import Info from "./info";
import Help from "./help";
import Call from "./call";
import Services from "./services";
import Prices from "./prices";
import Brand from "./brand";
import Doctors from "./doctors";
import Blog from "./blog";
import Contact from "./contact";
import News from "./news";
import Footer from "./footer";

export default function App() {
  const { navbarHeight } = useSelector((steat: RootState) => { return (steat.layout) })
  return (
    <div>
      <LogoAndLinks></LogoAndLinks>
      <Hero navbarHeight={navbarHeight}></Hero>
      <About></About>
      <Info></Info>
      <Help></Help>
      <Call></Call>
      <Services></Services>
      <Prices></Prices>
      <Brand></Brand>
      <Doctors></Doctors>
      <Blog></Blog>
      <Contact></Contact>
      <News></News>
      <Footer></Footer>
    </div>
  )
}
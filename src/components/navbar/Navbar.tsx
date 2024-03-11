import { Link } from "react-router-dom";
import "./navbar.css";
import { Container } from "../container/Container";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../main";
import { toggleTheme } from "../../features/Button";

export const NavBar = () => {
  const isToggleValue = useSelector(
    (state: RootState) => state.buttons.isToggle
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <Container>
      <div className="NavBar">
        <Link
          style={{ color: isToggleValue ? "#fff" : "#000" }}
          className="link-navbar"
          to={"/"}
        >
          Home
        </Link>
        <Link
          style={{ color: isToggleValue ? "#fff" : "#000" }}
          className="link-navbar"
          to={"/about"}
        >
          About me
        </Link>
{/*         <Link
          style={{ color: isToggleValue ? "#fff" : "#000" }}
          className="logo"
          to={"/"}
        >
          JS
        </Link> */}
        <Link
          style={{ color: isToggleValue ? "#fff" : "#000" }}
          className="link-navbar"
          to={"/portfolio"}
        >
          Portfolio
        </Link>
        <button className="theame" onClick={handleToggleTheme}>
          {/* 🌑🌕 */}

          {isToggleValue ? "🌕" : "🌑"}
        </button>
      </div>
    </Container>
  );
};

import { Link } from "react-router-dom";
import { ButtonNav } from "../../uikit/Button";
// import { ButtonNav } from "../uikit/Button";

export function ButtonLogin() {
  return (
    <ButtonNav>
      <Link to={"/login"} className="nav-link">
        Login
      </Link>
    </ButtonNav>
  );
}

import { Link } from "react-router-dom";
import { ButtonWarning } from "../uikit/Button";

export function ButtonLogout() {
  return (
    <ButtonWarning>
      <Link to={"/login"} className="nav-link">
        Logout
      </Link>
    </ButtonWarning>
  );
}

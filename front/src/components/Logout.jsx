import { Link } from "react-router-dom";
import { ButtonLogout } from "../uikit/Button";

export function LogoutButton() {
  return (
    <ButtonLogout>
      <Link to={"/login"} className="nav-link">
        Logout
      </Link>
    </ButtonLogout>
  );
}

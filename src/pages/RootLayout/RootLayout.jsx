import { Outlet } from "react-router-dom";
import NavigationMenu from "../../components/Navigation/Navigation";

export default function RootLayout() {
  return (
    <div>
      <NavigationMenu />
      <Outlet />
    </div>
  );
}

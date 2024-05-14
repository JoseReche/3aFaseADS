import { Outlet } from "react-router-dom";

export default function Body() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
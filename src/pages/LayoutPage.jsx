import { Header } from "@/components";
import { Outlet } from "react-router-dom";

export function LayoutPage() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

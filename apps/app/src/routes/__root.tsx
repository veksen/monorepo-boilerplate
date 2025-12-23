import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <nav className="flex gap-4 p-4 border-b border-neutral-800">
        <Link
          to="/"
          className="text-neutral-400 hover:text-white [&.active]:text-white [&.active]:font-bold"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-neutral-400 hover:text-white [&.active]:text-white [&.active]:font-bold"
        >
          About
        </Link>
        <Link
          to="/components"
          className="text-neutral-400 hover:text-white [&.active]:text-white [&.active]:font-bold"
        >
          Components
        </Link>
      </nav>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}

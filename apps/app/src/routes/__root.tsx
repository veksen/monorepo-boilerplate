import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <nav className="flex gap-4 border-b border-neutral-800 p-4">
        <Link
          to="/"
          className="text-neutral-400 hover:text-white [&.active]:font-bold [&.active]:text-white"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-neutral-400 hover:text-white [&.active]:font-bold [&.active]:text-white"
        >
          About
        </Link>
        <Link
          to="/components"
          className="text-neutral-400 hover:text-white [&.active]:font-bold [&.active]:text-white"
        >
          Components
        </Link>
      </nav>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}

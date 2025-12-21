import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-5xl font-bold mb-8">About</h1>
      <p className="text-neutral-400 max-w-xl text-center">
        This is a monorepo boilerplate using Turborepo, Vite, React, and
        TanStack Router with file-based routing.
      </p>
    </main>
  );
}

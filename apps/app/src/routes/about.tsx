import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-8 text-5xl font-bold">About</h1>
      <p className="max-w-xl text-center text-neutral-400">
        This is a monorepo boilerplate using Turborepo, Vite, React, and
        TanStack Router with file-based routing.
      </p>
    </main>
  );
}

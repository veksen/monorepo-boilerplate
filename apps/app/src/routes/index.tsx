import { useState } from "react";
import viteLogo from "/vite.svg";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Dialog } from "@repo/ui/dialog";
import { Field } from "@repo/ui/field";
import { Input } from "@repo/ui/input";
import reactLogo from "../assets/react.svg";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

const LINKS = [
  {
    title: "Docs",
    href: "https://turborepo.com/docs",
    description: "Find in-depth information about Turborepo features and API.",
  },
  {
    title: "Learn",
    href: "https://turborepo.com/docs/handbook",
    description: "Learn more about monorepos with our handbook.",
  },
  {
    title: "Templates",
    href: "https://turborepo.com/docs/getting-started/from-example",
    description: "Choose from over 15 examples and deploy with a single click.",
  },
  {
    title: "Deploy",
    href: "https://vercel.com/new",
    description:
      "Instantly deploy your Turborepo to a shareable URL with Vercel.",
  },
];

export function HomeComponent() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="mb-8 flex gap-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            className="h-24 p-6 transition-all hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="h-24 p-6 transition-all hover:drop-shadow-[0_0_2em_#61dafbaa]"
            alt="React logo"
          />
        </a>
      </div>

      <h1 className="mb-8 text-5xl font-bold">Vite + React</h1>

      <div className="mb-8 flex flex-col items-center gap-4 p-8">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>

        <Dialog.Root>
          <Dialog.Trigger>Open Dialog</Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Backdrop />
            <Dialog.Popup>
              <Dialog.Title>Example Dialog</Dialog.Title>
              <Dialog.Description>
                This is a Base UI dialog component.
              </Dialog.Description>
              <Field.Root>
                <Field.Label>Name</Field.Label>
                <Input placeholder="Enter your name" />
              </Field.Root>
              <Dialog.Close>Close</Dialog.Close>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>

        <p className="mt-4 text-neutral-400">
          Edit{" "}
          <code className="rounded bg-neutral-800 px-2 py-1 font-mono">
            src/App.tsx
          </code>{" "}
          and save to test HMR
        </p>
      </div>

      <div className="grid max-w-5xl gap-4 text-center lg:grid-cols-4 lg:text-left">
        {LINKS.map(({ title, href, description }) => (
          <Card href={href} key={title} title={title}>
            {description}
          </Card>
        ))}
      </div>
    </main>
  );
}

import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@repo/ui/button";
import { Dialog } from "@repo/ui/dialog";
import { Field } from "@repo/ui/field";
import { Input } from "@repo/ui/input";
import { Card } from "@repo/ui/card";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

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
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="flex gap-8 mb-8">
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

      <h1 className="text-5xl font-bold mb-8">Vite + React</h1>

      <div className="p-8 mb-8 flex flex-col items-center gap-4">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>

        <div className="flex flex-wrap gap-2">
          <Button variant="primary" size="sm">
            Primary SM
          </Button>
          <Button variant="primary">Primary MD</Button>
          <Button variant="primary" size="lg">
            Primary LG
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" size="sm">
            Secondary SM
          </Button>
          <Button variant="secondary">Secondary MD</Button>
          <Button variant="secondary" size="lg">
            Secondary LG
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="ghost" size="sm">
            Ghost SM
          </Button>
          <Button variant="ghost">Ghost MD</Button>
          <Button variant="ghost" size="lg">
            Ghost LG
          </Button>
        </div>

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
          <code className="font-mono bg-neutral-800 px-2 py-1 rounded">
            src/App.tsx
          </code>{" "}
          and save to test HMR
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-4 max-w-5xl text-center lg:text-left">
        {LINKS.map(({ title, href, description }) => (
          <Card href={href} key={title} title={title}>
            {description}
          </Card>
        ))}
      </div>
    </main>
  );
}

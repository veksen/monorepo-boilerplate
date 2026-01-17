import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@repo/ui/button";

export const Route = createFileRoute("/components")({
  component: ComponentsPage,
});

function ComponentsPage() {
  return (
    <main className="p-8">
      <h1 className="mb-8 text-3xl font-bold">Components</h1>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Button</h2>

        <div className="space-y-4">
          <div>
            <h3 className="mb-2 text-sm text-neutral-400">Primary</h3>
            <div className="flex flex-wrap items-center gap-2">
              <Button variant="primary" size="sm">
                Small
              </Button>
              <Button variant="primary" size="md">
                Medium
              </Button>
              <Button variant="primary" size="lg">
                Large
              </Button>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-sm text-neutral-400">Secondary</h3>
            <div className="flex flex-wrap items-center gap-2">
              <Button variant="secondary" size="sm">
                Small
              </Button>
              <Button variant="secondary" size="md">
                Medium
              </Button>
              <Button variant="secondary" size="lg">
                Large
              </Button>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-sm text-neutral-400">Ghost</h3>
            <div className="flex flex-wrap items-center gap-2">
              <Button variant="ghost" size="sm">
                Small
              </Button>
              <Button variant="ghost" size="md">
                Medium
              </Button>
              <Button variant="ghost" size="lg">
                Large
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

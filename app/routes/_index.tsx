import type { MetaFunction } from "@remix-run/node";
import { Button } from "@nextui-org/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex gap-4 items-center">
      Hello World
      <Button color="primary" variant="shadow">
        Shadow
      </Button>
    </div>
  );
}

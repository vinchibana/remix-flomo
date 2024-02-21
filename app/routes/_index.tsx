import type { MetaFunction } from "@remix-run/node";
import {Button} from "@nextui-org/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      Hello World
      <Button color='secondary'>Next</Button>
    </div>
  );
}


import { Button, DropdownMenu } from "@digdir/design-system-react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild={true}>
        <Button variant="tertiary">Open menu</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item href="/about">About</DropdownMenu.Item>
        <DropdownMenu.Item href="/contact">Contact</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";

export default function HoverButton() {
  return (
    <div className="mt-10 flex flex-col gap-4">
      <h3 className="text-lg font-medium">Skills</h3>
      <ul className="flex gap-4">
        <li>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="noShadow">React</Button>
            </HoverCardTrigger>
            <HoverCardContent>
              A JavaScript library for building user interfaces.
            </HoverCardContent>
          </HoverCard>
        </li>
        <li>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="noShadow">TailwindCSS</Button>
            </HoverCardTrigger>
            <HoverCardContent>
              A utility-first CSS framework for rapidly building modern designs.
            </HoverCardContent>
          </HoverCard>
        </li>
      </ul>
    </div>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Announcement } from "@/components/announcement";
import { Examples } from "@/components/examples";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <section className="flex flex-col items-center justify-center py-12 gap-2 xl:gap-4 px-4 text-center">
        <Announcement />
        <h1 className="text-2xl  md:text-3xl font-bold tracking-tight xl:text-5xl max-w-2xl">
          Build Beautiful Interfaces
        </h1>

        <p className=" max-w-xl">
          A modern React component library focused on intuitive interactions and
          seamless user experiences.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="sm">
            <Link href="/docs/components/discussion">Browse Components</Link>
          </Button>
        </div>
      </section>
      <Examples />
    </main>
  );
}

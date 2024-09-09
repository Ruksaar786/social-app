import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="p-6 font-[var(--font-geist-sans)]">
      <h1>This is home page </h1>
      <Button variant="destructive" className="my-4">
        Click here
      </Button>
    </div>
  );
}

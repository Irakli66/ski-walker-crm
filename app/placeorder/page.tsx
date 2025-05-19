import { Button } from '@/components/ui/button';

export default async function PlaceOrder() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen bg-background text-foreground">
      <h1 className="text-gray-600 text-md font-extralight">
        განათავსე შეკვეთა
      </h1>
      <Button variant="default" size="xl" className="text-xl">
        დაწყება
      </Button>
    </div>
  );
}

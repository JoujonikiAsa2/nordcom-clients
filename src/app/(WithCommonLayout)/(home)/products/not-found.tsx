import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center border rounded p-6">
          <p className="text-lg font-semibold bg-[#FF9600]  text-white py-2 rounded-full w-16 mx-auto">
            404
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-5xl">
            Product not found
          </h1>
          <p className="mt-6 text-base leading-7 text-black">
            Sorry, we couldn’t find the product you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 max-[350px]:flex-col max-[350px]:gap-y-5">
            <Link href="/" className="">
              <Button
                variant="default"
                className="flex-wrap items-center gap-2 bg-orange-400 hover:bg-[#101940] text-white"
              >
                <Home />
                Go back home
              </Button>
            </Link>
            <Link
              href="#"
              className="text-sm font-semibold text-black hover:underline hover:underline-offset-4"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

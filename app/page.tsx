import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();

  console.log(userId);
  return (
    <div className="flex flex-col items-center justify-center h-screen p-6">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="mb-8">
          <div className="text-4xl md:text-5xl font-bold text-center">
            <h1>Welcome to <br />
              <span className="text-green-500 text-5xl md:text-6xl">
                Stackie HMS
              </span>
            </h1>
          </div>

          <div className="text-center max-w-xl flex flex-col items-center justify-center">
            <p className="mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iste quo id itaque doloribus ipsa incidunt.
            </p>

            <div className="flex gap-4">
              {
                userId ? (
                  <>
                    <Link href={'/dashboard'}>
                    <Button>View Dashboard</Button>
                    </Link>
                    <UserButton />
                  </>
                ) : (
                  <>
                    <Link href="/sign-up">
                      <Button className="md:text-base font-bold bg-green-400 hover:bg-green-600">
                        Register
                      </Button>
                    </Link>

                    <Link href="/sign-in">
                      <Button className="md:text-base font-bold underline hover:text-green-600 " variant="outline">
                        Login
                      </Button>
                    </Link>
                  </>
                )
              }
            </div>
          </div>
        </div>
      </div>
      
      <footer className="w-full text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} Stackie HMS. Made with ❤️ in Indonesia. All rights reserved.
      </footer>
    </div>
  );
}

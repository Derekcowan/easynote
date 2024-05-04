import { NavBar } from "@/components/(main)/NavBar";
import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();

  if (await isAuthenticated()) {
    return redirect("/dashboard");
  }
  return (
    <div>
      <section className="flex items-center justify-center bg-background h-[95vh]">
        <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <div>
              <span className="w-auto px-6 py-3 rounded-full bg-secondary">
                <span>🤖 AI integration soon!</span>
              </span>
              <h1 className="mt-8 text-3xl font-extrabold tracking-tight leading-normal lg:text-6xl">
                A simple notes with ease
              </h1>
              <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground">
                Who needs lots of complicated functions for taking simple notes?
                Not us, easily take notes and have an great life!
              </p>
            </div>
            <div className="flex justify-center max-w-sm mx-auto mt-10">
              <RegisterLink>
                <Button variant="default" size="lg" className="w-full">
                  Get Started for free
                </Button>
              </RegisterLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "../ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserNav } from "./UserNav";

export async function NavBar() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="border-b bg-background h-[8vh] flex items-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-3xl">
            Easy<span className="text-primary">Note</span>
          </h1>
        </Link>
        <div className="flex items-center gap-x-5">
          <ThemeToggle />

          {(await isAuthenticated()) ? (
            <UserNav
              email={user?.email as string}
              image={user?.picture as string}
              name={`${user?.given_name || ""} ${user?.family_name || ""}`}
            />
          ) : (
            <div className="flex items-center gap-x-5">
              <LoginLink>
                <Button variant="secondary">Sign In</Button>
              </LoginLink>
              <RegisterLink>
                <Button>Sign Up</Button>
              </RegisterLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

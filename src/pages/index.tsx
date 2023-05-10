import { signIn, signOut, useSession } from "next-auth/react";

import { TodoList } from "@/components";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="bg-white h-screen text-gray-700">
      {session ? (
        <div className="mx-auto p-4">
          Signed in as {session.user?.email} <br />
          <button className="p-3 bg-gray-300" onClick={() => signOut()}>
            Sign out
          </button>
          <TodoList />
        </div>
      ) : (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </main>
  );
}

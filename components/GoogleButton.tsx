"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const GoogleButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  return (
    <button type="button" onClick={() => signIn("google", { callbackUrl })}>
      Sign in with Google
    </button>
  );
};

export { GoogleButton };
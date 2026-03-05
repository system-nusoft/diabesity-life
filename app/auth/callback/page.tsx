"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function CallbackHandler() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    const userParam = searchParams.get("user");

    if (token && userParam) {
      try {
        const user = JSON.parse(decodeURIComponent(userParam));

        // Store in localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        // Redirect to home
        router.push("/");

        // Force a page reload to update auth state
        window.location.href = "/";
      } catch (error) {
        console.error("Error parsing user data:", error);
        router.push("/login?error=auth_failed");
      }
    } else {
      router.push("/login?error=auth_failed");
    }
  }, [searchParams, router]);

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Completing sign in...</p>
      </div>
    </div>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      }
    >
      <CallbackHandler />
    </Suspense>
  );
}

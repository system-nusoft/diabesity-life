import CreatePostClient from "@/components/CreatePostClient";
import { Suspense } from "react";

export default function CreatePostPage() {
  return (
    <Suspense>
      <CreatePostClient />
    </Suspense>
  );
}

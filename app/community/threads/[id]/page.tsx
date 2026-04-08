import CommunityThreadClient from "@/components/CommunityThreadClient";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ThreadPage({ params }: Props) {
  const { id } = await params;
  return <CommunityThreadClient threadId={id} />;
}

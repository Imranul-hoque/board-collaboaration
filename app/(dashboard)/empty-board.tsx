"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useOrganization } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const EmptyBoard = () => {
  const router = useRouter();
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization?.id) return null;

    mutate({
      title: "Untitled",
      orgId: organization?.id,
    })
      .then((id) => {
        router.push(`/board/${id}`)
      })
      .catch((error) => toast.error(error));
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Image width={200} height={200} src={"/note.svg"} alt="Empty" />
      <h2 className="text-2xl font-bold mt-2">Create your first board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-3">
        <Button disabled={pending} onClick={onClick} size={"lg"}>
          Create Board
        </Button>
      </div>
    </div>
  );
};

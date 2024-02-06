"use client";

import { Hint } from "@/components/hint";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";

import { Plus } from "lucide-react";

export const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint label="Create" side="right" align="start" sideOffset={40}>
            <button className="h-full w-full rounded-md flex items-center justify-center bg-white/25 transition hover:opacity-100 opacity-60 ">
              <Plus className="text-white" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="border-0 p-0 bg-transparent max-w-[480px]">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};

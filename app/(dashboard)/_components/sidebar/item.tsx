"use client";

import { useOrganization, useOrganizationList } from '@clerk/nextjs';

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Hint } from '@/components/hint';

interface ItemProps {
    name: string;
    id: string;
    imageUrl: string;
}

export const Item = ({ name, id, imageUrl }: ItemProps) => {
    
    const { organization } = useOrganization();
    const { setActive } = useOrganizationList();

    const onClick = () => {
        if (!setActive) return;

        setActive({ organization : id })
    }

    const active = organization?.id === id;

    return (
        <div className="aspect-square relative">
            <Hint label={name} side='right' align='start' sideOffset={18}>
          <Image
            fill
            onClick={onClick}
            alt={name}
            src={imageUrl}
            className={cn(
              "rounded-md cursor-pointer opacity-75 transition hover:opacity-100",
              active && "opacity-100"
            )}
          />
      </Hint>
        </div>
    );
}
"use client";

import { 
    Tooltip,
    TooltipProvider,
    TooltipContent,
    TooltipTrigger
} from "@/components/ui/tooltip";
 
interface HintProps {
    children: React.ReactNode;
    label: string;
    sideOffset?: number;
    alignOffset?: number;
    side?: "left" | "right" | "top" | "bottom";
    align?: "start" | "center" | "end";
}

export const Hint = ({
    children,
    label,
    sideOffset,
    alignOffset,
    align,
    side
}: HintProps) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>{children}</TooltipTrigger>
                <TooltipContent
                    side={side}
                    align={align}
                    sideOffset={sideOffset}
                    alignOffset={alignOffset}
                    className="bg-black text-white border-black"
                >
                    <p className="font-semibold caption-top">
                    {label}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
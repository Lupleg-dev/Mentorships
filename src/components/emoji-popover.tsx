import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

  import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { useState } from "react";

  
  interface EmojiPopoverProps {
    children: React.ReactNode;
    hint?: string;
    onEmojiSelect: (emoji: any) => void;
  }


export const EmojiPopover = ({
    children,
    hint = "Emoji",
    onEmojiSelect,
}: EmojiPopoverProps
) => {
    const [ popoverOpen, setPopoverOpen ] = useState(false);
    const [ tooltipOpen, setTooltipOpen ] = useState(false);



    return (
        <TooltipProvider>
            <Popover open={popoverOpen} onOpenChange={setPopoverOpen} >
            {children}

            </Popover>
        </TooltipProvider>
    )
}
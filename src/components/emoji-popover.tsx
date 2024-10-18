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
    return (
        <div>
            {children}
        </div>
    )
}
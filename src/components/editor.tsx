import Quill, { type QuillOptions } from "quill";
import { PiTextAa } from "react-icons/pi";
import { MdSend } from "react-icons/md";

import "quill/dist/quill.snow.css";
import { useEffect, useRef } from "react";
import { ImageIcon, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hint } from "./hint";

interface EditorProps {
  variant?: "create" | "update";
}

const Editor = ({ variant = "create" }: EditorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const editorContainer = container.appendChild(
      container.ownerDocument.createElement("div")
    );

    const options: QuillOptions = {
      theme: "snow",
    };

    new Quill(editorContainer, options);

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col border-slate-200 rounded-md overflow-hidden focus-within:border-slate-300 focus-within:shadow-sm transition bg-white">
        <div ref={containerRef} className="h-full ql-custom " />
        <div className="flex px-2 pb-2 z-[5]">
          <Button size="iconSm" variant="ghost" disabled={false} onClick={() => {}}>
            <PiTextAa className="size-4" />
          </Button>

          <Button size="iconSm" variant="ghost" disabled={false} onClick={() => {}}>
            <Smile className="size-4" />
          </Button>

          <Button size="iconSm" variant="ghost" disabled={false} onClick={() => {}}>
            <ImageIcon className="size-4" />
          </Button>
          <Button >
            <MdSend className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Editor;

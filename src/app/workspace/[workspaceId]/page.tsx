"use client";

import { useGetChannels } from "@/features/channels/api/use-get-channels";
import { useCreateChannelModal } from "@/features/channels/store/use-create-channel-modal";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { useRouter } from "next/navigation";

const WorkspaceIdPage = () => {
  const workspaceId = useWorkspaceId();
  const [open, setOpen] = useCreateChannelModal();
  const router = useRouter();

  const { data: workspace, isLoading: workspaceLoading } = useGetWorkspace({ id: workspaceId });
  const { data: channels, isLoading: channelsLoading } = useGetChannels({ workspaceId }); 

  return <div>Workspace id Page </div>;
};

export default WorkspaceIdPage;

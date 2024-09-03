import { useMutation } from "convex/react";
import { useCallback, useState } from "react";

import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";

type RequestType = { name: string } ;
type ResponseType = Id<"workspaces"> | null;

type Options = {
  onSuccess?: (data: ResponseType) => void;
  onError?: (error: Error) => void;
  onSettled?: () => void;
  throwErrors?: boolean;
};

export const useCreateWorkspace = () => {
  const [data, setData] = useState<ResponseType>(null);
  const [error, setError] = useState<Error | null>(null);

  const [isPending, setIsPending] = useState(false);  
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSettled, setIsSettled] = useState(false);


  const mutation = useMutation(api.workspaces.create);

  const mutate = useCallback(
    async (values: any, options?: Options) => {
      try {
        setData(null);
        setError(null);
        setIsPending(true);
        setIsSuccess(false);
        setIsError(false);
        setIsSettled(false);
        




        const response = await mutation(values);
        options?.onSuccess?.(response);
        return response;
      } catch (error) {
        options?.onError?.(error as Error);

        if (options?.throwErrors) {
          throw error;
        }
      } finally {
        options?.onSettled?.();
      }
    },
    [mutation]
  );

  return {
    mutate,
  };
};

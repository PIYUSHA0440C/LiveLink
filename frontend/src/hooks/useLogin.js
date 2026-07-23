import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../lib/api";
import { useState } from "react";

const useLogin = () => {

    const queryClient = useQueryClient();
    const [isConnecting, setIsConnecting] = useState(false);

    const {
        mutate,
        isPending,
        error
    } = useMutation({
        mutationFn: login,
        retry: (failureCount, error) => {
            if (error.response?.status >= 500 || error.code === 'ERR_NETWORK') {
                setIsConnecting(true);
                return failureCount < 20;
            }
            return false;
        },
        retryDelay: 2000,
        onSuccess: () => {
            setIsConnecting(false);
            queryClient.invalidateQueries({
                queryKey: ["authUser"]
            });
        },
        onError: () => {
            setIsConnecting(false);
        }
    });

    return { isPending, error, loginMutation: mutate, isConnecting };
}

export default useLogin

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { signup } from '../lib/api';
import { useState } from 'react';

const useSignup = () => {

    const queryClient = useQueryClient();
    const [isConnecting, setIsConnecting] = useState(false);

    const { mutate, isPending, error } = useMutation({
        mutationFn: signup,
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
            queryClient.invalidateQueries({ queryKey: ["authUser"] });
        },
        onError: () => {
            setIsConnecting(false);
        }
    })

    return { isPending, error, signupMutation: mutate, isConnecting };
}

export default useSignup

import { useQuery } from '@tanstack/react-query'
import { getAuthUser } from '../lib/api'
import { useState, useEffect } from 'react'

const useAuthUser = () => {
    const [isConnecting, setIsConnecting] = useState(false);

    const authUser = useQuery({
        queryKey: ['authUser'],
        queryFn: getAuthUser,
        retry: (failureCount, error) => {
            if (error.response?.status >= 500 || error.code === 'ERR_NETWORK') {
                setIsConnecting(true);
                return failureCount < 20; // Retry up to 20 times to handle Render cold start
            }
            return false;
        },
        retryDelay: 3000,
    })

    useEffect(() => {
        if (authUser.isSuccess || authUser.isError) {
            setIsConnecting(false);
        }
    }, [authUser.isSuccess, authUser.isError]);

    return { isLoading: authUser.isLoading, authUser: authUser.data?.user, isConnecting }
}

export default useAuthUser

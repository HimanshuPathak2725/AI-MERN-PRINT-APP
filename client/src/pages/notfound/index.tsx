import React from 'react'
import { authClient } from '@/lib/auth-client'

const NotFound = () => {
    const { isPending, } = authClient.useSession()

    if (isPending) return null;
    return (
        <div>NotFound</div>
    )
}

export default NotFound;
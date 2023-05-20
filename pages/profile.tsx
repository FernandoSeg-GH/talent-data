import { Session } from '@/lib/types'
import { useSession } from 'next-auth/react'
import React from 'react'

type Props = {}

export default function profile({}: Props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {data: session} = useSession({
        required: true,
        onUnauthenticated() {
            // Redirect to login page
            return { redirect: '/login?callbackUrl=/profile'  }
            }

    })
  return (
    <div>
        <h1>Profile</h1>
        <p>{session?.user?.email}</p>
    </div>
  )
}
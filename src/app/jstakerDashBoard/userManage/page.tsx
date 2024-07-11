import React from 'react'
import { auth } from '@/auth';
async function page() {
  const session = await auth();
  // console.log({session});
  return (
    <div>
      用户管理
      <p> {JSON.stringify(session) }</p>
    </div>
  )
}

export default page

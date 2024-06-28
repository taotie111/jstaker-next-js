'use client'
import React from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
function NextBreadcrumb() {
    let pathname = usePathname()


  return (
    <div>

        {pathname}
    </div>
  )
}

export default NextBreadcrumb

"use client"

import Mainnavber from "@/components/Shared/Mainnavber"
import { useUser } from "@/lib/auth"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = useUser()
  console.log(user);
  const route = useRouter()

  if (user === null) {
    return route.push("/login")
  }

  return (
    <section >
      <Mainnavber />
<div className="pb-20"></div>
      {children}
    </section>
  )
}
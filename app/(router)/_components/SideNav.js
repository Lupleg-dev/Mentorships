import { BadgeIcon, BookOpen, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function SideNav() {
    const menu=[
        {
            id:1,
            name:"All Courses",
            icon:BookOpen
        },
        {
            id:2,
            name:"Membership",
            icon:BadgeIcon
        },
        {
            id:3,
            name:"Be Instructor",
            icon:GraduationCap
        }
    ]
  return (
    <div>
        <Image src="/logo.svg"
        alt="logo"
        width={170}
        height={80}
        />
    </div>
  )
}

export default SideNav
import React from "react";
import Link from 'next/link'
import MemberEntry from "./MemberEntry";


export function sum (a, b) {
  return a + b;
}

export function substract (a, b) {
  return a-b;
}

export function cloneArray (array)
{
  return [...array];
}

const teamMembers = [
  { firstname: 'Julia', lastname: 'Meier', position: 'Recruiting Specialist', age: 29, gender: 'female' },
  { firstname: 'Michael', lastname: 'Schneider', position: 'HR Manager', age: 45, gender: 'male' },
  { firstname: 'Sandra', lastname: 'Müller', position: 'Talent Acquisition Lead', age: 38, gender: 'female' },
  { firstname: 'Tom', lastname: 'Wagner', position: 'Senior Recruiter', age: 33, gender: 'male' },
  { firstname: 'Anna', lastname: 'Schulz', position: 'Recruitment Coordinator', age: 26, gender: 'female' }
  ]

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      {
        teamMembers.map((x) => 
        {
          return <MemberEntry teamMember={x} key={x.firstname}></MemberEntry>
        })
    
        }  
      </div>
  )
}

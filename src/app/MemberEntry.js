import React from "react";

export default function MemberEntry( props)
{
    return (
        <div >
            {
                props.teamMember != undefined ? 
                    <div>
                        <h3>{props.teamMember.firstame} {props.teamMember.lastname}</h3>
                        <p>{props.teamMember.position}</p>
                        <p>{props.teamMember.age}</p>
                        <p>{props.teamMember.gender}</p>
                    </div>
                :
                    <h1>no</h1>
            }
        </div>
    )
}
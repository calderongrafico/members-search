import React from 'react';
import './member-card.scss'

const MemberCard = (props) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${props.member.id}?set=set6`} alt="Member" width="150"/>
      <p><b>{props.member.name}</b></p>
      <span>{props.member.email}</span>
    </div>
  )
};

export default MemberCard;
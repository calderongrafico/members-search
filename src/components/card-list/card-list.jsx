import React from 'react';
import MemberCard from '../member-card/member-card'
import './card-list.scss';

const CardList = (props) => {
  return(
    <div className="card-list">
      {
        props.members.map((member) => {
          return <MemberCard key={member.id} member={member}/>
        })
      }
    </div>   
  )
}

export default CardList;
import React from 'react'
import UserPanel from './UserPanel'

export default function TitlePanel({ currentUser }) {
  return (
    <div className="headerPanel">
      <div className="titleTab">
        <div className="settingL">
          <UserPanel currentUser={currentUser}/>
        </div>
        <div className="title" style={{background: 'red'}}>
          타임파인더
        </div>
        <div className="settingR" style={{background: 'green', height: '100%'}}>
        </div>
      </div>
    </div>
  );
}

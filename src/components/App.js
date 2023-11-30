import React from 'react'
import { Grid } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import TitlePanel from './TitlePanel';
import '../../src/css/about/styles.css'

export default function App() {
  const {
    currentUser,
  } = useSelector(({ user }) => ({
    currentUser: user.currentUser,
  }))

  return (
    <div className="app component">
      <TitlePanel currentUser={currentUser}/>
    </div>
  )
}

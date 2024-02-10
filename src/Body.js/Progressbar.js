import React from 'react'

const Progressbar = ({progress}) => {
    const Parentdiv = {
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 20
      }
    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor:"green",
       borderRadius:40,
        textAlign: 'right'
      }
      const progresstext = {
        padding: 2
      }
  return (
    <div><div style={Parentdiv}>
    <div style={Childdiv}>
        <span style={progresstext}></span>
      </div>
  </div></div>
  )
}

export default Progressbar
import React from 'react'
function DownbarButton({imagen, onClickFunction}) {
  return (
    <button className="Down-bar-button" onClick={onClickFunction}>
      <img className="Down-bar-button-img" src={imagen}></img>
    </button>
  )
}

export default DownbarButton;
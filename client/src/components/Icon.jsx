import React from 'react'

function categoryToIconName(category) {

  if (category === "football") {
    return "futbol"
  }
  else if (category === "dollar") {
    return "money-bill-wave"
  }
  else return category;

}

export const Icon = (props) => {
  return (
    <div className="icon">


      {console.log(props.category)}
      <i className={"fas fa-" + categoryToIconName(props.category)}></i>
    </div>
  )
}

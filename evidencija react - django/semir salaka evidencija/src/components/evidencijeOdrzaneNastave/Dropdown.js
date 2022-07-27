import React from 'react'

const Dropdown = ({text, items}) => {
    return (
        <label>
          {text}
          <select defaultValue="" >
              {items.map((item, key)=>{
                  return(
                      <option key= {key} value={item}>{item}</option>
                  )
              })}
          </select>
        </label>
    )
}

export default Dropdown


import React from 'react'
import cn from 'classnames'
export const ItemList = ({props}) => {
  const {items,listStyle=null,itemStyle=null} = props;

  return(
    <ul className={cn('list-group', ...listStyle)}>
          {items.map(({text,style})=>{
          <li className={cn('list-group-item', ...itemStyle)}>
              <span className={cn(...style)}>{text}</span>
          </li>})
        }
    </ul>
  )
}
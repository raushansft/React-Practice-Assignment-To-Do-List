

import React from 'react'
import TodoListItem from './TodoListItem'

export default function ToDoList({data}) {

   

  return (
    <div>
        {
            data.map((item)=>(
                <TodoListItem color={"green"} title={item.title}/>
              
            ))
        }
      
    </div>
  )
}

import React from 'react'

const ListStudents = (props) => {
  return (
    <div className="list_students_div"> 
        {
            props.students.map((name, key)=><p key={key}>{name}</p>)
        }
    </div>
  )
}

export default ListStudents

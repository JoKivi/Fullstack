import React from 'react'



const Course = ({ course }) => {
  console.log(course);
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const Header = ({ course }) => {
  return (
    <h3>{course.name}</h3>
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  )
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises} exercises
    </p>
  )
}

const Total = ({ course }) => {
  const totalSum = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <p><strong>Total of {totalSum} exercises</strong></p>
  )
}


export default Course

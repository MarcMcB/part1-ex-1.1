import React from 'react'


const Header = (props) => {
  return (
    <div>
    <p>{props.course}</p>
    </div>
  )
}
const Total = (props) => {
  return (
  
    <div>
    <p>{props.exercisesT}</p>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
    <p>{props.part1} {props.exercises1} {props.part2} {props.exercises2}{props.part3} {props.exercises3}</p>
    </div>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of component'
  const exercises3 = 14
  const exercisesT = {exercises1} + {exercises2} +{exercises3}
  

  return (
    <div>
    <Header course={course} />
    <Content part1={part1} exercises1={exercises1} />
    <Content part2={part2} exercises2={exercises2} />
    <Content part3={part3} exercises3={exercises3}/>
    <Total exercisesT={exercises1+exercises2+exercises3} />
 </div>
  )
 
}
export default App 
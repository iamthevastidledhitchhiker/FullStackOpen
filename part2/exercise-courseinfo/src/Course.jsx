//Header component. Render the name of the course.
const  Header = ({course}) => {
    return(
        <h1>{course.name}</h1>
    )
}

const Part = ({part}) => {
    return (
        <p>{part.name} {part.exercises}</p>
    )
}


//Content component. Render part name and number of exercises.
const Content = ({parts}) => {
    return (
        <div>
            {parts.map(part => <Part key={part.name} part={part} />)}
        </div>
    )
}

//Total component. Render the total number of exercises.
const Total = ({parts}) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0);
    return(
        <p>Number of exercises {total}</p>
    )
}

const Course = ({course}) => {
    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

export default Course;
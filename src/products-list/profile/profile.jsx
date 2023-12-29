
const ToDo = ({ name, isReady }) => {
  return (
    <li className="toDoList">
      {name} {isReady && '✔'}
    </li>
  );
}

export const MyToDoList = () => {
  return (
    <>
      <h3>To do:</h3>
      <ul>
        <ToDo
          isReady={true}
          name="take care of my eggs"
        />
        <ToDo
          isReady={false}
          name="find big fish"
        />
      </ul>
    </>
  )
}
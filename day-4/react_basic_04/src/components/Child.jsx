import Parent from "./Parent"

function Child(props) {
  return (
    <>
        <div>Child : {props.age}</div>
        <Parent />
    </>
  )
}

export default Child
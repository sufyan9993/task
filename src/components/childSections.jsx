const Private = ({ user, setDraggedItem }) => {
    return (
        <div>
            {user.map((item, i) => <div className="elements" key={i} > {item}</div>)}
        </div>
    )
}
const Public = ({ data }) => {
    return (
        <div>
            {data.map((item, i) => <div className="elements" key={i} >{item}</div>)}
        </div>
    )
}
export { Public, Private }

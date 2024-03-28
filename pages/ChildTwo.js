export default function ChildTwo({childParent}){
    const data = " this is data from the child page to the parent page"
    return(
        <>
        <button onClick={() => childParent(data)}>Click Child to parent</button>
        </>
    )
}
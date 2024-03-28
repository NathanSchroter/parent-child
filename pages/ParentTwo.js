import { useState } from "react";
import ChildTwo from "./ChildTwo";

export default function ParentTwo() {
const [data, setdata] = useState();

const childToParent = (childData ) => { 
    setdata(childData)
}
return(
    <>
    {data}
    <ChildTwo childParent={childToParent}/>
    </>
)
}
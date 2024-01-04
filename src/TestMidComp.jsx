import CompProvider from "./testComp"
import { useContext } from "react"

export default function TestMidComp(){
const {test} = useContext(CompProvider)
console.log(test)

    return(
        <>
            <div>test mid component : {test}</div>
        </>
    )
}
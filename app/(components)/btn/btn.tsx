import { ButtonTypes } from "@/types/types"
export default function Btn(props:ButtonTypes) {
  return (
    <button className="button" onClick={props.onClickFn}>{props.title}</button>
  )
}

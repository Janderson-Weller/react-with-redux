import { FC } from "react"

interface ButtonProps {
    bgColor?: string;
    text: string;
    onClick: () => void;
}

export const Button:FC<ButtonProps> = (props) => {
    return <button style={{"backgroundColor": props.bgColor}} onClick={props.onClick} >{props.text}</button>
}
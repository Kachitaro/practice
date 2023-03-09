import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  color: string
  name: string
  onClick: any
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { color, name, onClick } = props;
  const [status , setStatus] = useState(false);
  const [title, setTitle] = useState(name)

  function handleClick() {
    setStatus(!status)
    if(!status){
      if(color === 'red'){
        setTitle('Tai dep')
      }
      if(color === 'blue'){
        setTitle('Tai handsome')
      }
      if(color === 'yellow'){
        setTitle('Tai very')
      }
    } else{
      setTitle(name)
    }
    onClick(title)
  }

  return (
    <Link to={`/detail?color=${color}`}
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {title}
    </Link>
  );
}

export default Button;
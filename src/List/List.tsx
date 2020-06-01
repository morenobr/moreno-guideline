import React from 'react';
import { List, ListProps } from "../unstyled/List";

interface ListStyledProps extends ListProps{
  className?: string;
}

export default (props:ListStyledProps) => {
  return (
    <List {...props} className={`mg-list${props.className?` ${props.className}`:''}`} />
  );
}

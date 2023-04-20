import React from "react";
import { listType } from "../model";


interface UserItemProps {
  list: listType;
}
const List=({list}: UserItemProps) =>{
  return (
      <li>
        {list.title}
      </li>
    );
};

export default List;
import { useState } from "react";
import { IFilterGroup } from "../../models/models";
import {SlArrowDown, SlArrowUp} from "react-icons/sl"

export default function FilterGroup({options, onChangeFilter}:IFilterGroup) {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="custom-select">
        {isOpen? <SlArrowDown className="arrow" />:<SlArrowUp className="arrow" /> }
        <select onChange={e => onChangeFilter(e.target.value)} onFocus={() => setIsOpen(true)} onBlur={() => setIsOpen(false)}>
          <option value="" disabled selected hidden>Choose option</option>
          {options.map(option=>(
                    <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    );
  }
import { useState } from "react";
import { IFilterGroup } from "../../models/models";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FilterGroup({options, onChangeFilter}:IFilterGroup) {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="custom-select">
        <FontAwesomeIcon
          className="arrow"
          icon={isOpen ? faChevronUp : faChevronDown}
        />
        <select onChange={e => onChangeFilter(e.target.value)} onFocus={() => setIsOpen(true)} onBlur={() => setIsOpen(false)}>
          <option value="" disabled selected hidden>Choose option</option>
          {options.map(option=>(
                    <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    );
  }
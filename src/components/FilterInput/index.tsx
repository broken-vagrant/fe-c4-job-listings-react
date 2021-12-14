import { useContext, useState } from 'react';
import { JobsDispatch } from '../../App';
import FilterItem from './FilterItem';
import { KeyboardEvent } from 'react';

const FilterInput = ({ filters }: { filters: string[] }) => {
  const dispatch = useContext(JobsDispatch)!;
  const [inputVal, setInputVal] = useState('');

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      dispatch({ type: 'filter-add', payload: inputVal });
      setInputVal('')
    }
  }
  return (
    <div className="input-filter-wrapper">
      <div className="input-filter">
        <div className="wrapper">
          <div className="field-filters">
            {filters.map((val) => (
              <FilterItem value={val} key={val} />
            ))}
          </div>
          <div className="field-body">
            <input
              type="text"
              name="filter"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyUp={handleKeyUp}
            />
          </div>
        </div>
        <div className="field-clear">
          <button
            className="clear"
            type="button"
            onClick={() => dispatch({ type: 'clear' })}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterInput;

import { useContext, useState } from 'react';
import { JobsDispatch } from '../../App';
import FilterItem from './FilterItem';
import { KeyboardEvent } from 'react';
import classes from './index.module.scss';

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
    <div className={classes.input__filter__wrapper}>
      <div className={classes.input__filter}>
        <div className={classes.wrapper}>
          <div className={classes.left__adornment}>
            {filters.map((val) => (
              <FilterItem value={val} key={val} />
            ))}
          </div>
          <div className={classes.field__body}>
            <input
              type="text"
              name="filter"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyUp={handleKeyUp}
              aria-label="type filter or key word and press enter"
            />
          </div>
        </div>
        <div className={classes.right__adornment}>
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

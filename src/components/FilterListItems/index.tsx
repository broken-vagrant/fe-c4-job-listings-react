const FilterListItems = () => {
  return (
    <div className="input-filter-wrapper">
      <div className="input-filter">
        <div className="wrapper">
          <div className="field-filters">
          
            <div className="filter-item">
              <span>Frontend</span>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                  <path
                    fill="#FFF"
                    fill-rule="evenodd"
                    d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                  />
                </svg>
              </button>
            </div>
            <div className="filter-item">
              <span>Frontend</span>
              <button onclick="remove(this)">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                  <path
                    fill="#FFF"
                    fill-rule="evenodd"
                    d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="field-body">
            <input type="text" name="filter" />
          </div>
        </div>
        <div className="field-clear">
          <button className="clear" onclick="clear_(this)" type="button">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterListItems;

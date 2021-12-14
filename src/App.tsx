import './App.css';
import data from './data';
import { createContext, Dispatch, useEffect, useReducer } from 'react';
import { Action, JobItem } from './type';
import Header from './components/Header';
import ListCards from './components/ListCards';
import FilterInput from './components/FilterInput';

const initialState = {
  jobs: data,
  filters: ['Frontend', 'CSS', 'JavaScript'],
};

const filterJobs = (jobs: JobItem[], filters: string[]) => {
  if (filters.length === 0) {
    return jobs;
  }
  return jobs.map((job) => {
    let score = 0;
    if (filters.findIndex((filter) => filter.toLowerCase() === job.role.toLowerCase()) !== -1) {
      score++;
    }
    if (filters.findIndex((filter) => filter.toLowerCase() === job.level.toLowerCase()) !== -1) {
      score++;
    }
    filters.forEach((filter) => {
      if (job.languages.findIndex((lang) => lang.toLowerCase() === filter.toLowerCase()) !== -1) {
        score++;
      }
    })
    filters.forEach((filter) => {
      if (job.tools.findIndex((tool) => tool.toLowerCase() === filter.toLowerCase()) !== -1) {
        score++;
      }
    })
    return {
      job,
      score
    }
  }).filter((item) => item.score !== 0).sort((a, b) => b.score - a.score).map((item) => item.job);
}

export const JobsDispatch = createContext<Dispatch<Action> | null>(null);

const jobsReducer = (
  state: { jobs: JobItem[]; filters: string[] },
  action: Action
) => {
  switch (action.type) {
    case 'filter-add':
      if (state.filters.findIndex((filter) => filter.toLowerCase() === action.payload.toLowerCase()) === -1) {
        const newFilters = [...state.filters, action.payload];
        return { jobs: filterJobs(state.jobs, newFilters), filters: newFilters };
      }
      return state;
    case 'clear':
      return { ...initialState, filters: [] };
    case 'filter-remove':
      if (state.filters.findIndex((filter) => filter.toLowerCase() === action.payload.toLowerCase()) !== -1) {
        const newFilters = state.filters.filter(
          (item) => item !== action.payload
        );
        if (newFilters.length === 0) {
          return {
            ...initialState, filters: []
          };
        }
        return { jobs: filterJobs(state.jobs, newFilters), filters: newFilters };
      }
      return state;
    case 'init':
      return { ...initialState, jobs: filterJobs(initialState.jobs, state.filters) };
    default:
      return state;
  }
};

function App() {
  const [data, dispatch] = useReducer(jobsReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'init' });
  }, []);
  return (
    <JobsDispatch.Provider value={dispatch}>
      <div className="App">
        <Header />
        <main>
          <div className="container">
            <FilterInput filters={data.filters} />
          </div>
          <ListCards jobs={data.jobs} />
        </main>
      </div>
    </JobsDispatch.Provider>
  );
}

export default App;
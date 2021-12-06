import FilterListItems from './FilterListItems';

const Header = ({ filters }: { filters: string[] }) => {
  return (
    <header className="hero">
      <div className="container">
        <FilterListItems filters={filters} />
      </div>
    </header>
  );
};
export default Header;

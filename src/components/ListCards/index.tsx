import { JobItem } from '../../type';
import ListItem from './ListCard';

const ListCards = ({ jobs }: { jobs: JobItem[] }) => {
  return (
    <div className="container">
      <section className="jobs">
        {jobs.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
};
export default ListCards;

import { JobItem } from '../../type';
import ListItem from './ListCard';
import classes from './index.module.scss';

const ListCards = ({ jobs }: { jobs: JobItem[] }) => {
  return (
    <div className="container">
      <section className={classes.jobs}>
        {jobs.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
};
export default ListCards;

import { JobItem } from '../type';
import ListItem from './ListItem';

const ListItems = (data: JobItem[]) => {
  return (
    <div className="container">
      <section className="jobs">
        {data.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
};
export default ListItems;

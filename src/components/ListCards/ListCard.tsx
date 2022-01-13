import React from 'react';
import { JobItem } from '../../type';
import InfoTag from '../InfoTag';
import Tag from '../Tag';
import classes from './list-card.module.scss';

const ListCard = React.memo(({ item }: { item: JobItem }) => {
  return (
    <div className={`${classes['list-card']} ${item.featured ? classes.featured : ''}`}>
      <div className={classes.info}>
        <div className={classes.logo}>
          <img src={item.logo} alt="photosnap company logo" />
        </div>
        <div className={classes.details}>
          <div className={classes.details__top}>
            <span className={classes.name}>{item.company}</span>
            <span className={classes.details__top_tags}>
              {item.new ? <Tag>New!</Tag> : null}
              {item.featured ? <Tag fill="dark" >Featured</Tag> : null}
            </span>
          </div>
          <a href="javascript:void()" className={classes.title}>
            <h1>{item.position}</h1>
          </a>
          <div className={classes.details__bottom}>
            <span className={classes.dot}>{item.postedAt}</span>
            <span className={classes.dot}>{item.contract}</span>
            <span>{item.location}</span>
          </div>
        </div>
      </div>
      <div className={classes.tags}>
        {item.role ? <InfoTag>{item.role}</InfoTag> : null}
        {item.level ? <InfoTag>{item.level}</InfoTag> : null}
        {item.languages && item.languages.length !== 0
          ? item.languages.map((lang, i) => <InfoTag key={i}>{lang}</InfoTag>)
          : null}
        {item.tools && item.tools.length !== 0
          ? item.tools.map((tool, i) => <InfoTag key={i}>{tool}</InfoTag>)
          : null}
      </div>
    </div>
  );
});

export default ListCard;

import React from 'react';
import { JobItem } from '../../type';
import InfoTag from '../InfoTag';
import Tag from '../Tag';

const ListCard = React.memo(({ item }: { item: JobItem }) => {
  return (
    <article className="list-card featured">
      <div className="info">
        <div className="logo">
          <img src={item.logo} alt="photosnap company logo" />
        </div>
        <div className="details">
          <div className="top-details">
            <span className="name">{item.company}</span>
            <span className="top-details-tags">
              {item.new ? <Tag>New!</Tag> : null}
              {item.featured ? <Tag fill="dark" >Featured</Tag> : null}
            </span>
          </div>
          <a href="#" className="title">
            <div>{item.position}</div>
          </a>
          <div className="bottom-details">
            <span className="dot">{item.postedAt}</span>
            <span className="dot">{item.contract}</span>
            <span>{item.location}</span>
          </div>
        </div>
      </div>
      <div className="tags">
        {item.role ? <InfoTag>{item.role}</InfoTag> : null}
        {item.level ? <InfoTag>{item.level}</InfoTag> : null}
        {item.languages && item.languages.length !== 0
          ? item.languages.map((lang, i) => <InfoTag key={i}>{lang}</InfoTag>)
          : null}
        {item.tools && item.tools.length !== 0
          ? item.tools.map((tool, i) => <InfoTag key={i}>{tool}</InfoTag>)
          : null}
      </div>
    </article>
  );
});

export default ListCard;

import { ReactNode } from 'react';
import classes from './index.module.scss';

const InfoTag = ({ children }: { children: ReactNode }) => {
  return <button className={classes["info-tag"]} >{children}</button>;
};

export default InfoTag;

import { ReactNode } from 'react';
import classes from './index.module.scss';

const Tag = ({ children, fill }: { children: ReactNode, fill?: 'primary' | 'dark' }) => {
  return <span className={`${classes.tag} ${fill === 'dark' ? classes.dark : classes.primary}`}>{children}</span>;
};

export default Tag;

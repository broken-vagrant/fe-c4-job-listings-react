import { ReactNode } from 'react';

const Tag = ({ children, fill }: { children: ReactNode, fill?: 'primary' | 'dark' }) => {
  return <span className={`tag ${fill === 'dark' ? 'dark' : ''}`}>{children}</span>;
};

export default Tag;

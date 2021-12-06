import { ReactNode } from 'react';

const InfoTag = ({ children }: { children: ReactNode }) => {
  return <button className="info-tag">{children}</button>;
};

export default InfoTag;

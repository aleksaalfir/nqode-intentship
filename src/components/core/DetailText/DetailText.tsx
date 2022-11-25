import React from 'react';
import classes from './DetailText.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface DetailTextProps {
  icon?: IconDefinition;
  text: string | number;
}

const DetailText: React.FC<DetailTextProps> = ({ icon, text }) => {
  return (
    <div className={classes['c-detail-text']}>
      {icon ? <FontAwesomeIcon icon={icon} /> : null} {text}
    </div>
  );
};

export default DetailText;

import React from 'react';
import style from './o-aside-panel.css';

export default ({ heading, children }) => (
  <div data-o-component="o-aside-panel" className={style['o-aside-panel']}>
  	<div className={style['o-aside-panel__header']}>
  		<h3 className={style['o-aside-panel__heading']}>{heading}</h3>
  	</div>
    {style}
  	<div className={style['o-aside-panel__body']}>
  		{children}
  	</div>
  </div>
);

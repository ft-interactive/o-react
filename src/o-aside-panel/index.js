import React from 'react';
import style from './index.scss';

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

export const tabbed = ({ heading, children }) => (
  <div data-o-component="o-aside-panel" className={style['o-aside-panel']}>
    <div className={style['o-aside-panel__header']}>
      <h3 className={style['o-aside-panel__heading']}>{heading}</h3>
          <ul data-o-component="o-tabs" className={`${style['o-tabs']} ${style['o-aside-panel__tabs']}`} role="tablist">
            {children.map((child, idx) => (
              <li key={idx} role="tab">
                <a href={`#oPanelContent${idx}`}>{child[0]}</a>
              </li>
            ))}
          </ul>
      </div>
      {children.map((child, idx) => (
        <div id={`oPanelContent${idx}`} className={style['o-aside-panel__body']}>
            {child[1]}
        </div>
      ))}
  </div>
)

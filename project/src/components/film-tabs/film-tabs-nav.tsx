import {Tab} from './film-tabs';
import React from 'react';

type FilmTabNavProps = {
  tabNames: Tab[],
  onTabClick: (evt: React.MouseEvent) => void,
  activeTab: Tab,
};

export const FilmTabsNav = ({tabNames, onTabClick, activeTab}: FilmTabNavProps) => (
  <nav className="film-nav film-card__nav">
    <ul className="film-nav__list">
      {tabNames.map((tabName) => (
        <li key={tabName} className={`film-nav__item ${tabName === activeTab ? 'film-nav__item--active' : ''}`}>
          <a href="#" data-tab={tabName} className="film-nav__link" onClick={onTabClick}>{tabName}</a>
        </li>
      ))}
    </ul>
  </nav>);

import {Film} from '../../types/film';
import {FilmTabNames} from '../../const';
import React, {useState} from 'react';
import {FilmTabOverview} from './film-tab-overview';
import {FilmTabDetails} from './film-tab-details';
import {FilmTabReviews} from './film-tab-reviews';
import {FilmTabsNav} from './film-tabs-nav';

export type Tab = typeof FilmTabNames[keyof typeof FilmTabNames];

export type FilmTabProps = {
  film: Film,
  activeTabName?: Tab,
};

export const FilmTabs = ({film, activeTabName = FilmTabNames.Overview}: FilmTabProps) => {
  const [activeTab, setActiveTab] = useState<Tab>(activeTabName);
  const tabNames = Object.values(FilmTabNames);

  const handleTabClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    const clickedTab = (evt.target as HTMLHRElement)?.dataset?.tab as Tab;
    if (clickedTab) {
      setActiveTab(clickedTab);
    }
  };

  const getTabContentComponent = (tabName: Tab): JSX.Element => {
    switch (tabName) {
      case FilmTabNames.Overview:
        return <FilmTabOverview film={film}/>;
      case FilmTabNames.Details:
        return <FilmTabDetails film={film}/>;
      case FilmTabNames.Review:
        return <FilmTabReviews filmId={film.id}/>;
    }
  };

  return (
    <div className="film-card__desc">
      <FilmTabsNav tabNames={tabNames} onTabClick={handleTabClick} activeTab={activeTab}/>
      {getTabContentComponent(activeTab)}
    </div>);
};

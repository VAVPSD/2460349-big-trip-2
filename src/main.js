import FilterView from './view/filter-view.js';
import {render} from './render.js';
import BoardPresenter from './presenter/board-presenter.js';

const siteMainElement = document.querySelector('.trip-events');
const siteHeaderElement = document.querySelector('.trip-main');
const boardPresenter = new BoardPresenter({boardContainer: siteMainElement});


render(new FilterView(), siteHeaderElement);

boardPresenter.init();

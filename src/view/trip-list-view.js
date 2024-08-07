import { createElement } from '../render.js';

function createTripListTemplete() {
  return '<ul class="trip-events__list"></ul>';
}

export default class TripListView {
  getTemplate() {
    return createTripListTemplete();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

'use strict';

(function mapCoordinates() {
  window.mapCoordinates = (X, Y, originX, originY) => [X - originX, -Y + originY];
}());

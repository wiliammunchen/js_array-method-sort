'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compare =
      compareFunction ||
      ((firstElement, secondElement) => {
        const firstString = String(firstElement);
        const secondString = String(secondElement);

        if (firstString > secondString) {
          return 1;
        }

        if (firstString < secondString) {
          return -1;
        }

        return 0;
      });

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          const currentValue = this[j];

          this[j] = this[j + 1];
          this[j + 1] = currentValue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;

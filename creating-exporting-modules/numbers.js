
 var list = [];

function sorted(a,b) {
  return a - b;
}

 module.exports = {

  addNumber: function(number) {
    list.push(number);
  },

  sortedList: function() {
    return list.sort(sorted);
  }

 };
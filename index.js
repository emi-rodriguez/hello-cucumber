

exports.isItFriday = function(today) {
    if (today === "Friday") {
      return "TGIF";
    } else {
      return "Nope";
    }
  }

// module.exports = function(today) {
//   return {
//     isItFriday: function() {
//       if (today === "Friday") {
//         return "TGIF";
//       } else {
//         return "Nope";
//       }
//       }
//   };
// }
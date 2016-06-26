var fortunes = ["No pains no gains",
                "You will have a pleasant surprise",
                "River never springs",
                "Conquer your fear"];

exports.getFortune = function() {
  var id = Math.floor(Math.random()*fortunes.length);
  return fortunes[id];

};

exports.get

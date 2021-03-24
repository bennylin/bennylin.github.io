var debugKeyboards = [];
(function() {
  var kmw=KeymanWeb;
  kmw.KRS({
    KN:"jawa_standar",
    KI:"Keyboard_jawa_standar",
    KL:"jawa_standar",
    KLC:"en",
    KR:"Europe",
    KRC:"eu",
    KFont:{family:"Consolas"},
    KOskFont:{family:"Arial"},
    KF:"jawa_standar-1.0.js"
  });
  debugKeyboards["jawa_standar"] = {
    id:"jawa_standar",
    version:"1.0"
  };  kmw.KRS({
    KN:"jawa",
    KI:"Keyboard_jawa",
    KL:"jawa",
    KLC:"en",
    KR:"Europe",
    KRC:"eu",
    KFont:{family:"Consolas"},
    KOskFont:{family:"Arial"},
    KF:"jawa-1.0.js"
  });
  debugKeyboards["jawa"] = {
    id:"jawa",
    version:"1.0"
  };})();
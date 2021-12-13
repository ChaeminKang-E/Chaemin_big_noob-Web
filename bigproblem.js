let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];
secretMessage.pop()
console.log(secretMessage.length)
secretMessage.push("to", "Program")
secretMessage[secretMessage.indexOf("easily")]="right"
secretMessage.shift()
secretMessage.unshift("Programming", "or", "Coding")
let Ext_DRIVE_ = secretMessage.slice(secretMessage.length-3), H=Ext_DRIVE_[Ext_DRIVE_.length-1].length
console.log(H)
H>2?H="UPDATED":Ext_DRIVE_.pop()
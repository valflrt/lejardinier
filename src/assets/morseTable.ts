const morseTable: [RegExp, string, string][] = [
  [/a/g, ".-", "a"],
  [/b/g, "-...", "b"],
  [/c/g, "-.-.", "c"],
  [/d/g, "-..", "d"],
  [/e/g, ".", "e"],
  [/f/g, "..-.", "f"],
  [/g/g, "--.", "g"],
  [/h/g, "....", "h"],
  [/i/g, "..", "i"],
  [/j/g, ".---", "j"],
  [/k/g, "-.-", "k"],
  [/l/g, ".-..", "l"],
  [/m/g, "--", "m"],
  [/n/g, "-.", "n"],
  [/o/g, "---", "o"],
  [/p/g, ".--.", "p"],
  [/q/g, "--.-", "q"],
  [/r/g, ".-.", "r"],
  [/s/g, "...", "s"],
  [/t/g, "-", "t"],
  [/u/g, "..-", "u"],
  [/v/g, "...-", "v"],
  [/w/g, ".--", "w"],
  [/x/g, "-..-", "x"],
  [/y/g, "-.--", "y"],
  [/z/g, "--..", "z"],

  [/0/g, "-----", "0"],
  [/1/g, ".----", "1"],
  [/2/g, "..---", "2"],
  [/3/g, "...--", "3"],
  [/4/g, "....-", "4"],
  [/5/g, ".....", "5"],
  [/6/g, "-....", "6"],
  [/7/g, "--...", "7"],
  [/8/g, "---..", "8"],
  [/9/g, "----.", "9"],

  [/\,/g, "--..--", ","],
  [/\?/g, "..--..", "?"],
  [/\!/g, "-.-.--", "!"],
  [/\:/g, "---...", ":"],
  [/\-/g, "-....-", "-"],
  [/\"/g, ".-..-.", '"'],
  [/\(/g, "-.--.", "("],
  [/\=/g, "-...-", "="],
  [/\./g, ".-.-.-", "."],
  [/\;/g, "-.-.-.", ";"],
  [/\//g, "-..-.", "\\"],
  [/\'/g, ".----.", "'"],
  [/\)/g, "-.--.-", ")"],
  [/\+/g, ".-.-.", "+"],
  [/\@/g, ".--.-.", "@"],
];

export default morseTable;

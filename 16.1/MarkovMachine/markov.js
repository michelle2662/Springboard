/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    this.chains = {};

  for (let i = 0; i < this.words.length; i++) {
    let word = this.words[i];
    let nextWord = this.words[i + 1] || null;

    if (!this.chains[word]) {
      this.chains[word] = [];
    }

    this.chains[word].push(nextWord);
  }
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    let keys = Object.keys(this.chains);
  let word = keys[Math.floor(Math.random() * keys.length)];
  let result = [];

  while (result.length < numWords && word !== null) {
    result.push(word);
    let nextWords = this.chains[word];
    word = nextWords[Math.floor(Math.random() * nextWords.length)];
  }

  return result.join(" ");
  }
}

module.exports = MarkovMachine;

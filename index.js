const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const newArray = tutorials.map(tutorial => {
      const newTutorial = tutorial.split(" ")
      // newTutorial.toLowerCase
  	const newWordsTutorial = newTutorial.map(word => {
      	const endWord = word.slice(1)
  		const firstLetter = word[0].toUpperCase()
  		const newWord = firstLetter.concat(endWord)
  		return newWord
      })
  	return newWordsTutorial.join(" ")
  })

  return newArray
}

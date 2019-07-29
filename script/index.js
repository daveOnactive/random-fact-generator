class UI {
	// paints the dom for maths fact
	static Fact(fact) {
		// create a div element
		let factContainer = document.createElement('div');
		
		// add an id the div element
		factContainer.id = 'fact-container';

		//appends the neccessary elements to the div element which was created
		if(fact === 'math') {
			factContainer.innerHTML = "<div id='random-fact'><div id='back-btn'><div id='line1'></div><div id='line2'></div></div><label>Enter Number</label><br><input type='number' id='input'><h3>Maths Fact</h3><div id='facts'></div></div>";
		} else if (fact === 'trivia') {
			factContainer.innerHTML = "<div id='random-fact'><div id='back-btn'><div id='line1'></div><div id='line2'></div></div><label>Enter Number</label><br><input type='number' id='input'><h3>Trivia Fact</h3><div id='facts'></div></div>";
		} else if (fact === 'year') {
			factContainer.innerHTML = "<div id='random-fact'><div id='back-btn'><div id='line1'></div><div id='line2'></div></div><label>Enter Year</label><br><input type='number' id='input'><h3>Year Fact</h3><div id='facts'></div></div>";
		}
		

		// appends the div element to the fact-section element in the html file
		const factSection = document.querySelector('#fact-section').appendChild(factContainer);		
	}

	// remove the buttons and text from the dom
	static removeButton() {
		let content = document.querySelector('#content').style.display = 'none';
	}

	// add the buttons and the text back to the dom
	static showButton() {
		let content = document.querySelector('#content').style.display = 'block';
	}
}

// class for fetch api
class fetchApi {

	// fetches api for random  facts
	static fetchFact(type) {
		let numberInput = document.querySelector('#input');
		let factInput = document.querySelector('#facts');

		//fetch data when number is inputed
		numberInput.addEventListener('input', () => {
			if (type === 'math') {
				fetch(`http://numbersapi.com/${numberInput.value}/math`)
				.then((response) => response.text())
				.then((data) => {
					if (numberInput.value === ''){
						factInput.innerHTML = '';
					} else {
						factInput.innerHTML = data;
					}
				})
			} else if (type === 'trivia') {
				fetch(`http://numbersapi.com/${numberInput.value}`)
				.then((response) => response.text())
				.then((data) => {
					if (numberInput.value === ''){
						factInput.innerHTML = '';
					} else {
						factInput.innerHTML = data;
					}
				})
			} else if (type === 'year') {
				fetch(`http://numbersapi.com/${numberInput.value}/year`)
				.then((response) => response.text())
				.then((data) => {
					if (numberInput.value === ''){
						factInput.innerHTML = '';
					} else {
						factInput.innerHTML = data;
					}
				})
			}
		
		});

	}
}


// event to call mathsFact and removeButton in the UI class and fetchMathFact in the fetch class
document.querySelector('#math-btn').addEventListener('click', () => {
	const type = 'math';
	UI.removeButton();
	UI.Fact(type);
	fetchApi.fetchFact(type);
	

	//event to call showbutton in the UI class and remove the mathsFact from the dom
	document.querySelector('#back-btn').addEventListener('click', () => {
		document.querySelector('#fact-section').innerHTML = '';
		UI.showButton();
	});
	

});

// event to call triviaFact and removeButton in the UI class and fetchTriviaFact in the fetch class
document.querySelector('#trivia-btn').addEventListener('click', () => {
	const type = 'trivia';
	UI.removeButton();
	UI.Fact(type);
	fetchApi.fetchFact(type);

	//event to call showbutton in the UI class and remove the triviaFact from the dom
	document.querySelector('#back-btn').addEventListener('click', () => {
		document.querySelector('#fact-section').innerHTML = '';
		UI.showButton();
	});
	

});

// event to call yearFact and removeButton in the UI class and fetchYearFact in the fetch class
document.querySelector('#year-btn').addEventListener('click', () => {
	const type = 'year';
	UI.removeButton();
	UI.Fact(type);
	fetchApi.fetchFact(type);

	//event to call showbutton in the UI class and remove the yearFact from the dom
	document.querySelector('#back-btn').addEventListener('click', () => {
		document.querySelector('#fact-section').innerHTML = '';
		UI.showButton();
	});
	

});


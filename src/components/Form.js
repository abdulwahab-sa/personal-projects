import React, { useState } from 'react';

function Form() {
	const handleOnChange = (event) => {
		setText(event.target.value);
	};

	const handleUpCase = () => {
		let newText = text.toUpperCase();
		setText(newText);
	};

	const handleLowCase = () => {
		let newText = text.toLowerCase();
		setText(newText);
	};

	const removeSpaces = () => {
		let newText = text.split(/[ ]+/);
		setText(newText.join(' '));
	};

	const copyText = () => {
		navigator.clipboard.writeText(text);
	};

	const clearText = () => {
		let newText = '';
		setText(newText);
	};

	const capitalizeSentence = () => {
		let newText = text.charAt(0).toUpperCase() + text.slice(1);
		setText(newText);
	};

	const [text, setText] = useState('');

	return (
		<>
			<div className="container my-3 mx-auto py-4 bg-light">
				<h3 className="text-dark text-center mb-2">Paste the text to be formatted</h3>
				<div className="container input-group">
					<textarea className="form-control my-2" rows="5" value={text} onChange={handleOnChange}></textarea>
				</div>

				<div className="container">
					<button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpCase}>
						Convert to upperCase
					</button>
					<button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowCase}>
						Convert to lowerCase
					</button>
					<button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={removeSpaces}>
						Remove Extra Spaces
					</button>
					<button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={copyText}>
						Copy Text
					</button>
					<button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={capitalizeSentence}>
						Capitalize Sentences
					</button>
					<button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={clearText}>
						Clear Text
					</button>
				</div>
			</div>
			<div className="container my-1">
				<h3>Your Text Summary </h3>
				<p>
					{
						text.split(/\s+/).filter((element) => {
							return element.length !== 0;
						}).length
					}{' '}
					words and {text.length} characters
				</p>
			</div>
		</>
	);
}

export default Form;

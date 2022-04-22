import React from "react";

export const Compose = () => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const content = document.getElementById("post").value;
		console.log(content);
		let payload = {
			content: content,
		};
		fetch("http://localhost:3001/post", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(payload),
		})
			.then((data) => data.json())
			.then((data) => console.log(data));
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<textarea name="post" id="post" cols="30" rows="10"></textarea>

				<button>Submit</button>
			</form>
		</>
	);
};

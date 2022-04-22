import React from "react";
import { useEffect } from "react";

export const ShowPost = () => {
	const [posts, setPosts] = React.useState([]);
	const fetchPosts = () => {
		fetch("http://localhost:3001/post")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setPosts(data);
			});
	};
	useEffect(() => {
		fetchPosts();
	}, []);
	return (
		<>
			<h1>All post</h1>
			{posts.map((post) => {
				return (
					<div key={post._id}>
						<h2>{post.content}</h2>
					</div>
				);
			})}
		</>
	);
};

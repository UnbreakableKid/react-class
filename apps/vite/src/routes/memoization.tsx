import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/memoization")({
	component: Memoization,
});

type Props = {
	signedIn: boolean;
	post: string;
};

// Why is the Post rendering every time the likesCount changes?

function Memoization({ signedIn = true, post = "hello" }: Props) {
	const [likesCount, setLikesCount] = useState(0);

	useEffect(() => {
		const id = setInterval(() => {
			setLikesCount((likesCount) => likesCount + 1);
		}, 3000);

		return () => clearInterval(id);
	}, []);

	console.log("Rendering LatestPost component");

	return (
		<div>
			{post ? (
				<>
					<Post signedIn={signedIn} post={post} />
					{likesCount && (
						<div className="my-1 p-1">
							<span>{likesCount} Likes</span>
						</div>
					)}
				</>
			) : (
				<p>Click on Get Latest Post button</p>
			)}
		</div>
	);
}

const Post = ({ post }: Props) => {
	console.log("Rendering Post component");

	return (
		<div className="">
			{post && (
				<div className="post p-1">
					<h1 className="heading-sm py-1">{post}</h1>
				</div>
			)}
		</div>
	);
};

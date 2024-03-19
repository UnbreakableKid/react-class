// import Counter from "@/components/Counter";
// import { createFileRoute } from "@tanstack/react-router";
// import { useEffect, useState } from "react";

// export const Route = createFileRoute("/componentBuilding")({
// 	component: Lesson2,
// });

// // here we will showcase how to create components and how to use them
// // we will also showcase basic state management and useEffect
// // first we create a simple counter

// // then we will create a card element to showcase children and other props

// function Lesson2() {
// 	const [count, setCount] = useState(0);

// 	useEffect(() => {
// 		document.title = `Count: ${count}`;
// 	}, [count]);

// 	return (
// 		<div className="flex gap-5">
// 			{count}
// 			<Counter count={count} setCount={setCount} op="increase" />
// 			<Counter count={count} setCount={setCount} op="decrease" />
// 			<Counter count={count} setCount={setCount} op="multiply" multiplyBy={2} />
// 		</div>
// 	);
// }

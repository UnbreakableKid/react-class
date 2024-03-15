import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/componentBuilding")({
	component: Lesson2,
});

// here we will showcase how to create components and how to use them
// we will also showcase basic state management and useEffect
// first we create a simple counter

// then we will create a card element to showcase children and other props

function Lesson2() {
	return <div className="flex gap-5">Place here!</div>;
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/componentBuilding")({
	component: Lesson2,
});

function Lesson2() {
	return <div className="flex gap-5">Place here!</div>;
}

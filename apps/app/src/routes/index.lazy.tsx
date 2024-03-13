import { createFileRoute } from "@tanstack/react-router";
import Card from "../components/Card";
import "../App.css";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<>
			<div className="flex gap-5">
				{[1, 2, 3].map((i) => (
					<Card key={i} title={`Carta nº ${i}`}>
						<p
							className={
								i === 1
									? "text-red-500"
									: i === 2
									  ? "text-yellow-500"
									  : "text-green-500"
							}
						>
							Conteúdo da carta nº {i}
						</p>
					</Card>
				))}
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

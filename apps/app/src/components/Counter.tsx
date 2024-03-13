import { useEffect, useState } from "react";
import { add } from "../utils/util";

const Counter = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title = `You clicked ${count} times`;
	}, [count]);

	return (
		<button
			type="button"
			className="text-yellow-300 flex "
			onClick={() => setCount((count) => count + 1)}
		>
			count is {count} {add(count, count + 1)} <br /> Click me
		</button>
	);
};
export default Counter;

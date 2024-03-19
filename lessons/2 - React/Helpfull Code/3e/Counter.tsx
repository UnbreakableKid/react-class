// /* eslint-disable no-mixed-spaces-and-tabs */
// type CounterProps =
// 	| {
// 			count: number;
// 			setCount: (count: number) => void;
// 			op: "increase" | "decrease";
// 	  }
// 	| {
// 			op: "multiply";
// 			multiplyBy: number;
// 			count: number;
// 			setCount: (count: number) => void;
// 	  };

// const Counter = (props: CounterProps) => {
// 	const { count, setCount, op } = props;
// 	return (
// 		<>
// 			{op === "increase" ? (
// 				<button
// 					type="button"
// 					onClick={() => setCount(count + 1)}
// 					className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
// 				>
// 					Increase to {count + 1}
// 				</button>
// 			) : op === "multiply" ? (
// 				<button
// 					type="button"
// 					onClick={() => setCount(count * props.multiplyBy)}
// 					className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
// 				>
// 					Multiply by {props.multiplyBy}
// 				</button>
// 			) : (
// 				<button
// 					type="button"
// 					onClick={() => setCount(count - 1)}
// 					className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
// 				>
// 					Decrease to {count - 1}
// 				</button>
// 			)}
// 		</>
// 	);
// };
// export default Counter;

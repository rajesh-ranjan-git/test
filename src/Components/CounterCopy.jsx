import { useCount } from "../Context/countProvider";

const Counter = () => {
  const { count, countDispatch } = useCount();

  const incrementCounter = () => {
    countDispatch({ type: "INCREMENT" });
  };

  const decrementCounter = () => {
    countDispatch({ type: "DECREMENT" });
  };
  return (
    <>
      <h3>Count : {count}</h3>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </>
  );
};

export default Counter;

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../Slices/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();

  const { count } = useSelector((state) => state.counter);

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <h3>Count : {count}</h3>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </>
  );
};

export default Counter;

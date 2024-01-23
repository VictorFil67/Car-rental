import { useDispatch } from "react-redux";
import s from "./LoadMore.module.css";
import { handleLoadMore } from "../../store/cars/slice";

export const LoadMore = () => {
  const dispatch = useDispatch();
  return (
    <button className={s.loadMore} onClick={() => dispatch(handleLoadMore())}>
      Load more
    </button>
  );
};

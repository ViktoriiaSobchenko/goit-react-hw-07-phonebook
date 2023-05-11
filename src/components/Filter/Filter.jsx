import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChangeFilter = evt => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <div className={css.filter}>
      <label htmlFor="filter" className={css.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        className={css.input}
        value={filter}
        onChange={onChangeFilter}
      />
    </div>
  );
};

export default Filter;

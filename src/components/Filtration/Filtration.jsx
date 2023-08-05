import propTypes from 'prop-types'
import { Input, Label } from "components/Form/Form.styled";
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { addFilter } from 'redux/filterSlice';

export const Filtration = () =>{
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    const handleChange = evt =>{
        const {value} = evt.target;
        dispatch(addFilter(value));
    };
        return(
            <>
            <Label>Find Contacts By Name
                <Input
                type="text"
                id="input-search"
                onChange={handleChange}
                onSubmit={addFilter}
                name="filtration"
                value={filter}
                />
            </Label>
            </>
        )
}

Filtration.propTypes = {
    filtration: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
}
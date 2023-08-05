import propTypes from 'prop-types'
import { Input, Label } from "components/Form/Form.styled";
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

export const Filtration = ({filter}) =>{
    const dispatch = useDispatch();
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
                name="filtration"
                value={filter}
                />
            </Label>
            </>
        )
}

Filtration.propTypes = {
    filtration: propTypes.string.isRequired,
}
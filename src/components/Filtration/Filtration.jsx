import propTypes from 'prop-types'
import { Input, Label } from "components/Form/Form.styled";

export const Filtration = ({filtration,onChange}) =>{
    const handleChange = evt =>{
        const {value} = evt.target;
        onChange(value);
    };
        return(
            <>
            <Label>Find Contacts By Name
                <Input
                type="text"
                id="input-search"
                onChange={handleChange}
                name="filtration"
                value={filtration}
                />
            </Label>
            </>
        )
}

Filtration.propTypes = {
    filtration: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
}
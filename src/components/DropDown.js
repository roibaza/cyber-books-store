import {PageSize} from "../helpers/BookStore.helper";
import {useState} from "react";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const DropDown = ({handlePageSizeClick}) => {
    const [pageSize, setPageSize]  = useState(10);
    const handleChange = (e) => {
        handlePageSizeClick(e);
        setPageSize(e.target.value);
    }
    return (
        <Box sx={{
            Width: 80,
            marginLeft: '5px'
        }}>
            <FormControl fullWidth>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={pageSize}
                    onChange={handleChange}
                    sx={{
                        width: '80px',
                        height: '30px',
                        margin: '0px',
                        padding: '0px',
                    }}
                >
                    {
                        PageSize.map((size) =>
                            <MenuItem key={size} value={size} selected={size === 10 ? true : false}>
                                {size}
                            </MenuItem>
                        )
                    }
                </Select>
            </FormControl>
        </Box>
    );
}

export default DropDown;


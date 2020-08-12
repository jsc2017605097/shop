import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SimpleSelect({category,categorys,setCategory}) {
    const classes = useStyles();

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                onChange={handleChange}
            >
                {categorys.map(item=><MenuItem value={item._id}>{item.name}</MenuItem> )}
            </Select>
        </FormControl>
    )
}
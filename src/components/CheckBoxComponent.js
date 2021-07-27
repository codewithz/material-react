import { Checkbox,FormControlLabel} from '@material-ui/core'
import React,{useState} from 'react'

export default function CheckBoxComponent() {

    const [checked,setChecked]=useState(true);
    return (
        <div>
        <FormControlLabel
        control={<Checkbox 
            checked={checked}
            onChange={(e)=>setChecked(e.target.checked)}
            />}
        label="Testing Checkbox"  
        />
        </div>
    )
}

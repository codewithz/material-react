import React from 'react'
import { Button,ButtonGroup } from '@material-ui/core';
import { Save,Delete } from '@material-ui/icons';



export default function ButtonComponent() {
    return (
        <div>
            <ButtonGroup>
                <Button
                    endIcon={<Save />}
                    size="large"
                    onClick={() => alert('Hey Material UI')}
                    variant="contained"
                    color="primary">
                    Save
                </Button>

                <Button
                    endIcon={<Delete />}
                    size="large"
                    onClick={() => alert('Hey Material UI')}
                    variant="contained"
                    color="secondary">
                    Discard
                </Button>

            </ButtonGroup>

        </div>
    )
}

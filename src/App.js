import React, {useState} from 'react';
import PropertiesForm from "./component/container/PropertiesForm";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import {CodeSnippetTab} from "./component";


export default () => {
    const [state, setState] = useState({
        propertiesA: {name: "", propertyFile: null},
        propertiesB: {name: "", propertyFile: null}
    });

    const onSubmit = (propertiesA, propertiesB) => {
        setState({propertiesA, propertiesB})
    };

    return (
        <Card style={{padding: 5}}>
            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <PropertiesForm onSubmit={onSubmit}/>
                </Grid>
                <Grid item xs={10}>
                    <CodeSnippetTab propertiesA={state.propertiesA} propertiesB={state.propertiesB}/>
                </Grid>
            </Grid>
        </Card>

    );
}

import TabZ from "../custom/tab/TabZ";
import PropertiesDiffCodeSnippet from "../custom/snippet/PropertiesDiffCodeSnippet";
import {PropertiesCodeSnippet} from "../index";
import React, {useEffect, useState} from "react";
import {getExtraProps, getMissingProps, getPropsWithUnMatchedValues} from "../../service/PropertiesService";
import {mapToDiffProperties, mapToProperties} from "../../transformer/MapTransformer";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";


const CodeSnippetTab = ({propertiesA, propertiesB}) => {
    const [state, setState] = useState({
        propertiesA, propertiesB
    });

    useEffect(() => {
        setState({propertiesA, propertiesB})
    }, [propertiesA, propertiesB]);

    //Object_destructuring Assigning to new variable names
    const {name: nameA, propertyFile: propertyFileA} = state.propertiesA;
    const {name: nameB, propertyFile: propertyFileB} = state.propertiesB;

    const missingPropsMap = getMissingProps(propertyFileA, propertyFileB);
    const unMatchPropsMap = getPropsWithUnMatchedValues(propertyFileA, propertyFileB);
    const extraPropsMap = getExtraProps(propertyFileA, propertyFileB);

    return (
        <Card>
            <TabZ titles={[
                `Unmatched properties (${unMatchPropsMap.size})`,
                `Missing properties (${missingPropsMap.size})`,
                `Extra properties (${extraPropsMap.size})`
            ]}>
                <PropertiesDiffCodeSnippet code={mapToDiffProperties(unMatchPropsMap)} labelA={nameA} labelB={nameB}/>
                <PropertiesCodeSnippet code={mapToProperties(missingPropsMap)} description={`Missing in ${nameA} but present in ${nameB}`}/>
                <Grid>
                    <Typography variant="subtitle2">
                        Missing in {nameB} but present in {nameA}
                    </Typography>
                    <PropertiesCodeSnippet code={mapToProperties(extraPropsMap)}/>
                </Grid>
            </TabZ>
        </Card>
    );
};

export default CodeSnippetTab;
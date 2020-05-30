import React, {useState} from "react";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import {CopyDownloadToolBar} from "../../index";

const addedColor = '#cfc';
const removedColor = '#fdd';
const isEven = (number) => number % 2 === 0;

const defaultDiffLineStyle = (lineNumber, show) => {
    let style = {};

    if (!isEven(lineNumber)) {
        if (show === 'diff') style.backgroundColor = addedColor;
        style.display = (show === 'diff' || show === 'sideA') ? 'block' : 'none';
    } else {
        if (show === 'diff') style.backgroundColor = removedColor;
        style.display = (show === 'diff' || show === 'sideB') ? 'block' : 'none';
    }

    return {style};
};
const defaultLabelA = "Side A";
const defaultLabelB = "Side B";
const PropertiesDiffCodeSnippet = ({code, labelA, labelB,  diffLineStyle = defaultDiffLineStyle, ...props}) => {
    let options = [
        {id: "diff", label: "Diff"},
        {id: "sideA", label: labelA || defaultLabelA},
        {id: "sideB", label: labelB || defaultLabelB}
    ];

    const [state, setState] = useState({
        selectedOption: options[0].id,
        code: code
    });

    const handleRadioChange = (event) => {
        setState({
            ...state,
            selectedOption: event.target.value
        });
    };

    const RadioGroupBody = () => options.map(option => {
        return <FormControlLabel key={option.id} value={option.id} control={<Radio/>} label={option.label}/>
    });

    const CodeSnippetOptions = () => {
        return (
            <FormControl component="fieldset">
                <FormLabel component="legend">Show</FormLabel>
                <RadioGroup name="snippetOptions" value={state.selectedOption} onChange={handleRadioChange}>
                    <Grid item>
                        <RadioGroupBody/>
                    </Grid>
                </RadioGroup>
            </FormControl>
        );
    };

    return (
        <>
            <Grid container>
                <Grid item>
                    <CodeSnippetOptions/>
                </Grid>
                <Grid container justify="flex-end">
                    <Grid item>
                        <CopyDownloadToolBar value={code} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <SyntaxHighlighter language="properties" showLineNumbers={state.selectedOption !== 'diff'}
                                   wrapLines={true}
                                   lineProps={lineNumber => diffLineStyle(lineNumber, state.selectedOption)}
                                   {...props}>
                    {state.code}
                </SyntaxHighlighter>
            </Grid>
        </>
    );
};

export default PropertiesDiffCodeSnippet;
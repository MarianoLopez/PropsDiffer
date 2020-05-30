import React from "react";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {CopyDownloadToolBar} from "../../index";

const PropertiesCodeSnippet = ({code, description, ...props}) => {
    return (
        <Grid container>
            <Grid container>
                <Grid>
                    <Typography variant="subtitle2">
                        {description}
                    </Typography>
                </Grid>
                <Grid container justify="flex-end">
                    <Grid item>
                        <CopyDownloadToolBar value={code} />
                    </Grid>
                </Grid>
                <Grid>
                    <SyntaxHighlighter language="properties" showLineNumbers={true} {...props}>
                        {code}
                    </SyntaxHighlighter>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default PropertiesCodeSnippet;
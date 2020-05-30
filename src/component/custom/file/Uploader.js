import Typography from "@material-ui/core/Typography";
import {DropzoneArea} from "material-ui-dropzone";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles(() => ({
    pad: {
        padding: 5
    }
}));

const Uploader = ({id, title, description, filesLimit = 1, acceptedFiles = ["*"], onChange, ...props}) => {
    const classes = useStyles();

    return (
        <Card className={classes.pad} >
            <Typography variant="subtitle2">{title}</Typography>
            <Typography variant="caption">{description}</Typography>
            <DropzoneArea
                filesLimit={filesLimit}
                acceptedFiles={acceptedFiles}
                onChange={files => onChange(files, id)}
                {...props}
            />
        </Card>
    );
};

export default Uploader;
import React, {useEffect, useState} from 'react';
import {fileToMap} from "../../transformer/FileTransformer";
import Grid from "@material-ui/core/Grid";
import {Uploader} from "../index";

const PropertiesForm = ({onSubmit}) => {
    const [state, setState] = useState({
        filesMinCount: 2,
        uploadCount: 0,
        acceptedFiles: ['.properties'],
        uploaders: [
            {id: 0, label: "Side A", name: "", propertyFile: {}},
            {id: 1, label: "Side B", name: "", propertyFile: {}}
        ]
    });

    const readFileAsync = (file) => {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result);
            };
            reader.onerror = reject;
            reader.readAsText(file, "UTF-8");
        })
    };

    const handleChange = (files, id) => {
        let file = files[0];
        if (file) {
            let uploaders = state.uploaders;
            let uploaderIndex = uploaders.findIndex(obj=> obj.id === id);
            let uploader = uploaders[uploaderIndex];

            readFileAsync(file).then(content => {
                uploader.name = file.name;
                uploader.propertyFile = fileToMap(content);

                setState({
                    ...state,
                    uploaders,
                    uploadCount: state.uploadCount + 1
                })
            });
        }
    };

    const dispatchSubmit = () => {
        if (state.uploadCount >= state.filesMinCount) {
            onSubmit(state.uploaders[0], state.uploaders[1])
        }
    };

    useEffect(dispatchSubmit, [state.uploadCount]);

    const DropZones = () => {
        return state.uploaders.map(uploader => {
            return <Uploader key={uploader.id} id={uploader.id}
                             title={uploader.label} description={uploader.name}
                             acceptedFiles={state.acceptedFiles} onChange={handleChange}/>
        });
    };
    return (
        <Grid container spacing={4}>
            <Grid item>
                <DropZones/>
            </Grid>
        </Grid>
    );
};

export default PropertiesForm;

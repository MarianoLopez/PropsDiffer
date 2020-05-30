import {ToolBarItem} from "./IconToolBar";
import {FileCopy, GetApp} from "@material-ui/icons";
import {IconToolBar} from "../../index";
import React, {useState} from "react";
import {CopyToClipboard} from "react-copy-to-clipboard";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from '@material-ui/lab/Alert';

const CopyDownloadToolBar = ({value, name = "application"}) => {
    const [state, setState] = useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'right',
        autoHideDuration: 5000
    });

    const onCopy = (text, result) => setState({
        ...state,
        open: result
    });

    const onCloseSnack = () => setState({
        ...state,
        open: false
    });


    const dispatchDownload = () => {
        const element = document.createElement("a");
        const file = new Blob([value], {type: 'text/x-java-properties'});
        element.href = URL.createObjectURL(file);
        element.download = `${name}.properties`;
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    };

    const CopyItem = () => {
        return (
            <CopyToClipboard text={value} onCopy={onCopy}>
                <FileCopy/>
            </CopyToClipboard>
        );
    };
    const {vertical, horizontal, open, autoHideDuration} = state;
    const toolbarItems = [
        new ToolBarItem(<CopyItem/>),
        new ToolBarItem(<GetApp/>, dispatchDownload),
    ];
    return (
        <>
            <IconToolBar toolBarItems={toolbarItems}/>
            <Snackbar
                anchorOrigin={{vertical, horizontal}}
                open={open}
                autoHideDuration={autoHideDuration}
                onClose={onCloseSnack}
                key={vertical + horizontal}>
                <Alert severity="success">
                    Code copied to clipboard!
                </Alert>
            </Snackbar>
        </>
    );
};

export default CopyDownloadToolBar;
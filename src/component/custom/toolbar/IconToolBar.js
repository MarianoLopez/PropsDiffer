import IconButton from "@material-ui/core/IconButton";
import React from "react";
import Card from "@material-ui/core/Card";

export function ToolBarItem(icon, onClick = undefined) {
    this.icon = icon;
    this.onClick = onClick;
}

const IconToolBar = ({toolBarItems}) => {
    return (
        <Card elevation={1}>
            {toolBarItems.map((item, index) => {
                return (
                    <IconButton key={index} color="primary"
                                style={{margin:5}}
                                component="span" size="small" onClick={() => {if (item.onClick) item.onClick();}}>
                        {item.icon}
                    </IconButton>
                );
            })}
        </Card>
    );
};

export default IconToolBar;
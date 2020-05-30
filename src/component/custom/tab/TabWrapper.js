import Box from "@material-ui/core/Box";
import React from "react";

const TabWrapper = ({children, value, index, ...other}) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <Box p={1}>
                    {children}
                </Box>
            )}
        </div>
    );
};

export default TabWrapper;
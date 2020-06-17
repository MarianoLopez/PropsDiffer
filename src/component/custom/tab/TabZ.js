import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import React, {useState} from "react";
import TabWrapper from "./TabWrapper";


const TabZ = ({titles, children, selectedTab = 0}) => {

    const [state, setState] = useState({
        selectedTab: selectedTab,
    });

    const handleTabChange = (event, newValue) => {
        setState({
            selectedTab: newValue
        });
    };

    const TabHeader = () => {
        return (
            <AppBar position="static">
                <Tabs value={state.selectedTab}
                      onChange={handleTabChange}
                      variant="scrollable"
                      scrollButtons="on">
                    {titles.map((title, index) => <Tab key={index} label={title}/>)}
                </Tabs>
            </AppBar>
        );
    };

    const TabBody = () => {
        return children.map((child, index) => {
            return (
                <TabWrapper key={index} value={state.selectedTab} index={index}>
                    {child}
                </TabWrapper>
            );
        });
    };

    return (
        <>
            <TabHeader/>
            <TabBody/>
        </>
    );
};

export default TabZ;
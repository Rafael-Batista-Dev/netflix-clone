import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabDoor from "./tabs_nav/TabDoor";
import TabDevices from "./tabs_nav/TabDevices";
import TabPrices from "./tabs_nav/TabPrices";
import TabContentDoor from "./TabContentDoor";
import TabContentDevices from "./TabContentDevices";
import TabContentPrices from "./TabContentPrices";
import "../css/TabNav.css";

class TabComponent extends Component {
  state = {
    tabIndex: 0,
  };

  render() {
    return (
      <>
        <Tabs
          className="tabs"
          selectedIndex={this.state.tabIndex}
          onSelect={(tabIndex) => this.setState({ tabIndex })}
        >
          <TabList className="tab-nav-conteiner">
            <Tab
              className={`${
                this.state.tabIndex === 0 ? "tab-selected active" : null
              }`}
            >
              <TabDoor />
              <p className="lgScreen">
                <strong>Cancelar</strong>
              </p>
              <br />
            </Tab>
            <Tab
              className={`${
                this.state.tabIndex === 1 ? "tab-selected active" : null
              }`}
            >
              <TabDevices />
              <p className="lgScreen" style={{ marginTop: "-4.6rem" }}>
                <strong>Assistir</strong>
              </p>
              <br />
            </Tab>
            <Tab
              className={`${
                this.state.tabIndex === 2 ? "tab-selected active" : null
              }`}
            >
              <TabPrices />
              <p className="lgScreen">
                <strong>Planos</strong>
              </p>
              <br />
            </Tab>
          </TabList>
          {/* Tabs Content */}
          <TabPanel>
            <TabContentDoor />
          </TabPanel>
          <TabPanel>
            <TabContentDevices />
          </TabPanel>
          <TabPanel>
            <TabContentPrices />
          </TabPanel>
        </Tabs>
      </>
    );
  }
}

export default TabComponent;

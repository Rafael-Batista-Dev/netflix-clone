import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabDoor from "./tabs_nav/TabDoor";
import TabDevices from "./tabs_nav/TabDevices";
import TabPrices from "./tabs_nav/TabPrices";

import "../css/TabNav.css";

class TabComponent extends Component {
  render() {
    return (
      <div>
        <Tabs>
          <TabList>
            <Tab>
              <TabDoor />
            </Tab>
            <Tab>
              <TabDevices />
            </Tab>
            <Tab>
              <TabPrices />
            </Tab>
          </TabList>
        </Tabs>
      </div>
    );
  }
}

export default TabComponent;

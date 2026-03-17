// import React from "react";

// const Dashboard = () => {
//   return <div>Dashboard</div>;
// };

// export default Dashboard;

import { Tabs, Tab } from "oks-ui";

import React from "react";
import {
  AlertList,
  AvatarList,
  BackdropList,
  BadgeList,
  ButtonList,
  ChipList,
  DividerList,
  DropdownList,
  DrawerList,
  ModalList,
  PageTitleList,
  ToastList,
  TooltipList,
} from "./componentsList";

const Dashboard = () => {
  return (
    <div className="p-3">
      <Tabs defaultSelectedKey="alert" color="primary">
        <Tab key="alert" title="Alert">
          <AlertList />
        </Tab>
        <Tab key="avatar" title="Avatar">
          <AvatarList />
        </Tab>
        <Tab key="backdrop" title="Backdrop">
          <BackdropList />
        </Tab>
        <Tab key="badge" title="Badge">
          <BadgeList />
        </Tab>
        <Tab key="button" title="Button">
          <ButtonList />
        </Tab>
        <Tab key="chip" title="Chip">
          <ChipList />
        </Tab>
        <Tab key="dropdown" title="Dropdown">
          <DropdownList />
        </Tab>
        <Tab key="divider" title="Divider">
          <DividerList />
        </Tab>
        <Tab key="drawer" title="Drawer">
          <DrawerList />
        </Tab>
        <Tab key="modal" title="Modal">
          <ModalList />
        </Tab>
        <Tab key="pageTitle" title="PageTitle">
          <PageTitleList />
        </Tab>
        <Tab key="tooltip" title="Tooltip">
          <TooltipList />
        </Tab>
        <Tab key="toast" title="Toast">
          <ToastList />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Dashboard;

import React from "react";
import Email from "./FormFieldSetList/Email/Email";
import Password from "./FormFieldSetList/Password/Password";
import Text from "./FormFieldSetList/Text/Text";
import Select from "./FormFieldSetList/Select/Select";
import { Tab, Tabs } from "oks-ui";

const FormFieldSetList = () => {
  return (
    <div>
      <Tabs defaultValue="text">
        <Tab value="text" title="Text">
          <Text />
        </Tab>
        <Tab value="email" title="Email">
          <Email />
        </Tab>
        <Tab value="password" title="Password">
          <Password />
        </Tab>
        <Tab value="select" title="Select">
          <Select />
        </Tab>
      </Tabs>
    </div>
  );
};

export default FormFieldSetList;

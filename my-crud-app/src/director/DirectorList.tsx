import { Datagrid, DateField, List, TextField } from "react-admin";

export const DirectorList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="firstname" />
      <TextField source="lastname" />
      <DateField source="birthdate" />
    </Datagrid>
  </List>
);

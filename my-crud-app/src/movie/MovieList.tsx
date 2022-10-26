import { Datagrid, DateField, List, ReferenceField, TextField } from "react-admin";

export const MovieList = () => (
  <List>
      <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="title" />
          <ReferenceField label="Director" source="director.id" reference="directors">
              <TextField source="lastname" /> 
          </ReferenceField>
          <DateField source="published_at" />
      </Datagrid>
  </List>
);

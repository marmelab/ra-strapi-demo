import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceArrayField,
  Datagrid,
  TextField,
  DateField,
} from "react-admin";

export const DirectorEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <DateInput source="birthdate" />
      <ReferenceArrayField label="Movies" source="movies" reference="movies">
        <Datagrid bulkActionButtons={false}>
          <TextField source="title" />
          <DateField source="release" />
        </Datagrid>
      </ReferenceArrayField>
    </SimpleForm>
  </Edit>
);

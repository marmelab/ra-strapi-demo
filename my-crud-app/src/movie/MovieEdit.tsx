import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

export const MovieEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <DateInput source="release" />
      <ReferenceInput source="director" reference="directors">
        <SelectInput optionText="lastname" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

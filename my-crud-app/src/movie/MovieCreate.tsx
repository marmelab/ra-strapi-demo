import { Create, SimpleForm, TextInput, DateInput, ReferenceInput, SelectInput } from "react-admin";

export const MovieCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <DateInput source="release" />
      <ReferenceInput source="director" reference="directors">
        <SelectInput optionText="lastname" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

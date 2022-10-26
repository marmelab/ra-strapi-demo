import { Create, SimpleForm, TextInput, DateInput } from 'react-admin';

export const DirectorCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="firstname" />
            <TextInput source="lastname" />
            <DateInput source="birthdate" />
        </SimpleForm>
    </Create>
);
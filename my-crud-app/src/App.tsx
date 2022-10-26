// in src/App.js
import * as React from "react";
import { Admin, ListGuesser, Resource } from "react-admin";
import simpleRestProvider from "ra-strapi-rest";
import movie from "./movie";
import director from "./director";

const dataProvider = simpleRestProvider("http://localhost:1337");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="movies" {...movie} />
    <Resource name="directors" {...director} />
  </Admin>
);

export default App;

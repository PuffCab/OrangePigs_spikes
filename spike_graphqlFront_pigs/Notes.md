# GraphQL

## graphql history

[GraphQL](https://graphql.org/) is an open source query language created by Facebook. Before GraphQL went open source in 2015, Facebook had used it internally for their mobile applications since 2012 as an alternative to the common REST architecture. As a result, network usage was reduced dramatically for Facebook’s mobile applications because GraphQL made it more efficient with data transfers.

Let’s say you want to fetch data from the Rest API and you say, “Hey REST API, give me the titles of the available courses on Educative”. How this works is that you have a specific endpoint or URL (in our case, Educative) that you are hitting and that URL determines what data comes back. With the REST API, you fetch a URL and that URL is returning typically something like JSON or a Javascript object full of data. This results in either unwanted data that we must filter through to fetch our required data or multiple trips (requests) to cater to different queries. However, GraphQL is different.

## how is graphql different

Instead of an API where you hit a URL and accept whatever data comes back, GraphQL allows you to ask for specific data, giving clients more control over what information is sent.

The Sandwich Comparison #
Think of it like this; you want a sandwich with only bread, cheese, cucumbers, and lettuce. You walk into a RESTaurant where the only option on the menu is ‘sandwich’; you place an order and receive a sandwich with bread, salami, lettuce, tomatoes, cucumbers, and cheese. You then remove everything you don’t want, to be able to eat the sandwich you wanted; this is how the REST API works. However, when you visit GraphQL cafe, you realize you can specify which toppings you want in your sandwich and receive exactly what you wanted.

![qraphQl-sanwich.jpg](./qraphQl-sanwich.jpg)

## overfetching

In the RESTful architecture, the backend defines what data is available for each resource on each URL, while the frontend always has to request all the information in a resource, even if only a part of it is needed.

In the worst case scenario, a client application has to read multiple resources through multiple network requests. This is called overfetching. A query language like GraphQL on the server-side and client-side lets the client decide which data it needs by making a single request to the server.

## specification not implementation

GraphQL is a query language for APIs, it is a way to get data from an API to your application hence, it is a [specification](https://spec.graphql.org/draft/) rather than an implementation. Initially, Facebook open-sourced the GraphQL specification and its reference implementation in JavaScript. Now, along with Javascript, several libraries have been incorporated in implementation. The ecosystem around GraphQL is growing horizontally by offering multiple programming languages, but also vertically, with libraries on top of GraphQL like Apollo and Relay.

## queries and mutations

Currently, GraphQL operations can be divided into two broad categories, a query (read) and mutation (write). Each of these operations is only a string that needs to be constructed according to the GraphQL query language specification.

When made with an HTTP request (_fetch_, _axios_), both are always **POST** requests.

Queries are used for data fetching and mutations are used to modify server-side data. In the example below, you will see that a query has the exact same shape as the result. This essential GraphQL feature always provides you with the expected results because it lets the server know exactly what the client is asking for.

## relational queries

With GraphQL, we can make relational queries of multiple fields which results in us getting all the data required in one trip (query), unlike the REST architecture in which we would need to make multiple requests (one for each field).
The data could be coming from different collections of the database.
That means that with <mark>one single fetch</mark>, we should be able to fill all the data we need to render a page/component. We will have access to all the collections and mix the elements we need. All so we can use the minimun resources required.

## downside

The implementation of a GraphQl app is a lot more work than a simple REST Api and can be sometimes dismissed for this reason.

## graphql explorer

Most of the time, implementation of a GraphQl app comes with setting up an interface called Explorer to easily visualise all the queries a backend implementation could provide.

We can think of it as our POSTMAN (Postman can also be used with GraphQL), we a better graphic interface. With the bigger difference being that with Postman, we would have our API documentation, in a static way (e.g., to get all users, use the endpoint "http:localhost:3000/api/users/all"), whereas here, is all dynamic, since we han choose multiple combinations for our queries.

[Countries GraphQl API](https://studio.apollographql.com/public/countries/variant/current/explorer)
[Apollo GraphQL explorer sandbox](https://studio.apollographql.com/sandbox/explorer)

## Fetching without Apollo

Although Apollo is the most used library (altough not the only one) to work with GraphQl, we can also do HTTP request.
For that, POSTMAN will be of great help.
Once we pasted the URL in postman, and _fetched the schema_, we have access to the useful autocompletion.
When we have the query we want, and excuted it, we can use the javascript code.

A request to an GraphQL API with fetch will look like this :

```javascript
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var graphql = JSON.stringify({
  query: "query MyQuery {\n    continents{\n        name\n    }\n}",
  variables: {}
})
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: graphql,
  redirect: 'follow'
};

fetch("https://countries.trevorblades.com/graphql", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

The key, and most complicated part here, is that the query is a string and format is important, so mistake there, could make our request to fail.

## other tools

Beside Apollo explorer and Postman, another tool we can use is the [browser extension](https://tinyurl.com/bdc3enkp) from Apollo: Apollo Client Devtools

## apollo client

> legacy and most used GraphQL implementation tool for React but heavy and not the fastest.

[Apollo React Documentation](https://www.apollographql.com/docs/react/get-started)

Other options are [Relay](https://relay.dev/) or [URQL](https://formidable.com/open-source/urql/).

## Setting up the provider

We install Apollo Client and GraphQL:`npm install @apollo/client graphql`

The library works using React Hooks in a similar way of a Context that can distribute GraphQL capabilities to all of our application.
We start by setting up the configuration and wrap ou provider around the App.

```js
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,

} from "@apollo/client";


const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql",
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
   
      </div>
    </ApolloProvider>
  );
}

export default App;
```

## Doing our first Query

[Query](https://www.apollographql.com/docs/react/data/queries)

```javascript
import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_COUNTRIES = gql`
  query CountriesList {
    countries {
      name
    }
  }
`;
function Countries() {
  const { data, loading, error } = useQuery(GET_COUNTRIES);
  console.log("data :>> ", data);
  return (
    <div>
      <h1>COuntries</h1>
      <div>
        {data &&
          data.countries.map((country) => {
            return <li key={country.name}>{country.name}</li>;
          })}
      </div>
    </div>
  );
}
export default Countries;
```

`gql` is a function that formats the query.

`useQuery` is a React Hook that fetches the data.

As you can see, our query has to match a specific format, otherwise it will error.
To help us with that, we can use some tools to make our development process easier.

## Some recommended extensions

[GraphQL: Syntax Highlighting](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql-syntax)
and [GraphQL: Language Feature Support](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql) are some of the extensions we can use.
After installing them, we should add a file `.graphqlrc` to the **root** folder.

```json
{
   schema: "https://countries.trevorblades.com/graphql"
}
```

Is a way of "importing" the schema in our code, giving us intellisense autocompletion. The same that happens when we click _Schema Fetched_ in Postman

## QUERY WITH PROPS : VARIABLES

We can use the possibility of specifiying one or several parameters to get individual elements from the API, to build a component that receives that value as parameter.
For that we have to build a query that recieves an argument, that then is passed to the `useQuery()` as an object with a _variables_ field:

```javascript
const GET_COUNTRY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      capital
    }
  }
`;

function Country({ code }) {
  const { data, loading, error } = useQuery(GET_COUNTRY,{ variables: { code } });
  return (
    <div>
      <p>{data?.country.name}</p>
      <p>{data?.country.capital}</p>
    </div>
  );
}
export default Country;
```

The `$` sign means we are declaring a variable, similarly to String Literals.

[ID](https://graphql.org/learn/schema/#lists-and-non-null) represents a unique identifier.

The operator `!` after the type name is known as the [NON-NULL](https://graphql.org/learn/schema/#lists-and-non-null) operator, means that the server expects to return always a value (or a non null value) for that field, or will ouput an error, thus making mandatory that field (by default every field is optional, just the opposite as in TS).

Graphql allow us also to do sorting, and other operations with the data we request, in order to make it easier for the frontend to display it.

## Generate Typescript types from GraphQL schema

We can start generating types automatically, since the schema, as we have seen above, is already typed.
[codegen](https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-react-apollo) is a tool that generates code out of your GraphQL schema and operations. It can generate types, hooks, and even full React components based on your GraphQL code.

To implement it we need to install the following dependencies : `npm i -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo @graphql-codegen/near-operation-file-preset`
Besides the one called _codegen_ , we include two more for code generation.

Then create a file named `codegen.ts` at the root of your project and add the fallowing code:

```ts
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://countries.trevorblades.com/graphql",
  documents: "src/graphql/*.gql",
  generates: {
    "src/graphql/__generated__/types.ts": {
      plugins: ["typescript"],
    },
    "src/graphql/__generated__": {
      preset: "near-operation-file",
      plugins: ["typescript-react-apollo", "typescript-operations"],
      presetConfig: {
        folder: "__generated__",
        baseTypesPath: "types.ts",
        extension: ".ts",
      },
      config: {
        reactApolloVersion: 3,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
  },
};
export default config;
```

This file describes how are we gonna generate types for our files.

Add a script to your package.json file:

```json
"scripts": {
    "codegen": "graphql-codegen --verbose --config codegen.ts"
  },
```

Now we should create a folder inside `/src` named `graphql` (as we have specified in the config gile before).

Inside that folder, we should create a file with the extension `.gql` (e.g. `Countries.gql`).
Inside that file we will paste our queries :

```yml
query CountriesBeginWithTheLetterA {
  countries(filter: { continent: { regex: "^A" } }) {
    code
    name
    currency
  }
}
```

And finally, we run the command `npm run codegen`

This will generate  a folder called `__generated__` , and inside the file `types.ts` we can find all the Types generated from the Types in the Server.

It is worth mentioning that although is very helpful, sometimes we will need to double check some things as it doesn't always work 100% perfect (overusing the type `Maybe` making optional fields that don't need to be).

## Adapting the generated types to match our needs

Be aware that the types are generated using all the properties defined in the Server, when we might be fetching just one or two.
If I want to use only the ones generated in the queries, I will have to look for the type generated with the name of the query + query , e.g. the type generated from the query `query CountriesNameCapital` will be `CountriesNameCapitalQuery` , inside the folder `countries.ts`

If we use that type to strong type our `useQuery()` hook, we will be typing automatically all the values generated.

e.g. :

```ts
 const { data, loading, error } = useQuery<CountriesNameCapitalQuery>(GET_COUNTRIES);
```

Now, we won't be able to try to render a property we haven't fetched.

If you create a new query, do not forget to run the command `npm run codegen` to regenerate all the types.

## Autogenerated Custom Hooks

The role of the plugin "typescript-react-apollo" is to generate custom hooks with the queries created.

For the previous query, we can find the hook `useCountriesNameCapitalQuery` , together with an exaple code we can use.

```javascript
@example
const { data, loading, error } = useCountriesNameCapitalQuery({
   variables: {
   },
 });
```

Now, instead of having to create a query, we can use the custom hook right away, and will also come with the right types

```javascript
const { data, loading, error } = useCountriesNameCapitalQuery({});
```

THis help us to kind of close the circle of type safety from backend to frontend.

However, the main drawback is that we would need to regenerate the types with every new query we create. Wouldn't be easy to automate.

## server

For the shake of seing the at the most basic level, how a graphql backend behaves and looks like, let's create a simple one, with no complex schemas and no database connections, following the official [documentation](https://www.apollographql.com/docs/apollo-server/getting-started).

Create run `npm init` to crete a `package.json`.
Include `type:"module"` to be able to import/export.

Install graphql and Apollo server: `npm install @apollo/server graphql`

Create an `index.js` at the root folder.

Follow the instructions to define the schema, create some data, define a resolver, and finally create a new instance of the Apollo server.

Now run in the browser the local adress, and the Apollo Explorer will open.

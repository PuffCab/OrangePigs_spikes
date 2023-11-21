import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const ContinentDocument = gql`
    query Continent {
  countries {
    name
    capital
    emoji
  }
}
    `;

/**
 * __useContinentQuery__
 *
 * To run a query within a React component, call `useContinentQuery` and pass it any options that fit your needs.
 * When your component renders, `useContinentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContinentQuery({
 *   variables: {
 *   },
 * });
 */
export function useContinentQuery(baseOptions?: Apollo.QueryHookOptions<ContinentQuery, ContinentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContinentQuery, ContinentQueryVariables>(ContinentDocument, options);
      }
export function useContinentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContinentQuery, ContinentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContinentQuery, ContinentQueryVariables>(ContinentDocument, options);
        }
export function useContinentSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ContinentQuery, ContinentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ContinentQuery, ContinentQueryVariables>(ContinentDocument, options);
        }
export type ContinentQueryHookResult = ReturnType<typeof useContinentQuery>;
export type ContinentLazyQueryHookResult = ReturnType<typeof useContinentLazyQuery>;
export type ContinentSuspenseQueryHookResult = ReturnType<typeof useContinentSuspenseQuery>;
export type ContinentQueryResult = Apollo.QueryResult<ContinentQuery, ContinentQueryVariables>;
export const CountriesWithEurDocument = gql`
    query CountriesWithEUR {
  countries(filter: {currency: {eq: "EUR"}}) {
    code
    name
  }
}
    `;

/**
 * __useCountriesWithEurQuery__
 *
 * To run a query within a React component, call `useCountriesWithEurQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountriesWithEurQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountriesWithEurQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountriesWithEurQuery(baseOptions?: Apollo.QueryHookOptions<CountriesWithEurQuery, CountriesWithEurQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountriesWithEurQuery, CountriesWithEurQueryVariables>(CountriesWithEurDocument, options);
      }
export function useCountriesWithEurLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountriesWithEurQuery, CountriesWithEurQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountriesWithEurQuery, CountriesWithEurQueryVariables>(CountriesWithEurDocument, options);
        }
export function useCountriesWithEurSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CountriesWithEurQuery, CountriesWithEurQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CountriesWithEurQuery, CountriesWithEurQueryVariables>(CountriesWithEurDocument, options);
        }
export type CountriesWithEurQueryHookResult = ReturnType<typeof useCountriesWithEurQuery>;
export type CountriesWithEurLazyQueryHookResult = ReturnType<typeof useCountriesWithEurLazyQuery>;
export type CountriesWithEurSuspenseQueryHookResult = ReturnType<typeof useCountriesWithEurSuspenseQuery>;
export type CountriesWithEurQueryResult = Apollo.QueryResult<CountriesWithEurQuery, CountriesWithEurQueryVariables>;
export const CountriesBeginWithTheLetterLDocument = gql`
    query CountriesBeginWithTheLetterL {
  countries(filter: {continent: {regex: "^L"}}) {
    code
    name
    currency
  }
}
    `;

/**
 * __useCountriesBeginWithTheLetterLQuery__
 *
 * To run a query within a React component, call `useCountriesBeginWithTheLetterLQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountriesBeginWithTheLetterLQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountriesBeginWithTheLetterLQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountriesBeginWithTheLetterLQuery(baseOptions?: Apollo.QueryHookOptions<CountriesBeginWithTheLetterLQuery, CountriesBeginWithTheLetterLQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountriesBeginWithTheLetterLQuery, CountriesBeginWithTheLetterLQueryVariables>(CountriesBeginWithTheLetterLDocument, options);
      }
export function useCountriesBeginWithTheLetterLLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountriesBeginWithTheLetterLQuery, CountriesBeginWithTheLetterLQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountriesBeginWithTheLetterLQuery, CountriesBeginWithTheLetterLQueryVariables>(CountriesBeginWithTheLetterLDocument, options);
        }
export function useCountriesBeginWithTheLetterLSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CountriesBeginWithTheLetterLQuery, CountriesBeginWithTheLetterLQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CountriesBeginWithTheLetterLQuery, CountriesBeginWithTheLetterLQueryVariables>(CountriesBeginWithTheLetterLDocument, options);
        }
export type CountriesBeginWithTheLetterLQueryHookResult = ReturnType<typeof useCountriesBeginWithTheLetterLQuery>;
export type CountriesBeginWithTheLetterLLazyQueryHookResult = ReturnType<typeof useCountriesBeginWithTheLetterLLazyQuery>;
export type CountriesBeginWithTheLetterLSuspenseQueryHookResult = ReturnType<typeof useCountriesBeginWithTheLetterLSuspenseQuery>;
export type CountriesBeginWithTheLetterLQueryResult = Apollo.QueryResult<CountriesBeginWithTheLetterLQuery, CountriesBeginWithTheLetterLQueryVariables>;
export type ContinentQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ContinentQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', name: string, capital?: string | null, emoji: string }> };

export type CountriesWithEurQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CountriesWithEurQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', code: string, name: string }> };

export type CountriesBeginWithTheLetterLQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CountriesBeginWithTheLetterLQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', code: string, name: string, currency?: string | null }> };

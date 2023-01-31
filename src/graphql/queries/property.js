import { gql } from "@apollo/client";

export const GET_PROPERTIES = gql`
    query GetProperties($limit: Int) {
        propertyCollection(limit: $limit) {
            items {
                id
                title
                address
                category
                image {
                    url
                }
            }
        }
    }
`;

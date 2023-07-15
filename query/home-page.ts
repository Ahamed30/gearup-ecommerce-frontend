export const homePageQuery = `{
  homePages {
    id
    components {
      ... on ProductGrid {
        id
        __typename
      }
    }
  }
}`;

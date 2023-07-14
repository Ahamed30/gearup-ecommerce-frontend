export const homePageQuery = `{
    homePages {
      id
      components {
        ... on ProductGrid {
          id
          name
        }
      }
    }
  }`;

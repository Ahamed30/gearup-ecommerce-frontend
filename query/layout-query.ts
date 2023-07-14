export const headerQuery = `{ 
    headers {
      id
      name
      navLinks {
        id
        name
        link
      }
    } 
  }`;

export const footerQuery = `{
    footers{
      id
    	subscribeForm {
        id
        headerText
        subText
      }
      leftColumnTitle
      leftColumnDescription
      linkColumns {
        id
        title
        links{
          id
          name
          link
        }
      }
      socialIcons {
        id
        name
        url
        link
      }
    }
  }`;

export const getAllContentfulData = async () => {
    const endpoint = `https://graphql.contentful.com/content/v1/spaces/${import.meta.env.CONTENTFUL_SPACE_ID}`;
    const query = `{
        informationCollection {
          items {
            sys {
              id
            }
            title
          }
        }
        skillsCollection {
          items {
            sys {
              id
            }
            title
          }
        }
      }`;
  
    const fetchOptions = {
      spaceID: import.meta.env.CONTENTFUL_SPACE_ID,
      accessToken: import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
      endpoint,
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.CONTENTFUL_DELIVERY_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    };
    const response = await fetch(endpoint, fetchOptions);
    const jsonData = await response.json();
    console.log(jsonData)
    // return
    return {
      information: parseContentfulItems(jsonData.data?.informationCollection?.items),
      skills: parseContentfulItems(jsonData.data?.skillsCollection?.items),
    };
  };
  
  const parseContentfulItems = (items) => {
    const parsedItems = items
      .slice(0)
      .reverse()
      .map((item) => {
        return {
          ...item,
          id: item.sys.id,
        //   image: item.image.url,
        };
      })
      .map(({ sys, ...items }) => items);
    return parsedItems;
  };
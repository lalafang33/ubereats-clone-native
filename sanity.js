import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: "3t4wcuek",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21"
})

const builder = imageUrlBuilder(client)

// helper function
export const urlFor = (source) => builder.image(source);

export default client; 
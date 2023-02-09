import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// connection to the backend
const client = sanityClient({
  projectId: "3t4wcuek",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21"
})

// helper function for images from sanity
const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source);

export default client; 
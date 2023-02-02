import client from "./client";
const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const postListing = (listing, onUploadProgress) => {
  const { title, price, category, description, images, location } = listing;
  const data = new FormData();

  data.append("title", title);
  data.append("price", price);
  data.append("categoryId", category.value);
  data.append("description", description);
  images.map((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );
  if (location) data.append("location", JSON.stringify(location));

  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default { getListings, postListing };

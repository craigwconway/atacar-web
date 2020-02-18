import axios from "axios";

export async function list(callback) {
  const res = await axios.get(process.env.REACT_APP_API_HOST + "inventory/");
  callback(res.data.results);
}

export async function get(id, callback) {
  const res = await axios.get(
    process.env.REACT_APP_API_HOST + `inventory/${id}/`
  );
  callback(res.data);
}

export async function create(item, auth) {
  await axios.post(process.env.REACT_APP_API_HOST + "inventory/", item, {
    headers: {
      Authorization: `JWT ${auth.access}`
    }
  });
}

export async function update(item, auth) {
  await axios.put(
    process.env.REACT_APP_API_HOST + "inventory/" + item.id + "/",
    item,
    {
      headers: {
        Authorization: `JWT ${auth.access}`
      }
    }
  );
}

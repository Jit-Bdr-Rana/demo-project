import axios from "axios";
import { error } from "console";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const get = async (url: string) => {
  try {
    const data = await API.get(url);
    return { data };
  } catch (e: any) {
    return { error: e?.response?.message };
  }
};

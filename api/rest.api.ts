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

export const post = async (url: string, data: any) => {
  try {
    const response = await API.post(url, data);
    return { data: response.data };
  } catch (e: any) {
    return { error: e?.response?.message };
  }
};

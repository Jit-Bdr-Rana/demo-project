import axios from "axios";
import { error } from "console";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const get = async (url: string) => {
  try {
    const { data } = await API.get(url);
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

export const patch = async (url: string, data: any) => {
  try {
    const response = await API.patch(url, data);
    return { data: response.data };
  } catch (e: any) {
    return { error: e?.response?.message };
  }
};

export const remove = async (url: string) => {
  try {
    const response = await API.delete(url);
    return { data: response.data };
  } catch (e: any) {
    return { error: e?.response?.message };
  }
};

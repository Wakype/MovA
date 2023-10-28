import axios from "axios";

const token = process.env.NEXT_PUBLIC_AUTHORIZATION_TOKEN;
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
export const imageUrl = process.env.NEXT_PUBLIC_IMG_URL;

export const axiosClient = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: apiKey,
  },
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

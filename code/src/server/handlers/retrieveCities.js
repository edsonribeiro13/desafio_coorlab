import axiosInstance from "../config/axiosInstace";

/**
 * Busca no servidor todas as tuplas
 */
export default async () => {
  const result = await axiosInstance({
    url: "/transport",
    method: "GET",
  });

  return result.data;
};

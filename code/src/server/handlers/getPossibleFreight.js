import axiosInstance from "../config/axiosInstace";

/**
 * Busca no servidor as tuplas que correspondem as cidades
 */
export default async (city) => {
  const result = await axiosInstance({
    url: "/transport",
    method: "GET",
    params: {
      city,
    },
  });

  return result.data;
};

'use client'

export function useAPIAction() {
  const apiGET = async (url: string, params?: any) => {
    console.log('params: ', params);
    const query = params
      ? "?" + new URLSearchParams(params).toString()
      : "";
    const api = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_API_VERSION}${url}${query}`;
    try {
      const res = await fetch(api, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
      return await res.json();
    } finally {
      console.log('done');
    }
  }
  return { apiGET }
}
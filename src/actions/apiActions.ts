'use client'

export function useAPIAction() {
  const apiGET = async (url: string, params?: any) => {
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
  const apiPOST = async (url: string, params?: any) => {
    const api = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_API_VERSION}${url}`;
    try {
      const res = await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params)
      })
      return await res.json();
    } finally {
      console.log('done');
    }

  }
  return { apiGET, apiPOST }
}
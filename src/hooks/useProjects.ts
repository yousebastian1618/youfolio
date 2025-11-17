import useSWR from "swr";
import {useAPIAction} from "@/actions/apiActions";

export function useProjects() {

  const { apiGET } = useAPIAction();

  const { data: bannerData, error: bannerError, isLoading: bannerLoading } = useSWR<string[]>(
    '/projects?key=projects/BannerCMS/',
    (url: string) => apiGET(url),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 0
    }
  );

  const { data: ceData, error: ceError, isLoading: ceLoading } = useSWR<string[]>(
    '/projects?key=projects/CreativeEngine/',
    (url: string) => apiGET(url),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 0
    }
  );

  const { data: vniData, error: vniError, isLoading: vniLoading } = useSWR<string[]>(
    '/projects?key=projects/VitaliNutritionInc/',
    (url: string) => apiGET(url),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 0
    }
  );

  const { data: xConnectData, error: xConnectError, isLoading: xConnectLoading } = useSWR<string[]>(
    '/projects?key=projects/XConnect/',
    (url: string) => apiGET(url),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 0
    }
  );

  return {
    bannerData,
    ceData,
    vniData,
    xConnectData,
    loading: bannerLoading || ceLoading || vniLoading || xConnectLoading,
    error: bannerError || ceError || vniError || xConnectError
  }
}
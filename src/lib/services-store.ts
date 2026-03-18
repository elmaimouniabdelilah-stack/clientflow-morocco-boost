export interface ServiceData {
  id: string;
  name: string;
  duration: string;
  price: string;
  enabled: boolean;
  iconId: string;
  category: string;
  description: string;
}

const STORAGE_KEY = "clientflow_services";

const defaultServices: ServiceData[] = [
  { id: "1", name: "خدمة 1", duration: "30", price: "", enabled: true, iconId: "sparkles", category: "other", description: "" },
  { id: "2", name: "خدمة 2", duration: "30", price: "", enabled: true, iconId: "sparkles", category: "other", description: "" },
  { id: "3", name: "خدمة 3", duration: "30", price: "", enabled: true, iconId: "sparkles", category: "other", description: "" },
];

export const loadServices = (): ServiceData[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return defaultServices;
};

export const saveServices = (services: ServiceData[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(services));
};

export const getEnabledServices = (): ServiceData[] => {
  return loadServices().filter(s => s.enabled);
};

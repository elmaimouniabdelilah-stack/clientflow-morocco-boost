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
  { id: "1", name: "استشارة", duration: "30", price: "100", enabled: true, iconId: "briefcase", category: "consulting", description: "جلسة استشارية مع متخصص" },
  { id: "2", name: "حلاقة", duration: "45", price: "80", enabled: true, iconId: "scissors", category: "beauty", description: "حلاقة شعر رجالية" },
  { id: "3", name: "تنظيف", duration: "60", price: "150", enabled: true, iconId: "sparkles", category: "beauty", description: "تنظيف بشرة عميق" },
  { id: "4", name: "علاج", duration: "45", price: "200", enabled: true, iconId: "heart", category: "health", description: "جلسة علاج طبيعي" },
  { id: "5", name: "فحص", duration: "30", price: "120", enabled: true, iconId: "stethoscope", category: "health", description: "فحص طبي شامل" },
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

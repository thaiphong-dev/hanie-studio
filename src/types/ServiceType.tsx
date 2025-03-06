export type ServiceDetail = {
  id: string;
  name: string;
  duration: string;
  minPrice?: string;
  maxPrice?: string;
  unit?: string;
  details?: string;
};

export type ServiceCategory = {
  id: string;
  name: string;
  services: ServiceDetail[];
};

export type StatisticIcon =
  | "customers"
  | "farmers"
  | "products"
  | "delivery";

export type Statistic = {
  value: string;
  label: string;
  description: string;
  icon: StatisticIcon;
};

export const STATISTICS: Statistic[] = [
  {
    value: "500+",
    label: "Happy Customers",
    description:
      "Serving households, businesses and farmers across Nigeria.",
    icon: "customers",
  },
  {
    value: "100+",
    label: "Trusted Farmers",
    description:
      "Partnering with experienced farmers to deliver quality produce.",
    icon: "farmers",
  },
  {
    value: "20+",
    label: "Agricultural Products",
    description:
      "Offering grains, vegetables, fruits, livestock and more.",
    icon: "products",
  },
  {
    value: "36 States",
    label: "Nationwide Delivery",
    description:
      "Reliable supply and delivery across Nigeria.",
    icon: "delivery",
  },
];
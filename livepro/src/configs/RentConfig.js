export const RentConfig = {
  title: "Find rental homes in Coimbatore",
  subtitle: (
    <>
      <span>5K+</span> new rental listings every week
    </>
  ),
  tabs: [
    { label: "Buy", path: "/" },
    { label: "Rent", path: "/rent", exact: true },
    { label: "Commercial", path: "/commercial" },
    { label: "PG/Co-Living", path: "/pg" },
    { label: "Plots", path: "/plots" },
  ],
  locations: ["Coimbatore", "Chennai", "Bangalore"],
  localities: ["RS Puram", "Peelamedu", "Saibaba Colony", "Gandhipuram"],
  promo: {
    img: "./src/img/rentOffer.webp",
    date: "20th Sep - 25th Oct 2025",
    cta: "Check Rentals",
  },
};

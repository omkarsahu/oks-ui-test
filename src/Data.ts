// // data={[
// //             {
// //               name: "Series 1",
// //               data: [12, 18, 22, 30, 28, 35, 40, 38, 45, 50, 48, 55],
// //             },
// //             {
// //               name: "Series 2",
// //               data: [20, 25, 23, 28, 35, 32, 38, 42, 46, 44, 49, 52],
// //             },
// //             {
// //               name: "Series 3",
// //               data: [15, 20, 18, 25, 30, 34, 37, 39, 41, 45, 47, 50],
// //             },
// //             {
// //               name: "Series 4",
// //               data: [25, 22, 30, 35, 33, 40, 43, 45, 48, 52, 55, 58],
// //             },
// //             {
// //               name: "Series 5",
// //               data: [10, 15, 20, 18, 25, 28, 32, 35, 37, 40, 42, 45],
// //             },
// //             {
// //               name: "Series 6",
// //               data: [18, 22, 27, 29, 31, 36, 39, 41, 44, 46, 49, 53],
// //             },
// //             {
// //               name: "Series 7",
// //               data: [14, 19, 24, 26, 29, 33, 36, 38, 42, 45, 47, 51],
// //             },
// //             {
// //               name: "Series 8",
// //               data: [22, 28, 26, 32, 35, 39, 41, 44, 47, 50, 53, 57],
// //             },
// //             {
// //               name: "Series 9",
// //               data: [16, 21, 25, 28, 30, 34, 37, 40, 43, 46, 48, 52],
// //             },
// //           ]}
// //           categories={[
// //             "Jan",
// //             "Feb",
// //             "Mar",
// //             "Apr",
// //             "May",
// //             "Jun",
// //             "Jul",
// //             "Aug",
// //             "Sep",
// //             "Oct",
// //             "Nov",
// //             "Dec",
// //           ]}

// // function generateRandomSeries(
// //   seriesCount = 20,
// //   points = 12,
// //   min = 10000,
// //   max = 700000,
// // ) {
// //   return Array.from({ length: seriesCount }, (_, i) => ({
// //     name: `Series ${i + 1}`,
// //     data: Array.from(
// //       { length: points },
// //       () => Math.floor(Math.random() * (max - min + 1)) + min,
// //     ),
// //   }));
// // }

// // // Usage
// // const data = generateRandomSeries(10, 12);

// // const categories = [
// //   "Jan",
// //   "Feb",
// //   "Mar",
// //   "Apr",
// //   "May",
// //   "Jun",
// //   "Jul",
// //   "Aug",
// //   "Sep",
// //   "Oct",
// //   "Nov",
// //   "Dec",
// // ];

// function generateSeriesWithDates({
//   startDate,
//   endDate,
//   seriesCount = 5,
//   min = 10,
//   max = 100,
// }) {
//   const start = new Date(startDate);
//   const end = new Date(endDate);

//   const categories = [];
//   const current = new Date(start);

//   // Generate monthly categories
//   while (current <= end) {
//     categories.push(
//       current.toLocaleString("default", {
//         month: "short",
//         year: "numeric",
//       }),
//     );
//     current.setMonth(current.getMonth() + 1);
//   }

//   // Generate series data
//   const series = Array.from({ length: seriesCount }, (_, i) => ({
//     name: `Series ${i + 1}`,
//     data: Array.from(
//       { length: categories.length },
//       () => Math.floor(Math.random() * (max - min + 1)) + min,
//     ),
//   }));

//   return { categories, series };
// }
// const chartData =generateSeriesWithDates({
//   startDate: "2024-02-01",
//   endDate: "2025-12-01",
//   interval: "daily",
//   seriesCount: 3,
// });

// const categories = chartData.categories;
// const data = chartData.series;

// export { data, categories };

type GenerateSeriesOptions = {
  startDate: string | Date;
  endDate: string | Date;
  interval?: "daily" | "weekly" | "monthly" | "yearly";
  seriesCount?: number;
  min?: number;
  max?: number;
};

function generateSeriesWithDates({
  startDate,
  endDate,
  interval = "monthly",
  seriesCount = 5,
  min = 100,
  max = 1200,
}: GenerateSeriesOptions) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const categories: string[] = [];
  const current = new Date(start);

  while (current <= end) {
    let label: string;

    if (interval === "daily") {
      label = current.toISOString().split("T")[0];
      current.setDate(current.getDate() + 1);
    } else if (interval === "weekly") {
      label = current.toISOString().split("T")[0];
      current.setDate(current.getDate() + 7);
    } else if (interval === "yearly") {
      label = current.getFullYear().toString();
      current.setFullYear(current.getFullYear() + 1);
    } else {
      label = current.toLocaleString("default", {
        month: "short",
        year: "numeric",
      });
      current.setDate(1);
      current.setMonth(current.getMonth() + 1);
    }

    categories.push(label);
  }

  const series = Array.from({ length: seriesCount }, (_, i) => ({
    name: `Series ${i + 1}`,
    data: Array.from(
      { length: categories.length },
      () => Math.floor(Math.random() * (max - min + 1)) + min,
    ),
  }));

  return { categories, series };
}

const chartData = generateSeriesWithDates({
  startDate: "2025-02-01",
  endDate: "2025-03-30",
  interval: "daily",
  seriesCount: 5,
});

const categories = chartData.categories;
const data = chartData.series;

export { data, categories };

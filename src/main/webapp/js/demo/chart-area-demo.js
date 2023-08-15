Highcharts.chart("myAreaChart", {
  chart: {
    type: "line",
  },
  title: {
    text: "사용자들의 몸무게 비교",
  },
  subtitle: {
    text: "",
  },
  xAxis: {
    categories: [
      "6월1일",
      "6월 8일",
      "6월 15일",
      "6월 22일",
      "6월 29일",
      "7월 6일",
      "7월 13일",
      "7월 20일",
      "7월 27일",
      "8월 4일",
      "8월 11일",
      "8월 18일",
    ],
  },
  yAxis: {
    title: {
      text: "몸무게 (kg)",
    },
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true,
      },
      enableMouseTracking: true,
    },
  },
  series: [
    {
      name: "최다인",
      data: [
        rand(45, 55),
        rand(45, 55),
        rand(45, 55),
        rand(45, 55),
        rand(45, 55),
        rand(45, 55),
        rand(45, 55),
        rand(45, 55),
        rand(45, 55),
        rand(45, 55),
        rand(45, 55),
        rand(45, 55),
      ],
    },
    {
      name: "장건욱",
      data: [
        rand(60, 80),
        rand(60, 80),
        rand(60, 80),
        rand(60, 80),
        rand(60, 80),
        rand(60, 80),
        rand(60, 80),
        rand(60, 80),
        rand(60, 80),
        rand(60, 80),
        rand(60, 80),
        rand(60, 80),
      ],
    },
    {
      name: "최병훈",
      data: [
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
      ],
    },
    {
      name: "이나행",
      data: [
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
      ],
    },
    {
      name: "장지웅",
      data: [
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
      ],
    },
    {
      name: "권용현",
      data: [
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
        rand(50, 70),
      ],
    },
  ],
});

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

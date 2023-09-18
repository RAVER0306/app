import { use } from "echarts/core";

// 手动导入ECharts模块以减小包的大小
import { CanvasRenderer } from "echarts/renderers";
import { BarChart, PieChart } from "echarts/charts";
import { TitleComponent, GridComponent, TooltipComponent, LegendComponent } from "echarts/components";

export default defineNuxtPlugin(() => {
  use([
    CanvasRenderer,
    BarChart,
    PieChart,
    TitleComponent,
    GridComponent,
    TooltipComponent,
    LegendComponent,
  ]);
});

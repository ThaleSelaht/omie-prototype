import React from 'react';

import internetGrowthData from './donut-series-data.json';

import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartArea,
  ChartTooltip,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels
} from '@progress/kendo-react-charts';

const labelContent = (e) => (`${ e.category }: \n ${e.value}%`);

const ChartContainer = () => {
    const mapSeries = (series, index, array) => (
      <ChartSeriesItem
        type="donut"
        startAngle={150}
        name={series.name}
        data={series.data}
        field="value"
        categoryField="category"
        colorField="color"
        key={index}
      >
        {
          index === array.length - 1
          && <ChartSeriesLabels
                position="outsideEnd"
                background="none"
                content={labelContent} />
        }
      </ChartSeriesItem>
    );
    const renderTooltip = (context) => {
        const { category, series, value } = context.point || context;
        return (<div>{category} ({series.name}): {value}%</div>);
    };

    return (
      <Chart>
        <ChartTooltip render={renderTooltip} />
        <ChartTitle text="Origem dos Leads" />
        <ChartLegend visible={false} />
        <ChartArea background="none" />
        <ChartSeries>
          {internetGrowthData.map(mapSeries)}
        </ChartSeries>
      </Chart>
    );
};

class DonutContainer extends React.Component {
  render() {
    return <ChartContainer />
  }
}
export default DonutContainer;

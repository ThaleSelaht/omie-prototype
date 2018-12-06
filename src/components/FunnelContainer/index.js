import React from 'react';

import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartTooltip,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels
} from '@progress/kendo-react-charts';
import data from './funnel-data.json';

const tooltipRender = (({ point = {} }) => (point.category));

class FunnelContainer extends React.Component {
    state = { dynamicSlope: true, dynamicHeight: false }
    render() {
        const { dynamicSlope, dynamicHeight } = this.state;

        return (
          <div>            
            <Chart style={{ margin: '0 auto', width: 300 }} >
              <ChartTitle text="Funil de vendas" />
              <ChartSeries>
                <ChartSeriesItem
                  type="funnel"
                  data={data}
                  categoryField="stat"
                  field="count"
                  colorField="color"
                  dynamicSlope={dynamicSlope}
                  dynamicHeight={dynamicHeight}
                >
                  <ChartSeriesLabels color="white" background="none" format="N0" />
                </ChartSeriesItem>
              </ChartSeries>
              <ChartTooltip render={tooltipRender} />
              <ChartLegend visible={false} />
            </Chart>
          </div>);
    }
}

export default FunnelContainer;
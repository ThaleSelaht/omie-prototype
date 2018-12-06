import React from 'react';
import 'hammerjs';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTitle,
    ChartLegend
} from '@progress/kendo-react-charts';

const categories = [ 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ];
const series = [ {
    name: 'Consultoria',
    data: [ 4, 8, 8, 9, 9, 10, 4, 8, 10, 7 ]
}, {
    name: 'Comércio',
    data: [ 5, 7, 7, 6, 8, 9, 5, 8, 4, 4 ]
}, {
    name: 'Restaurante',
    data: [ 0, 0, 1, 1, 4, 3, 10, 5, 4, 20 ]
},];

class ChartContainer extends React.Component{
    render() {
        return(
            <Chart>
                <ChartTitle text="Leads por segmento" />
                <ChartLegend position="top" orientation="horizontal" />
                <ChartCategoryAxis>
                    <ChartCategoryAxisItem categories={categories} startAngle={45} />
                </ChartCategoryAxis>
                <ChartSeries>
                    {series.map((item, idx) => (
                        <ChartSeriesItem
                            key={idx}
                            type="column"
                            data={item.data}
                            name={item.name}
                        />))}
                </ChartSeries>
            </Chart>
        );
    }
}

export default ChartContainer;
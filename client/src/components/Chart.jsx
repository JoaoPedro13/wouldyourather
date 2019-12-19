

import React, { PureComponent } from 'react';
import {
  ResponsiveContainer, PieChart, Pie, Legend, Cell, LabelList
} from 'recharts';
const RADIAN = Math.PI / 180


export default class Example extends PureComponent {
  static jsfiddleUrl = '//jsfiddle.net/alidingling/6okmehja/';
  constructor(props) {
    super(props);
    this.COLORS = ['#0088FE', '#00C49F']
    this.renderCustomizedLabel = this.renderCustomizedLabel.bind(this);
    this.data = [
      { name: this.props.optionA, value: this.props.amountForA }, { name: this.props.optionB, value: this.props.amountForB },
    ];
  }


  renderCustomizedLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };


  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={this.data} label={this.renderCustomizedLabel} labelLine={false} fill="white" > {this.data.map((entry, index) => <Cell name={entry.name} fill={this.COLORS[index % this.COLORS.length]} />)}</Pie>
            <Legend payload={[{ value: this.props.optionA, type: "circle", id: "ID01" }, { value: this.props.optionB, type: "circle", id: "ID01" }]} />
            <LabelList dataKey="name" position="outside" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

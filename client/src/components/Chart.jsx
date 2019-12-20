import React, { PureComponent } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
  Cell,
  LabelList
} from "recharts";
const RADIAN = Math.PI / 180;

export default class Example extends PureComponent {
  static jsfiddleUrl = "//jsfiddle.net/alidingling/6okmehja/";
  constructor(props) {
    super(props);
    this.COLORS = ["#3e4638", "#a8894a"];
    this.renderCustomizedLabel = this.renderCustomizedLabel.bind(this);
    this.data = [
      { name: this.props.optionA, value: this.props.amountForA },
      { name: this.props.optionB, value: this.props.amountForB }
    ];
  }

  renderCustomizedLabel({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  }

  render() {
    return (
      <div className="chart">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              dataKey="value"
              data={this.data}
              label={this.renderCustomizedLabel}
              labelLine={false}
              fill="white"
            >
              {this.data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  name={entry.name}
                  fill={this.COLORS[index % this.COLORS.length]}
                />
              ))}
            </Pie>
            <Legend
              verticalAlign="top"
              align="right"
              height={36}
              payload={[
                {
                  value: this.props.optionA,
                  type: "circle",
                  id: "ID01",
                  color: this.COLORS[0]
                },
                {
                  value: this.props.optionB,
                  type: "circle",
                  id: "ID02",
                  color: this.COLORS[1]
                }
              ]}
            />
            <LabelList dataKey="name" position="outside" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

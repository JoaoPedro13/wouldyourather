

import React, { PureComponent } from 'react';
import {
  ResponsiveContainer, PieChart, Pie, Legend,
} from 'recharts';


export default class Example extends PureComponent {
  static jsfiddleUrl = '//jsfiddle.net/alidingling/6okmehja/';
  constructor(props) {
    super(props);
    this.data = [
      { name: 'Group A', value: this.props.amountForA }, { name: 'Group B', value: this.props.amountForB },

    ];
  }
  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={this.data} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

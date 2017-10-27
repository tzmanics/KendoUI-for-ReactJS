import React, { Component } from 'react';
import { DatePicker } from '@progress/kendo-dateinputs-react-wrapper';
import { NumericTextBox } from '@progress/kendo-inputs-react-wrapper';
import { Chart } from '@progress/kendo-charts-react-wrapper';
import { Button } from '@progress/kendo-buttons-react-wrapper';
import '@progress/kendo-ui';
import '@progress/kendo-theme-default/dist/all.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTime: new Date()
    };
    this.onchange = this.onchange.bind(this);
  }

  onchange(e) {
    console.log(e.sender.value());
    this.setState({
      dateTime: e.sender.value()
    });
  }

  render() {
    return (
      <div className="App">
        <div className="date-picker">
          <DatePicker
            value={ this.dateTime }
            min={ new Date(2017, 11, 1) }
            max={ new Date(2018, 11, 1) }
            format={ "yyyy/MM/dd" }
            change={ this.onchange }
          />
        </div>
        <div className="numeric-inputs">
          <NumericTextBox
            decimals={ 2 }
            format='c0'
            min={ 0 }
            max={ 500 }
            round={ true }
            spinners={ true }
            value={ 22 }
          ></NumericTextBox>
        </div>
      <Chart series={[{ data: [1, 2, .5] }, { data: [.5, 1, 2] }]} />
      <Button> Check Rates </Button>
      </div>
    );
  }
}

export default App;

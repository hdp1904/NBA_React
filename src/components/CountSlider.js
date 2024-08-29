import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

export class CountSlider extends React.Component {
 state = {
   inputValue: 0,
 }

 onChange = (value) => {
   const cleanValue = Number(value) ? value : this.state.inputValue;
   this.setState({
     inputValue: cleanValue,
   });
   this.props.onCountSliderChange(cleanValue);
 }

 render() {
   return (
     <Row>
       <Col span={12}>
         <Slider min={1} max={25} onChange={this.onChange} value={this.state.inputValue} />
       </Col>
       <Col span={5}>
         <InputNumber
           min={1}
           max={20}
           style={{ marginLeft: 12 }}
           value={this.state.inputValue}
           onChange={this.onChange}
         />
       </Col>
     </Row>
   );
 }
}

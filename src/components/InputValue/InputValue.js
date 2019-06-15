import React from 'react';
import './style.css'
import { Slider, InputNumber, Row, Col } from 'antd';

const InputValue = ({minValue, maxValue, onChangeFunc, value, formatter, parser}) => {

  return(
    <div className="input-container">
      <Row type="flex" justify="space-between">
        <Col lg={16} sm={16} xs={14}>
          <Slider
            min={minValue}
            max={maxValue}
            onChange={onChangeFunc}
            value={value}
            tipFormatter={formatter}
          />
        </Col>
        <Col lg={6} sm={6} xs={8}>
          <InputNumber
            min={minValue}
            max={maxValue}
            value={value}
            onChange={onChangeFunc}
            formatter={formatter}
            parser={parser}
            size="large"
            style={{
              width: '100%',
              color: '#1a345b'
            }}
          />
        </Col>
      </Row>
    </div>
  )
}

export default InputValue

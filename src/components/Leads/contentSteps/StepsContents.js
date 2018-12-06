import React from 'react';
import './style.css';
import { Steps, Icon } from 'antd';
const Step = Steps.Step;


class StepsContents extends React.Component {

  render() {
    return (
     
      <Steps direction="vertical" ClassName='steps' current={9} size='small' >
      <Step title="Finished"  icon={<Icon type="phone" />} description="This is a description.">
      <p>sadasd asd asdas d asd asd asda sd asd asd asd</p>
      </Step>
      <Step title="In Progress" icon={<Icon type="flag" />} description="This is a description." />
      <Step title="Waiting"  icon={<Icon type="flag" />} description="This is a description." />
      <Step title="Waiting"  icon={<Icon type="flag" />}  description="This is a description." />
      <Step title="Waiting"  icon={<Icon type="phone" />} description="This is a description." />
      <Step title="Waiting"  icon={<Icon type="flag" />} description="This is a description." />
      <Step title="Waiting"  icon={<Icon type="flag" />}description="This is a description." />
      <Step title="Waiting"  icon={<Icon type="flag" />} description="This is a description." />
      <Step title="Waiting"  icon={<Icon type="phone" />} description="This is a description." />
      
    </Steps>
        );
    }
}

export default StepsContents;
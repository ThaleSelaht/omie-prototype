import React from 'react';
import './style.css';
import { Card , Icon } from 'antd';


const tabListNoTitle = [{
  key: 'take note',
  tab: [<Icon type="file-done" />, 'Take Notes'],
}, {
  key: 'add activity',
  tab: [<Icon type="calendar" />, 'Add activity'],
}, {
  key: 'Send Email',
  tab: [<Icon type="mail" />, 'Send Email'],
},{

  key: 'Send Email',
  tab: [<Icon type="paper-clip" />, 'Upload files'],

}];

const contentListNoTitle = {

};

class TabsCard extends React.Component {
  state = {
    key: 'tab1',
    noTitleKey: 'app',
  }

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  }

  render() {
    return (
     
        <Card
          style={{ width: '100%' }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          onTabChange={(key) => { this.onTabChange(key, 'noTitleKey'); }}
        >
          {contentListNoTitle[this.state.noTitleKey]}
        </Card>
      

        );
    }
}

export default TabsCard;
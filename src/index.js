import React from 'react';
import ReactDOM from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/tomorrow_night';

class App extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      editorDefaultValue: 'console.log(a);',
    };
  }

  render() {

    return (
        <div>
          <AceEditor
              mode="javascript"
              theme="tomorrow_night"
              name="UNIQUE_ID_OF_DIV"
              onChange={value => {
                this.setState({
                  editorDefaultValue: value
                });
              }}
              defaultValue={this.state.editorDefaultValue}
          />
          <br/>
          <input
              defaultValue={this.state.editorDefaultValue}
              onChange={value => {
                this.setState({
                  editorDefaultValue: value
                });
              }}
          />
        </div>
    );
  }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app'),
);
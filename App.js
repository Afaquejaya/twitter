import React from 'react';
import Drawer from 'react-native-drawer';
import Main from './src/components/Main';
import MyDrawer from './src/components/MyDrawer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      drawerDisabled: false
    };
  }

  closeDrawer = () => {
    this._drawer.close()
  };

  openDrawer = () => {
    this._drawer.open();
  }

  render() {
    return (
      // Set up drawer by specifying required params
      // Content is provided by MyDrawer.js file.
     <Drawer
          ref={(ref) => this._drawer = ref}
          type="static"
          content={<MyDrawer />}
          tapToOpen={true}
          tapToClose={true}
          openDrawerOffset={0.2}
          panCloseMask={0.2}
          closedDrawerOffset={-3}
          styles={drawerStyle}
          tweenHandler={(ratio) => ({ main: { opacity: (2 - ratio) / 2 } })
        }
     >
        {/*Then Load the main file*/}
          <Main />
        </Drawer>
    );
  }
}

const drawerStyle = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.9, shadowRadius: 3 },
    main: { paddingLeft: 4 }
};

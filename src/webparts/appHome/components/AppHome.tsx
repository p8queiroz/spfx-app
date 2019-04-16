import * as React from 'react';
import styles from './AppHome.module.scss';
import { IAppHomeProps } from './IAppHomeProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class AppHome extends React.Component<IAppHomeProps, {}> {
  public render(): React.ReactElement<IAppHomeProps> {
    return (
      <div className={ styles.appHome }>
        <div className={ styles.content }>
          this is the main content of the application
        </div>
      </div>
    );
  }
}

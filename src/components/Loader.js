import React, { PureComponent } from 'react';
import ContentLoader from 'react-native-easy-content-loader';

export default class Loader extends PureComponent{
	render () {
		const {loaded, children, row, size} = this.props;
		return(
			<ContentLoader
			active
			containerStyles={{marginTop: 10}}
			paragraphStyles={{width: '100%', borderRadius: 8}}
			title={false}
			pRows={row}
			pHeight={size}
			primaryColor={"rgba(51,51,51, 1)"}
			secondaryColor={"rgba(68,68,68, 1)"}
			loading={!loaded}>
			{children}
			</ContentLoader>
			);
	}
}
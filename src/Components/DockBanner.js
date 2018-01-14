import React from 'react';
import Image from './Image';

export class DockBanner extends React.Component {
    render(){
        return(
            <div>
                {'left' === this.props.panelPosition &&
                    <Image
                        src={'https://calderaforms.com/wp-content/uploads/2016/06/cf-banner.png'}
                        alt={'Caldera Forms Banner'}
                        width={'100%'}
                    />
                }

            </div>
        )
    }
}

import React, { useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import style from './Welcome.less';
import loadClock from '../utils/canvasclock'

export default (): React.ReactNode => {
    useEffect(() => {
        loadClock()
    }, [])
    return (
        <PageHeaderWrapper>
            <div className={style.welcome}>
                <span className={style.welcomeText}>欢迎欢迎，热烈欢迎，**领导前来视察工作！</span>
            </div>
            <div style={{ width: '100%', margin: 'auto' }}>
                <canvas id='clock' width="500" height="500">浏览器不支持 canvas</canvas>
            </div>
        </PageHeaderWrapper>
    )
};
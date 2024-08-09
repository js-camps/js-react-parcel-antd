import "../styles/App.less";

import { Button as AntButton } from 'antd';

export function App() {
    return (
        <div className="landing-main-text">
            <h1>Welcome to Labs Basic SPA</h1>
            <div className="landing-main-text">
                <p>
                This is an example of how we&apos;d like for you to use <span>antd</span>.
                </p>

                <AntButton type="primary">Primary Button</AntButton>

            </div>
        </div>
    );
  }
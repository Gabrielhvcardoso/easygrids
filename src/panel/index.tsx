import { FunctionComponent, MouseEventHandler, useState } from 'react'
import cs from 'classnames';
import './styles.scss'

const Panel: FunctionComponent = () => {
    const [visible, setVisible] = useState(false);

    const handleClick: MouseEventHandler = event => {
        if (!visible) {
            setVisible(true)
            event.preventDefault()
        }
    }

    const handleBackdropClick: MouseEventHandler = event => {
        if (visible) {
            setVisible(false)
            event.preventDefault()
        }
    }

    return (
        <>
            <div
                className='panel_backdrop'
                onClick={handleBackdropClick}
            >
                Backdrop
            </div>
            <div
                className={cs('panel', visible && 'visible')}
                onClick={handleClick}
            >
                Panel
            </div>
        </>
    )
}

export default Panel

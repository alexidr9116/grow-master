import { Icon } from '@iconify/react'
import NProgressBar from './NProgressBar'

export default function LoadingScreen({ nprogress = true }) {
    return (
        <>
            {nprogress && <NProgressBar />}
            {!nprogress &&
                <div className='w-full h-screen justify-center items-center flex'>
                    <Icon icon="eos-icons:bubble-loading" width={40} height={40} />

                </div>
            }
        </>

    )
}
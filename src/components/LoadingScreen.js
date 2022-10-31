import {Icon} from '@iconify/react'

export default function LoadingScreen(){
    return(
        <div className='w-full h-full justify-center items-center flex'>
            <Icon icon = "eos-icons:bubble-loading" width={40} height={40} />
           
        </div>
    )
}
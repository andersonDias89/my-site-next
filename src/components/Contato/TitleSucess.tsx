import { MdMarkEmailRead } from 'react-icons/md'

export function TitleSucess() {
    return (
        <div className="w-1/2 flex items-center justify-center flex-col animation-transition-left">
            <div className="w-2/3 flex items-center justify-end">
                <div className='text-[160px] text-blueLight'>
                    <MdMarkEmailRead />
                </div>
            </div>
        </div>
    )
}
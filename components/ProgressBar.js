
export default function ProgressBar({current, total}) {

    return (
        <div>
            <div className="flex flex-col justify-center h-20 md:h-40" aria-hidden="true">
                <div className="bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-1 bg-brand-blue rounded-full" style={{ width: `${100*current/total}%` }} />
                </div>
                <p className="flex text-xs justify-end mt-1">
                    {Math.round(100 * current/total)}% complete
                </p>
            </div>

        </div>
        
    )
}




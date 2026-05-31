import { useEffect, useState } from 'react'
import { getVisitorCountFromFirestore, incrementUniqueVisitorCount } from '../firebase'

const STORAGE_KEY = 'siteVisitCount'
const UNIQUE_VISITOR_KEY = 'siteVisitorTracked'

export default function VisitCounter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (typeof window === 'undefined') {
            return
        }

        async function updateCount() {
            const isVisitorTracked = window.localStorage.getItem(UNIQUE_VISITOR_KEY) === 'true'

            try {
                let nextCount = await getVisitorCountFromFirestore()

                if (!isVisitorTracked) {
                    nextCount = await incrementUniqueVisitorCount()
                    window.localStorage.setItem(UNIQUE_VISITOR_KEY, 'true')
                }

                window.localStorage.setItem(STORAGE_KEY, String(nextCount))
                setCount(nextCount)
            } catch (error) {
                console.warn('Unable to update site visit counter', error)
                const cachedCount = Number(window.localStorage.getItem(STORAGE_KEY) ?? 0)
                setCount(cachedCount)
            }
        }

        updateCount()
    }, [])

    return (
        <div className="visit-counter" aria-label={`Site visits ${count}`}>
            <span className="visit-counter__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
                    <path d="M6 16h2v4H6v-4Zm5-4h2v8h-2v-8Zm5-6h2v14h-2V6Z" fill="#0f172a" />
                    <path d="M4 18.5l4-4 3 3 5-5 4 4" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
            <div className="visit-counter__details">
                <span className="visit-counter__label">Site visits</span>
                <span className="visit-counter__value">{count}</span>
            </div>
        </div>
    )
}

import s from "./Catalog.module.css"

export const CatalogSkeleton = () => {
    return (
        <div>
            <div className={s.catalogHeader}>
                <div className="skeleton-shimmer" style={{width: 320, height: 32, margin: "0 auto"}}/>
            </div>

            <div className={s.cardsWrap}>
                {Array.from({length: 3}).map((_, idx) => (
                    <div key={idx} className={s.card}>
                        <div
                            className="skeleton-shimmer"
                            style={{height: 24, width: "60%", margin: "0 auto 12px"}}
                        />

                        <div
                            className="skeleton-shimmer"
                            style={{width: "100%", height: 180, borderRadius: 8}}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
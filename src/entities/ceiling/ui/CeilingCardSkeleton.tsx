import { Card, CardContent } from "@mui/material"

export const CeilingCardSkeleton = () => {
    return (
        <Card
            sx={{
                maxWidth: 600,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div className="skeleton-shimmer" style={{ height: 200 }} />

            <CardContent>
                <div className="skeleton-shimmer" style={{ height: 28, width: "70%", marginBottom: 12 }} />

                <div className="skeleton-shimmer" style={{ height: 16, width: "100%", marginBottom: 6 }} />
                <div className="skeleton-shimmer" style={{ height: 16, width: "95%", marginBottom: 6 }} />
                <div className="skeleton-shimmer" style={{ height: 16, width: "90%", marginBottom: 16 }} />

                <div
                    className="skeleton-shimmer"
                    style={{ height: 36, width: "100%", borderRadius: 6 }}
                />
            </CardContent>
        </Card>
    )
}
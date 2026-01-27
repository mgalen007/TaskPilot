function Icon({ width, height }) {
    return (
        <svg width={width} height={height} viewBox="0 0 320 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="#fae150"/>
            <path d="M30 52L70 30L56 70L48 55L30 52Z" fill="#0F172A"/>
            <path d="M40 52L48 60L63 43" stroke="#fae150" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <text x="105" y="62" font-size="30" font-weight="700" fill="black"
                    font-family="Inter, Segoe UI, system-ui, sans-serif">
                TaskPilot
            </text>
</svg>
    )
}

export default Icon
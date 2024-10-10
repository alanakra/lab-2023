export default function Label({name}) {
    const styles = {
        borderWidth: "1px",
        borderRadius: "999px",
        borderStyle: "solid",
        fontSize: "14px",
        lineHeight: 1,
        whiteSpace: "nowrap",
        height: "24px",
        padding: "0px 10px",
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        backgroundColor: "#8250DF",
        borderColor: "transparent",
        fontWeight: 600,
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"`,
        color: 'black'
    };

    return(
        <>
            <span style={styles}>
                {name}
            </span>
        </>
    )
}
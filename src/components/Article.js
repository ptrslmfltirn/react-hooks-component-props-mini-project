function Article ({id, title, date = "January 1, 1970", preview, minutes}) {
    return (
        <article key={id}>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <small> {minuteRender (minutes, title)}</small>
        </article>
    )
}

function minuteRender (minutes, title) {
    let minuteDisplay = ""
    if (minutes > 29) {
        let d = Math.ceil(minutes / 10)
        for (let i =0; i < d; i++ ) {
            minuteDisplay = minuteDisplay + ""
        }
    }
    else {
        let d = Math.ceil(minutes / 5)
        for (let i =0; i < d; i++) {
            minuteDisplay = minuteDisplay + `&#1F371`
        }
    }
    return minuteDisplay
}
export default Article
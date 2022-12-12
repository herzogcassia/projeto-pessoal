import Head from "next/head"
import Link from "next/link"

const Favicon = () => {
    return (
        <head>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="theme-color" content="#000000" />
            <img src="/ico/imageCare.ico" alt="icon-care" className="w-5" />
            <title>Refletiva</title>
        </head>
    )
}

export default Favicon;
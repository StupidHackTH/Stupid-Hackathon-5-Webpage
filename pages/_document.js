import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content="สร้างสิ่งของเพี้ยน ๆ ที่ไม่มีใครต้องการ และทำไอเดียบ้า ๆ บอ ๆ ให้กลายเป็นจริง! งาน Hackathon แบบกี๊ค ๆ ที่ไม่จำกัดไอเดีย ไม่เน้นฝั่งธุรกิจ แต่เน้นความสนุกสำหรับนักพัฒนาแบบเพียว ๆ !!" />
                    <meta name="title" content="The 5th Stupid Hackathon Thailand" />
                    <meta name="description" content="สร้างสิ่งของเพี้ยน ๆ ที่ไม่มีใครต้องการ และทำไอเดียบ้า ๆ บอ ๆ ให้กลายเป็นจริง ! งาน Hackathon แบบกี๊ค ๆ ที่ไม่จำกัดไอเดีย ไม่เน้นฝั่งธุรกิจ แต่เน้นความสนุกสำหรับนักพัฒนาแบบเพียว ๆ !!" />

                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
                    <meta property="og:title" content="The 5th Stupid Hackathon Thailand" />
                    <meta property="og:description" content="สร้างสิ่งของเพี้ยน ๆ ที่ไม่มีใครต้องการ และทำไอเดียบ้า ๆ บอ ๆ ให้กลายเป็นจริง ! งาน Hackathon แบบกี๊ค ๆ ที่ไม่จำกัดไอเดีย ไม่เน้นฝั่งธุรกิจ แต่เน้นความสนุกสำหรับนักพัฒนาแบบเพียว ๆ !!" />
                    <meta property="og:image" content="/banner.png" />
                    
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="/banner.png" />
                    <meta property="twitter:title" content="The 5th Stupid Hackathon Thailand" />
                    <meta property="twitter:description" content="สร้างสิ่งของเพี้ยน ๆ ที่ไม่มีใครต้องการ และทำไอเดียบ้า ๆ บอ ๆ ให้กลายเป็นจริง ! งาน Hackathon แบบกี๊ค ๆ ที่ไม่จำกัดไอเดีย ไม่เน้นฝั่งธุรกิจ แต่เน้นความสนุกสำหรับนักพัฒนาแบบเพียว ๆ !!" />
                    <meta property="twitter:image" content="/banner.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;
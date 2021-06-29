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
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../componenets/layouts/main"

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider>
            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </ChakraProvider>
    )
}
//aidhiawhd
export default Website
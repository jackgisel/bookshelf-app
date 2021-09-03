import { useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { SignupForm } from "app/auth/components/SignupForm"
import { Flex, Box, Spacer } from "@chakra-ui/react"

const SignupPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <Flex align="center" justify="center" flexDirection="column">
      <Spacer h="70px" />
      <Box p={4} borderWidth="1px" rounded="lg" shadow="1px 1px 3px rgba(0,0,0,0.3)">
        <SignupForm onSuccess={() => router.push(Routes.Home())} />
      </Box>
    </Flex>
  )
}

SignupPage.redirectAuthenticatedTo = "/"
SignupPage.getLayout = (page) => <Layout title="Sign Up">{page}</Layout>

export default SignupPage

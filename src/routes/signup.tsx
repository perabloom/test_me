import {
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import {
  Link as RouterLink,
  createFileRoute,
  redirect,
} from "@tanstack/react-router"
import { useEffect } from "react";
import { type SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "@tanstack/react-router"

import Logo from "/assets/images/zflyn.png"
import type { UserRegister } from "../client"
import useAuth, { isLoggedIn } from "../hooks/useAuth"
import { confirmPasswordRules, emailPattern, passwordRules } from "../utils"

export const Route = createFileRoute("/signup")({
  component: SignUp,
  beforeLoad: async () => {
    if (isLoggedIn()) {
      throw redirect({
        to: "/dashboard",
      })
    }
  },
})

interface UserRegisterForm extends UserRegister {
  confirm_password: string
}

function SignUp() {
  const query = new URLSearchParams(window.location.search);
  const emailFromQuery = query.get('email') || '';

  const navigate = useNavigate()
  const { signUpMutation } = useAuth()
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<UserRegisterForm>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      email: emailFromQuery,
      full_name: "",
      password: "",
      confirm_password: "",
    },
  })

  const onSubmit: SubmitHandler<UserRegisterForm> = (data) => {
    try {
      signUpMutation.mutate(data)
      navigate({ to: "/dashboard" })
    } catch (error) {
      console.error(error)
      // error is handled by useAuth hook
    }

  }
  useEffect(() => {
    // Load the Facebook SDK script
    const loadFacebookSDK = () => {
      (window as any).fbAsyncInit = function() {
        (window as any).FB.init({
          appId      : '1155592099418918', // Replace with your app ID
          cookie     : true,
          xfbml      : true,
          version    : 'v22.0' // Replace with the API version you want to use
        });

        (window as any).FB.AppEvents.logPageView();

        // Check login status
        (window as any).FB.getLoginStatus(function(response: any) {
          statusChangeCallback(response);
        });
      };

      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        (js as HTMLScriptElement).src = "https://connect.facebook.net/en_US/sdk.js";
        fjs?.parentNode?.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    };

    loadFacebookSDK();
  }, []);

  const statusChangeCallback = (response: any) => {
    if (response.status === 'connected') {
      console.log('User is logged into Facebook and your app.');
      // Redirect to the logged-in experience
      navigate({ to: "/dashboard" });
    } else if (response.status === 'not_authorized') {
      console.log('User is logged into Facebook but not your app.');
      // Prompt them with the Login dialog
      handleFacebookLogin();
    } else {
      console.log('User is not logged into Facebook.');
      // Show the Login Button or prompt them with the Login dialog
      handleFacebookLogin();
    }
  };


  const handleFacebookLogin = () => {
    (window as any).FB.login((response: any) => {
      if (response.authResponse) {
        console.log('Welcome! Fetching your information.... ');
        (window as any).FB.api('/me', function(response: any) {
          console.log('Good to see you, ' + response.name + '.');
          // Handle the response and navigate or update state as needed
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    });
  };

  return (
    <>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        justify="center"
        h="100vh"
        bg={useColorModeValue('white', 'gray.800')}
      >
        <Container
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          h="100vh"
          maxW="sm"
          alignItems="stretch"
          justifyContent="center"
          gap={4}
          centerContent
        >
          <Image
            src={Logo}
            alt="FastAPI logo"
            height="auto"
            maxW="2xs"
            alignSelf="center"
            mb={4}
          />
          <FormControl id="full_name" isInvalid={!!errors.full_name}>
            <FormLabel htmlFor="full_name" srOnly>
              Full Name
            </FormLabel>
            <Input
              id="full_name"
              minLength={3}
              {...register("full_name", { required: "Full Name is required" })}
              placeholder="Full Name"
              type="text"
              bg={useColorModeValue('gray.100', 'gray.700')}
              _placeholder={{ color: 'gray.500' }}
            />
            {errors.full_name && (
              <FormErrorMessage>{errors.full_name.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl id="email" isInvalid={!!errors.email}>
            <FormLabel htmlFor="username" srOnly>
              Email
            </FormLabel>
            <Input
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: emailPattern,
              })}
              placeholder="Email"
              type="email"
              bg={useColorModeValue('gray.100', 'gray.700')}
              _placeholder={{ color: 'gray.500' }}
            />
            {errors.email && (
              <FormErrorMessage>{errors.email.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl id="password" isInvalid={!!errors.password}>
            <FormLabel htmlFor="password" srOnly>
              Password
            </FormLabel>
            <Input
              id="password"
              {...register("password", passwordRules())}
              placeholder="Password"
              type="password"
              bg={useColorModeValue('gray.100', 'gray.700')}
              _placeholder={{ color: 'gray.500' }}
            />
            {errors.password && (
              <FormErrorMessage>{errors.password.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            id="confirm_password"
            isInvalid={!!errors.confirm_password}
          >
            <FormLabel htmlFor="confirm_password" srOnly>
              Confirm Password
            </FormLabel>

            <Input
              id="confirm_password"
              {...register("confirm_password", confirmPasswordRules(getValues))}
              placeholder="Repeat Password"
              type="password"
              bg={useColorModeValue('gray.100', 'gray.700')}
              _placeholder={{ color: 'gray.500' }}
            />
            {errors.confirm_password && (
              <FormErrorMessage>
                {errors.confirm_password.message}
              </FormErrorMessage>
            )}
          </FormControl>
          <Button
            colorScheme="blue"
            type="submit"
            isLoading={isSubmitting}
          >
            Sign Up
          </Button>
          <Button onClick={handleFacebookLogin} colorScheme="blue">
            Login with Facebook
          </Button>
          <Text>
            Already have an account?{" "}
            <Link as={RouterLink} to="/login" color="blue.500">
              Log In
            </Link>
          </Text>
        </Container>
      </Flex>
    </>
  )
}

export default SignUp

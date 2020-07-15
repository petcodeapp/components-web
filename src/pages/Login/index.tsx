import React from 'react';

import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/core';

import InputWithIcon from '../../components/input/InputWithIcon';
import SolidButton from '../../components/button/SolidButton';

const LeftContainer: React.FunctionComponent = ({ children }) => (
    <Flex direction='column' flexGrow={1} flexBasis='calc(50% - 96px)' alignItems='center' justifyContent='center' marginX={ { xs: 4, md: 32 } }>
        { children }
    </Flex>
);

const HeaderTextGroup = () => (
    <>
        <Text color='petcode.neutral.400' fontSize='2xl' fontWeight='bold' textTransform='uppercase'>
            Welcome to
        </Text>
        <Box fontSize={ { xs: '6xl', md: '7xl', lg: '8xl' } }>
            <Heading as='span' color='petcode.yellow' fontSize='inherit'>
                Pet
            </Heading>
            <Heading as='span' color='petcode.blue.400' fontSize='inherit'>
                Code
            </Heading>
        </Box>
        <Text color='petcode.neutral.600' fontSize={ { xs: 'xl', md: '3xl' } } fontWeight='thin' textAlign='center' lineHeight='shorter'>
            Log in to view and update your pet profile with the latest information.
        </Text>
    </>
);

const LoginForm = () => (
    <Flex direction='column' alignItems='center' width={ { xs: '90%', md: '80%', lg: '70%' } } marginY={3}>
        <InputWithIcon
            iconName='username'
            inputGroupProps={ { width: '100%', marginY: 2 } }
            inputProps={ { placeholder: 'Username' } }
        />
        <InputWithIcon
            iconName='password'
            inputGroupProps={ { width: '100%', marginY: 2 } }
            inputProps={ { type: 'password', placeholder: 'Password' } }
        />
        <Text color='petcode.blue.400' fontSize='lg' alignSelf='flex-end'>
            <Link>Forgot Password?</Link>
        </Text>
        <SolidButton variantColor='petcode.blue' marginTop={3}> 
            <Text fontSize='xl' fontWeight='thin' textTransform='uppercase'>Sign In</Text>
        </SolidButton>
        <Text color='petcode.neutral.500' fontSize='lg'>
            Don't have an account yet?{ ' ' }
            <Link color='petcode.blue.400'>
                Sign Up
            </Link>
        </Text>
    </Flex>
);

const RightContainer: React.FunctionComponent = ({ children }) => (
    <Flex
        display={ { xs: 'none', lg: 'flex' } }
        flexDir='column' flexBasis='720px' flexShrink={1} alignItems='center' justifyContent='center'
        backgroundImage='url(/media/dogs-on-yellow-wall.png)' backgroundPosition='center'
    >
        { children }
    </Flex>
);

const LogoWithTagLine = () => (
    <>
        <Image alt='PetCode Logo' src='/media/petcode-logo.png'/>
        <Heading color='petcode.neutral.700' fontSize={ { lg: '3xl', xl: '4xl' } } fontWeight='thin' textAlign='center' marginX={ { lg: 4, xl: 24 } }>
            One Code. An endless suite of features for pet owners.
        </Heading>
    </>
)

const LoginPage = () => (
    <Flex direction='row' height='100%'>
        <LeftContainer>
            <HeaderTextGroup/>
            <LoginForm/>
        </LeftContainer>
        <RightContainer>
            <Box flexGrow={1}/>
            <LogoWithTagLine/>
            <Box flexGrow={3}/>
        </RightContainer>
    </Flex>
);

export default LoginPage;

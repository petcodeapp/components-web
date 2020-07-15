import React from 'react';

import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/core';

import InputWithIcon from '../components/input/InputWithIcon';
import SolidButton from '../components/button/SolidButton';

const IndexPage = () => (
    <Flex direction='row' height='100%'>
        <Flex direction='column' flexGrow={1} flexBasis='calc(50% - 96px)' alignItems='center' justifyContent='center' marginX={32}>
            <Text color='petcode.neutral.400' fontSize='2xl' fontWeight='bold' textTransform='uppercase' margin={0}>
                Welcome to
            </Text>
            <Box>
                <Heading as='span' color='petcode.yellow' fontSize='logo' margin={0}>
                    Pet
                </Heading>
                <Heading as='span' color='petcode.blue.400' fontSize='logo' margin={0}>
                    Code
                </Heading>
            </Box>
            <Text color='petcode.neutral.600' fontSize='3xl' fontWeight='thin' textAlign='center' lineHeight='shorter' margin={0}>
                Log in to view and update your pet profile with the latest information.
            </Text>
            <Flex direction='column' alignItems='center' width='65%' marginY={3}>
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
                <Text color='petcode.blue.400' fontSize='lg' alignSelf='flex-end' margin={0}>
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
        </Flex>
        <Flex
            direction='column' flexBasis='720px' flexShrink={1} alignItems='center' justifyContent='center'
            backgroundImage='url(/media/dogs-on-yellow-wall.png)' backgroundPosition='top'
        >
            <Box flexGrow={1}/>
            <Image alt='PetCode Logo' src='/media/petcode-logo.png'/>
            <Heading color='petcode.neutral.700' fontSize='4xl' fontWeight='thin' textAlign='center' marginX={24}>
                One Code. An endless suite of features for pet owners.
            </Heading>
            <Box flexGrow={3}/>
        </Flex>
    </Flex>
);

export default IndexPage;
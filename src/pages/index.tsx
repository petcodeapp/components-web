import React from 'react';

import { Box, Button, Flex, Heading, Icon, Image, Input, InputGroup, InputLeftElement, Link, Text } from '@chakra-ui/core';

const IndexPage = () => (
    <Flex direction='row' height='100%'>
        <Flex direction='column' flexGrow={1} flexBasis='calc(50% - 96px)' alignItems='center' justifyContent='center' marginX='32'>
            <Text color='petcode.neutral.400' fontSize='2xl' fontWeight='bold' textTransform='uppercase' margin={0}>
                Welcome to
            </Text>
            <Box>
                <Heading as='span' color='petcode.yellow' fontSize='logo' margin='0'>
                    Pet
                </Heading>
                <Heading as='span' color='petcode.blue.400' fontSize='logo' margin='0'>
                    Code
                </Heading>
            </Box>
            <Text color='petcode.neutral.600' fontSize='3xl' fontWeight='thin' textAlign='center' lineHeight='shorter' margin={0}>
                Log in to view and update your pet profile with the latest information.
            </Text>
            <Flex direction='column' alignItems='center' width='65%' marginY='3'>
                <InputGroup size='lg' width='100%' marginY='2'>
                    <InputLeftElement color='petcode.neutral.400' children={ <Icon size='25px' name='username' color='petcode.neutral.400'/> }/>
                    <Input rounded='full' placeholder='Username' color='petcode.neutral.700' borderColor='petcode.neutral.400' focusBorderColor='petcode.neutral.500'/>
                </InputGroup>
                <InputGroup size='lg' width='100%' marginY='2'>
                    <InputLeftElement children={ <Icon size='25px' name='password' color='petcode.neutral.400'/> }/>
                    <Input rounded='full' placeholder='Password' color='petcode.neutral.700' borderColor='petcode.neutral.400' focusBorderColor='petcode.neutral.500'/>
                </InputGroup>
                <Text color='petcode.blue.400' fontSize='lg' alignSelf='flex-end' margin='0'>
                    <Link>Forgot Password?</Link>
                </Text>
                <Button size='lg' variantColor='petcode.blue' variant='solid' border='none' rounded='full' width='100%' marginTop='3' height='57px'> 
                    <Text fontSize='xl' fontWeight='thin' textTransform='uppercase'>Sign In</Text>
                </Button>
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
            <Heading color='petcode.neutral.700' fontSize='4xl' fontWeight='thin' textAlign='center' marginX='24'>
                One Code. An endless suite of features for pet owners.
            </Heading>
            <Box flexGrow={3}/>
        </Flex>
    </Flex>
);

export default IndexPage;

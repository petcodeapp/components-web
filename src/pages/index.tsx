import React from 'react';

import { Box, Button, Flex, Heading, Icon, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/core';

const IndexPage = () => (
    <Flex direction='row' height='100%'>
        <Flex direction='column' flexBasis='50%' alignItems='center' justifyContent='center' paddingX='32'>
            <Text color='petcode.neutral.400' fontSize='2xl' fontWeight='bold' textTransform='uppercase' margin={0}>
                Welcome to
            </Text>
            <Box>
                <Heading as='span' color='petcode.yellow' fontSize='logo' margin='0'>
                    Pet
                </Heading>
                <Heading as='span' color='petcode.blue' fontSize='logo' margin='0'>
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
                <Text color='petcode.blue' fontSize='lg' alignSelf='flex-end' margin='0'>
                    Forgot Password?
                </Text>
            </Flex>
        </Flex>
        <Flex direction='column' flexBasis='50%'>

        </Flex>
    </Flex>
);

export default IndexPage;

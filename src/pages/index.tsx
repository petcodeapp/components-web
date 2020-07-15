import React from 'react';

import { Box, Flex, Heading, Input, Text } from '@chakra-ui/core';

const IndexPage = () => (
    <Flex direction='row' height='100%'>
        <Flex direction='column' flexBasis='50%' alignItems='center' justifyContent='center' paddingX='32'>
            <Text color='petcode.neutral.400' fontSize='2xl' fontWeight='bold' textTransform='uppercase' margin={0}>
                Welcome to
            </Text>
            <Box>
                <Heading as='span' color='petcode.yellow' fontSize='logo' margin={0}>
                    Pet
                </Heading>
                <Heading as='span' color='petcode.blue' fontSize='logo' margin={0}>
                    Code
                </Heading>
            </Box>
            <Text color='petcode.neutral.600' fontSize='3xl' fontWeight='thin' textAlign='center' lineHeight='shorter' margin={0}>
                Log in to view and update your pet profile with the latest information.
            </Text>
        </Flex>
        <Flex direction='column' flexBasis='50%'>

        </Flex>
    </Flex>
);

export default IndexPage;

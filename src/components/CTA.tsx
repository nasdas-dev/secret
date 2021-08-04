import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
} from '@chakra-ui/react';
import styled from 'styled-components';
import { InputField } from './InputField';
import LinkSubmit from './LinkSubmit';

const FlexWrapper = styled.section`
background: #0f0c29;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`

export default function CTA() {
    return (
        <FlexWrapper>
            <Flex
                w={'full'}
                h={'100vh'}
                backgroundSize={'cover'}
                backgroundPosition={'center'}>
                <VStack
                    w={'full'}
                    justify={'center'}
                    px={useBreakpointValue({ base: 4, md: 8 })}
                >
                    <Text
                        padding={10}
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                        Lade alle deine Podcasts von der Uni Zürich und ETH herunter!
                    </Text>
                    <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>

                        <LinkSubmit />
                    </Stack>
                </VStack>
            </Flex>
        </FlexWrapper>
    );
}


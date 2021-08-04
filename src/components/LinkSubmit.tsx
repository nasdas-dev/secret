import React, { FormEvent, ChangeEvent, useState } from 'react';
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

export default function LinkSubmit() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'initial' | 'submitting' | 'success'>(
    'initial'
  );
  const [error, setError] = useState(false);

  return (
    <Flex
      align={'center'}
      justify={'center'}
    >
      <Container
        maxW={'2xl'}
        boxShadow={'xl'}
        rounded={'lg'}
        p={10}
        direction={'column'}>
        <Heading
          as={'h2'}
          fontSize={{ base: 'xl', sm: '2xl' }}
          textAlign={'center'}
          mb={10}
          color="whiteAlpha.700">
          Füge den Link ein, um den Download zu starten
        </Heading>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          as={'form'}
          spacing={'12px'}
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            setError(false);
            setState('submitting');

            // remove this code and implement your submit logic right here
            setTimeout(() => {
              if (email === 'fail@example.com') {
                setError(true);
                setState('initial');
                return;
              }

              setState('success');
            }, 1000);
          }}>
          <FormControl>
            <InputGroup>
              <InputLeftAddon 
                bg={'blackAlpha.400'}
                border={'none'}
                color={'whiteAlpha.700'}children="https://" />
              <Input
                variant={'solid'}
                borderWidth={1}
                color={'white'}
                bg={'blackAlpha.400'}
                _placeholder={{
                  color: 'gray.400',
                }}
                borderColor={useColorModeValue('gray.900', 'gray.700')}
                id={'email'}
                type={'email'}
                required
                placeholder={''}
                aria-label={'Your Email'}
                value={email}
                disabled={state !== 'initial'}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </InputGroup>

          </FormControl>
          <FormControl w={{ base: '100%', md: '40%' }}>
            <Button
              bg={state === 'success' ? 'green' : 'blackAlpha.200'}
              color={'whiteAlpha.700'}
              isLoading={state === 'submitting'}
              w="100%"
              type={state === 'success' ? 'button' : 'submit'}>
              {state === 'success' ? <CheckIcon /> : 'Submit'}
            </Button>
          </FormControl>
        </Stack>
        <Text
          mt={2}
          textAlign={'center'}
          color={error ? 'red.500' : 'gray.500'}>
          {error
            ? 'Oh no an error occured! 😢 Please try again later.'
            : ""}
        </Text>
      </Container>
    </Flex>
  );
}
'use client';
import React from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
} from '@chakra-ui/react';

const CustomInput = ({
  id,
  title,
  errorMessage,
  style,
  values,
  handleChange,
  handleBlur,
  isInvalid,
  backgroundColor,
  hoverStyles,
  type,
  ...props
}) => {
  return (
    <>
      <FormControl isInvalid={isInvalid}>
        <InputGroup size="lg">
          <Input
            style={style}
            as="input"
            type={type || 'text'}
            id={id}
            value={values}
            onChange={handleChange}
            onBlur={handleBlur}
            color={'#000000'}
            backgroundColor={backgroundColor || 'white'} // Use the provided backgroundColor or a default value
            _hover={hoverStyles || { backgroundColor: '#ffffff' }}
            variant="filled"
            placeholder={`${title}`}
            {...props}
          />
        </InputGroup>

        <FormErrorMessage size={'xs'} color={'red'} fontWeight="">
          {errorMessage}
        </FormErrorMessage>
      </FormControl>
    </>
  );
};

export default CustomInput;

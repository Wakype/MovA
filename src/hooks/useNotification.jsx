import { useToast } from '@chakra-ui/react';

export default function useNotification() {
  const toast = useToast({ position: 'top-right' });

  function toastSuccess(message) {
    toast({
      position: 'top-right',
      title: 'Berhasil',
      description: message,
      status: 'success',
      duration: 4000,
      isClosable: true,
    });
  }

  function toastError() {
    toast({
      title: 'Error',
      description: 'Ada Kesalahan',
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
  }
  function toastWarning(message) {
    toast({
      title: 'Warning',
      description: message,
      status: 'warning',
      duration: 5000,
      isClosable: true,
    });
  }

  return { toastSuccess, toastError, toastWarning };
}

import { Platform } from 'react-native';

export default {
  normal: Platform.OS === 'ios' ? 'Cairo-SemiBold' : 'Cairo-SemiBold',
  bold: Platform.OS === 'ios' ? 'Cairo-Bold' : 'Cairo-Bold',
  boldIsStyle: true,
};

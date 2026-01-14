import * as bcrypt from 'bcrypt';

export const encryptText = async (text: string): Promise<string> => {
  const hash = await bcrypt.hash(text, 10); 
  return hash;
};
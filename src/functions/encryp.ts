import * as bcrypt from 'bcrypt';

export const encryptText = async (text: string): Promise<string> => {
  const hash = await bcrypt.hash(text, 10); 
  return hash;
};

export const compareText = async (text: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(text, hash);
};


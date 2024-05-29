export type gardian = {
  fatherName: string;
  fatherOccopation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccopation: string;
  motherContactNo: string;
};

export type userName = {
  firstName: string;
  midleName: string;
  lastName: string;
};

export type localGardian = {
  name: string;
  addrase: string;
  number: string;
};

export type student = {
  id: string;
  name: userName;
  gender: 'Male' | 'Female';
  dathOfBirth?: string;
  email: string;
  contactNo: string;
  emerjencyNo: string;
  BloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddrase: string;
  parmanentAddrase: string;
  gardian: gardian;
  localGardian: localGardian;
  profile?: string;
  isActive: 'Active' | 'InActive';
};

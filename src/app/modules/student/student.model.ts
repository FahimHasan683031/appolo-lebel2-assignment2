import { Schema, model } from 'mongoose';
import { gardian, localGardian, student, userName } from './student.interface';

const userNameScama = new Schema<userName>({
  firstName: {
    type: String,
    required: true,
  },
  midleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const gardianScama = new Schema<gardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccopation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccopation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
});

const localGardianScama = new Schema<localGardian>({
  name: {
    type: String,
    required: true,
  },
  addrase: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
});

const studentScama = new Schema<student>({
  id: {
    type: String,
  },
  name: userNameScama,
  gender: ['Male', 'Female'],
  dathOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: {
    type: String,
    required: true,
  },
  emerjencyNo: {
    type: String,
    required: true,
  },
  BloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddrase: {
    type: String,
    required: true,
  },
  parmanentAddrase: {
    type: String,
    required: true,
  },
  gardian: gardianScama,
  localGardian: localGardianScama,
  profile: { type: String },
  isActive: ['Active', 'InActive'],
});

export const StudentModel = model<student>('Student', studentScama);

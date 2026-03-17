export interface FormInterface {
  firstName?: string;
  type?: 'residential' | 'commercial';
  lastName?: string;
  phone?: string;
  email?: string;
  postCode?: string;
  averageBill?:string;
  electric_bill?:string[];
  message?:string
}
import { UserProfile } from '@/types';

// TODO: replace with Supabase query
export const mockUser: UserProfile = {
  id: 'usr-1',
  fullName: 'Amina Wanjiru',
  phoneNumber: '+254712345678',
  vehicleRegistration: 'KDM 482L',
  preferredFuel: 'petrol',
  loyaltyPoints: 368,
  notificationPreference: {
    pushEnabled: true,
    priceAlertsEnabled: true,
  },
};
